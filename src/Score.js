import React from 'react';
import PropTypes from 'prop-types';

const Score = ({timer, score}) => {
    return(
        <div className="points-container">
            <div>
                Score: <span className="label label-success">{score}</span>
            </div>
            <div>
                00:{timer < 10 ? '0' + timer : timer}
            </div>
        </div>
    )
}

Score.propTypes = {
    timer: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
}

export default Score;