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
import { CONTAINER_KEY } from '../constants';

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
    const luckyNumber=  state.get(CONTAINER_KEY).luckyNumber;
    const firstname = state.get(CONTAINER_KEY).firstname;
    const lastname = state.get(CONTAINER_KEY).lastname;
    const displayName = firstname + ' ' + lastname;

  return { displayName, luckyNumber }
};

export default connect(mapStateToProps)(LuckyNumber);
