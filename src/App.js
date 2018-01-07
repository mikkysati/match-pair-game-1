import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './App.css';
import Score from './Score';
import TilesList from './TilesList';
import Modal from './Modal';
import {getRandomTiles} from "./commonFunctions";

class App extends Component {

    constructor() {
        super();
        this.state = {
            pointsScored: 0,
            openModal: false,
            won: false,
            boxesChecked: 0,
            tiles: getRandomTiles(),
            tilesOpened: [],
            tilesChecked: [],
            timer: 59
        }
    }

    componentDidMount() {
        this.decreaseTimer();
    }

    changeScore = (value) => {
        if (this.state.pointsScored < 10 && value < 0) {
            return;
        }
        this.setState(prevState => {
            return {pointsScored: value + prevState.pointsScored}
        });
    }

    openModal = () => {
        this.setState({openModal: true});
    }

    increaseBoxesChecked = () => {
        this.setState(prevState => {
            return {boxesChecked: prevState.boxesChecked + 1};
        }, () => { // callback after state update
           if (this.state.boxesChecked === 8) {
               this.setState(prevState => {
                   return {pointsScored: this.state.timer + prevState.pointsScored}
               });
               this.setState({won: true});
               this.openModal();
           }
        });
    }

    resetGame = () => {
        this.setState({
            pointsScored: 0,
            openModal: false,
            won: false,
            boxesChecked: 0,
            tiles: getRandomTiles(),
            tilesOpened: [],
            tilesChecked: [],
            timer: 59
        }, () => {
            this.decreaseTimer();
        });
    }

    setTilesOpened = (tilesOpened) => {
        this.setState({tilesOpened});
    }

    setTilesChecked = (tilesChecked) => {
        this.setState({tilesChecked});
    }

    decreaseTimer = () => {
        const interval = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState(prevState => {
                    return {timer: prevState.timer - 1};
                });
            }
            if (this.state.timer === 0) {
                this.openModal();
                clearInterval(interval);
            }
        }, 1000);
    }

  render() {
      return (
          <div>
              <Score
                  score={this.state.pointsScored}
                  openModal={this.openModal}
                  timer={this.state.timer}
                  decreaseTimer={this.decreaseTimer}
              />
              <TilesList
                  changeScore={this.changeScore}
                  increaseBoxesChecked={this.increaseBoxesChecked}
                  tiles={this.state.tiles}
                  tilesOpened={this.state.tilesOpened}
                  tilesChecked={this.state.tilesChecked}
                  setTilesOpened={this.setTilesOpened}
                  setTilesChecked={this.setTilesChecked}
              />
              <Modal
                  won={this.state.won}
                  pointsScored={this.state.pointsScored}
                  openModal={this.state.openModal}
                  resetGame={this.resetGame}
              />
          </div>
      );
  }
}

export default App;
