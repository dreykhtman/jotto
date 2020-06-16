import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { storeFactory } from '../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('redux props in App component', () => {
  test('should have `success` piece of state', () => {
    const success = false;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('should have `secretWord` piece of state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test('should have `guessedWords` piece of state', () => {
    const guessedWords = [
      { guessedWord: 'TRAIN', letterMatchCount: 3 },
      { guessedWord: 'AGILE', letterMatchCount: 1 },
      { guessedWord: 'PARTY', letterMatchCount: 5 },
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test('should have `getSecretWord` action creator prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
