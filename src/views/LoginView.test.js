//Externals
import React from 'react';
import { mount } from 'enzyme';

// Internals
import LoginView from './LoginView';

describe('Tests for LoginView component', () => {


  it('Should detect it is a react component', () => {
    const wrapper = mount(<LoginView/>);
    expect(wrapper.exists('.some-class')).toBe(true);
  });

});




