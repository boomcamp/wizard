import React from 'react';
import styled from '@emotion/styled';

const StepButton = styled.button`
  height: 25px;
  min-width: 75px;
  border-radius: 18px;
  border: none;
`;

export const StepControl = ({ valid, hasNext, hasPrev, onNext, onPrev }) => {
  return (
    <React.Fragment>
      {hasPrev && <StepButton onClick={onPrev}>Previous</StepButton>}
      {hasNext && (
        <StepButton disabled={!valid} onClick={onNext}>
          Next
        </StepButton>
      )}
    </React.Fragment>
  );
};
