/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    const { displayName, luckyNumber} = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
      <h3>
        Hello, {displayName}! <br/><br/>
        Your lucky number is <br/><br/>
        {luckyNumber}
      </h3>
      </div>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  displayName: PropTypes.string,
  luckyNumber: PropTypes.number

};

export default LuckyNumberDisplay;
