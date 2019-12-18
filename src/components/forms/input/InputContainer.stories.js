import React from 'react';

import { InputContainer } from './InputContainer';

export default {
  title: 'Input Container',
  component: InputContainer,
};

export const Basic = () => (
  <InputContainer>
    <input type="text" placeholder="name" />
  </InputContainer>
);

export const WithError = () => (
  <InputContainer error={{ message: 'This is a bad value' }}>
    <input className="error" type="text" value="Bad Value" />
  </InputContainer>
);
