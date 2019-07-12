import React from 'react';
import './HolidayDestinations.css';
import { connect } from '../../store';

const HolidayDestinations = props => {
  const { activityMockData, search } = props;
  //    let displayCount = 6;
    if(search) {
        return <div></div>
    }
  const holidayItemCard =
      activityMockData && activityMockData.map((holiday, index) => {
      return (
        <div
          className="holiday-item-card-wrapper"
          key={index}
        >
          <div>
            <div className="single-item-card">
              <div className="holiday-item-card">
                <div className="trending-img-wrap">
                  <img
                    alt=""
                    src={holiday.imageUrl}
                  />
                </div>
                <span className="options-tag">{holiday.expires} places</span>
                <div className="holiday-item-card-desc">
                  <p className="holiday-country">{holiday.country}</p>
                  <p className="holiday-pkg">Package prices starting at</p>
                  <p className="pkg-amount">
                    {' '}
                    {`${holiday.currency} ${holiday.price}`} USD
                  </p>
                  <p className="pkg-type">
                    {' '}
                    {holiday.price <= 50 ? 'per person' : 'per couple'}
                  </p>
                  <span>
                    <p className="user-demand-info">
                      {holiday.price <= 50 ? (
                        'Flights, Sightseeing & More'
                      ) : (
                        <p className="user-demand-view">In High Demand</p>
                      )}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="holiday-container">
      <div className="holiday-card">
        <div className="holiday-card-title">
          <h1>Trending Holiday Destinations</h1>
        </div>
        {holidayItemCard}
      </div>
    </div>
  );
};

export default connect(state => ({ ...state }))(HolidayDestinations);
