import React from 'react';
import { shallow } from 'enzyme';

import TotalGuesses from './TotalGuesses';
import { findByTestAttr } from '../test/testUtils';

const defaultProps = { guessCount: 0 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

describe('TotalGuesses component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.length).toBe(1);
  });

  test('should render the number of guesses', () => {
    const guessCount = 8;
    const wrapper = setup({ guessCount });
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.text()).toContain(guessCount.toString());
  });
});
