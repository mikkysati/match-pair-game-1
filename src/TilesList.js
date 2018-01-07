import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TileIcon from './TileIcon';

export default class TilesList extends Component {

    constructor(props) {
        super(props);
        this.firstTileOpen = true;
        this.tileOpenedIndex = -1;
        this.restrictOpening = false;
    }

    openTile = (index) => {
        if(this.props.tilesOpened[index] || this.restrictOpening || this.props.tilesChecked[index]) return;
        let newTilesOpened = [...this.props.tilesOpened];
        newTilesOpened[index] = true;
        this.props.setTilesOpened(newTilesOpened);
        if (this.firstTileOpen) {
            this.tileOpenedIndex = index;
        } else {
            this.restrictOpening = true;
            if(this.props.tiles[index] !== this.props.tiles[this.tileOpenedIndex]) {
                setTimeout(()=>{
                    newTilesOpened[index] = false;
                    newTilesOpened[this.tileOpenedIndex] = false;
                    this.props.setTilesOpened(newTilesOpened)
                    this.restrictOpening = false;
                }, 1500);
                this.props.changeScore(-2);
            } else {
                this.props.changeScore(20);
                newTilesOpened[index] = false;
                newTilesOpened[this.tileOpenedIndex] = false;
                let newTilesChecked = [...this.props.tilesChecked];
                newTilesChecked[index] = true;
                newTilesChecked[this.tileOpenedIndex] = true;
                this.props.setTilesOpened(newTilesOpened);
                this.props.setTilesChecked(newTilesChecked);
                this.restrictOpening = false;
                this.props.increaseBoxesChecked();
            }
        }
        this.firstTileOpen = !this.firstTileOpen;
    }

    getTilesList = () => {
        return this.props.tiles.map((tile, index) => {
            return (
                <div key={index} className="tile-box">
                    <div onClick={this.openTile.bind(this, index)}>
                        <TileIcon
                            index={index}
                            tile={tile}
                            tilesOpened={this.props.tilesOpened}
                            tilesChecked={this.props.tilesChecked}
                        />
                    </div>
                </div>
            );
        });
    }

    render() {
        const center = {
            textAlign: "center"
        };
        return(
            <div style={center}>
                <div className="tiles-container">
                    {this.getTilesList()}
                </div>
            </div>
        )
    }
}

TilesList.protoTypes = {
    changeScore: PropTypes.func.isRequired,
    increaseBoxesChecked: PropTypes.func.isRequired,
    tiles: PropTypes.array.isRequired,
    tilesOpened: PropTypes.array.isRequired,
    tilesChecked: PropTypes.array.isRequired,
    setTilesOpened: PropTypes.func.isRequired,
    setTilesChecked: PropTypes.func.isRequired
}