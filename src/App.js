import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import tiles from "./tiles.json";

let score = 0;
let topScore = 0;
let message = "Click on an image to begin!";

class App extends Component {
  state = {
      tiles,
      score,
      topScore,
      message
  };

  setClicked = id => {
    const tiles = this.state.tiles;

    const clickedTile = tiles.filter(tile => tile.id === id);

    if (clickedTile[0].clicked){

        console.log ("Correct Guesses: " + score);
        console.log ("Best Score: " + topScore);

        score = 0;
        message = "Bummer! You already clicked on this one."

        for (let i = 0 ; i < tiles.length ; i++){
            tiles[i].clicked = false;
        }

        this.setState({ message });
        this.setState({ score });
        this.setState({ tiles });

    } else if (score < 11) {

        clickedTile[0].clicked = true;

        score++;
        
        message = "Great! You haven't click on that one yet! Keep going!";

        if (score > topScore){
            topScore = score;
            this.setState({ topScore });
        }

        tiles.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ tiles });
        this.setState({ score });
        this.setState({ message });
    } else {

        clickedTile[0].clicked = true;

        score = 0;

        message = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
        topScore = 12;
        this.setState({ topScore });
        
        for (let i = 0 ; i < tiles.length ; i++){
            tiles[i].clicked = false;
        }

        tiles.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ tiles });
        this.setState({ score });
        this.setState({ message });

    }
};


  render () {
    const { message, score, tiles, topScore } = this.state;
    return (
      <div>
           <Navbar
            className="row"
           >
             <a className = "navbar-brand" href = "/">Clicky Game</a>

             <h3 className="navb-item">{ message }</h3>

             <h3 className="scoreSummary card-header">
               Score: { score } | Top Score: { topScore }
             </h3>
           </Navbar>
           <Hero backgroundImage = "https:i.imgur.com/PRIGxxh.jpg">
             <h1 className = "text-center">Clicky Game!</h1>
             <h2>Click on an image to earn points, but don't click on any more than once!</h2>
         </Hero>
         <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {this.state.tiles.map(tile => (
            <Card
            setClicked={this.setClicked}
            id={tile.id}
            key={tile.id}
            image={tile.image}
            />
          ))}
        </div>
        <Footer />
       </div>
    )
  }
}
  
  export default App;