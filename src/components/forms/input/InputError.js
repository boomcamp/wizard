import React from 'react';
import styled from '@emotion/styled';

const Error = styled.small`
  font-family: Helvetica;
  color: red;
  padding-left: 8px;
`;

export const InputError = ({ error }) => {
  return <Error hidden={!error}>{error.message}</Error>;
};
