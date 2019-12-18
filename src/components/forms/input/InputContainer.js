import React from 'react';
import styled from '@emotion/styled';

import { InputError } from './InputError';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & input[type='text'] {
    padding: 8px;
    border-radius: 8px;
    border: none;
    margin-bottom: 8px;
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
