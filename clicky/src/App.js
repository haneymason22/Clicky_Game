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

    // Filter for the clicked match
    const clickedTile = tiles.filter(Tile => Tile.id === id);

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

    // Otherwise, if clicked = false, and the user hasn't finished
    } else if (score < 11) {

        // Set its value to true
        clickedTile[0].clicked = true;

        // increment the appropriate counter
        score++;
        
        message = "Great! You haven't click on that one yet! Keep going!";

        if (score > topScore){
            topScore = score;
            this.setState({ topScore });
        }

        // Shuffle the array to be rendered in a random order
        tiles.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.tiles equal to the new tiles array
        this.setState({ tiles });
        this.setState({ score });
        this.setState({ message });
    } else {

        // Set its value to true
        clickedTile[0].clicked = true;

        // restart the guess counter
        score = 0;

        // Egg on the user to play again
        message = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
        topScore = 12;
        this.setState({ topScore });
        
        for (let i = 0 ; i < tiles.length ; i++){
            tiles[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order
        tiles.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
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
            score={score}
            topScore={topScore}
            message={message}
           >
             <a className = "navbar-brand" href = "/">Clicky Game</a>
           </Navbar>
           <Hero backgroundImage = "https:i.imgur.com/PRIGxxh.jpg">
             <h1 className = "text-center">Clicky Game!</h1>
             <h2>Click on an image to earn points, but don't click on any more than once!</h2>
         </Hero>
         <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {tiles.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>
        <Footer />
       </div>
    )
  }
}

//  function App() {
//      return (
//        <div>
//            <Navbar />
//            <Hero backgroundImage = "https:i.imgur.com/PRIGxxh.jpg">
//              <h1 className = "text-center">Clicky Game!</h1>
//              <h2>Click on an image to earn points, but don't click on any more than once!</h2>
//          </Hero>
//          <Content />
//          <Card />
//          <Footer />
//        </div>
//      )
//    }
  
  export default App;