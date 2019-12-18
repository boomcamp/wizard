import React from 'react';
import styled from '@emotion/styled';

const Step = styled.div`
  min-width: 350px;
  min-height: 300px;
  background-color: white;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 16px;
  margin: 8px;
  display: flex;
  flex-direction: column;
`;

export const WizardStep = ({ title, children }) => {
  return (
    <Step>
      <h1>{title}</h1>
      {children}
    </Step>
  );
};
