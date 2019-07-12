import React from 'react';
import './Header.css';
import { actions, connect, Provider, subscribe } from '../../store';

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="header-wrapper">
          <div className="logo">
            <a
              className=""
              href="#"
            >
              <img
                alt=""
                border="0"
                src="https://cdn.getyourguide.com/static/current/customer/desktop/cached/logos/gyg.svg"
              />
            </a>
          </div>
        </div>
        <div className="cta">
          <div className="cta-inner">
            <div className="headlines hidden">
              <h1 className="headline-xl-raised">
                <span>Unforgettable travel memories</span>
              </h1>
              <div className="headline-xl-raised headline">
                <span>A guide to Berlin tourism </span>
              </div>
              <div className="search-label-container">
                <input
                  onChange={event => {
                    actions.updateSearch(event.target.value);
                  }}
                  placeholder="Museums in berlin"
                  type="text"
                />
                <button className="search-button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero hero1" />
    </div>
  );
};
export default connect(state => ({ ...state }))(Header);
