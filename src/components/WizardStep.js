import React from 'react';
import styled from '@emotion/styled';

const Step = styled.div`
  max-width: 300px;
  background-color: #f19485;
  padding: 8px;
  margin: 8px;
`;

export const WizardStep = ({ title, children }) => {
  return (
    <Step>
      <h1>{title}</h1>
      {children}
    </Step>
  );
};
