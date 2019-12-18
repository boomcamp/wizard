import React from 'react';
import styled from '@emotion/styled';

import { InputError } from './InputError';

const Container = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  & input {
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid black;
    &.error {
      border-color: red;
    }
  }
`;

export const InputContainer = ({ children, error}) => {
  return (
    <Container>
      {children}
      <InputError error={error || false} />
    </Container>
  );
};
