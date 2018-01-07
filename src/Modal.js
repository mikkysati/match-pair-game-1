import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({won, pointsScored, resetGame, openModal}) => {
    if (!openModal) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-body">
                <div>{won ? 'You won' : 'You lost' }</div>
                <div>Points Scored: {pointsScored} </div>
                <button className="btn btn-default margin-top" onClick={resetGame}>Replay </button>
            </div>
        </div>
    );
}

Modal.propTypes = {
    won: PropTypes.bool.isRequired,
    pointsScored: PropTypes.number.isRequired,
    resetGame: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired
}

export default Modal;