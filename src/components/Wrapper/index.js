import React, { Component } from 'react';
import Header from '../Header';
import SuggestedActivities from '../SuggestedActivities';
import HolidayDestinations from '../HolidayDestinations';
import Footer from '../Footer';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <SuggestedActivities />
        <HolidayDestinations />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
