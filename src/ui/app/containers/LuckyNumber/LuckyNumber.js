/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

class LuckyNumber extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay 
          displayName= {this.props.displayName} 
          luckyNumber= {this.props.luckyNumber}
        />

      </article>
    );
  }
}

const mapStateToProps = (state) => {
  const firstname = state._root.entries[2][1].action.username.firstname;
  const lastname = state._root.entries[2][1].action.username.lastname;
  const displayName = firstname + ' ' + lastname 
  const luckyNumber = state._root.entries[2][1].luckyNumber;

  return { displayName, luckyNumber }
};

export default connect(mapStateToProps, {LuckyNumberDisplay})(LuckyNumber);
