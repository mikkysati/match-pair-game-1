import React from 'react';
import PropTypes from 'prop-types';

const TileIcon = ({index, tile, tilesOpened, tilesChecked}) => {
    let tileIcon;
    if (tilesOpened[index] && !tilesChecked[index]) {
        tileIcon = <span><i className={'fa ' + tile} aria-hidden="true"></i></span>;
    } else if (tilesChecked[index]) {
        tileIcon = <span className="icons-checked animated flash">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </span>;
    } else {
        tileIcon = <span className="icons-default"> o </span>
    }
    return tileIcon;
}

TileIcon.propTypes = {
    index: PropTypes.number.isRequired,
    tile: PropTypes.string.isRequired,
    tilesOpened: PropTypes.array.isRequired,
    tilesChecked: PropTypes.array.isRequired
}

export default TileIcon;