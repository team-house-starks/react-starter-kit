import React, { useState } from 'react';
import './SuggestedActivities.css';
import { connect } from '../../store';

const SuggestedActivities = props => {
  const { activityMockData, search } = props;
  //    let displayCount = 2;
  const interestingItemCard =
      activityMockData &&
      activityMockData.map((tour, index) => {
          if(tour.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              return (
                  <div
                      className="item-card"
                      key={index}
                  >
                      <div className="item-card-info">
                          <div className="item-card-thumbnail">
                              <div className="item-card-thumb-wrap">
                                  <img
                                      alt=""
                                      src={tour.imageUrl}
                                  />
                                  <span className="date-info">Time: {tour.expires} Hrs</span>
                              </div>
                          </div>
                          <div className="item-card-description">
                              <p className="item-desc-caption">{tour.type}</p>
                              <p className="item-card-title">{tour.title}</p>
                              <span className="redBar" />
                              <p className="offerText">Exclusive offer* on SBI Credit Cards</p>
                          </div>
                      </div>
                      <p className="item-footer-info">
                          <span className="reviews-info"> Book Now </span>
                          <span className="coupon-code">Rating: {tour.rating}</span>
                          <span className="ticket-price">
              {`${tour.currency} ${tour.price}`} USD
            </span>
                      </p>
                  </div>
              );
          }

    });
  return (
    <div className="landing-container">
      <div className="landing-card">
        <div className="landing-card-title">
          <h1>Interesting Things</h1>
        </div>
        {interestingItemCard}
      </div>
    </div>
  );
};

export default connect(state => ({ ...state }))(SuggestedActivities);
