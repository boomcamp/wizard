import React from 'react';
import styled from '@emotion/styled';

const StepButton = styled.button`
  height: 25px;
  min-width: 75px;
  border-radius: 18px;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StepControl = ({ valid, hasNext, hasPrev, onNext, onPrev }) => {
  return (
    <ButtonContainer>
      <StepButton disabled={!hasPrev} onClick={onPrev}>
        Previous
      </StepButton>
      <StepButton disabled={!valid} onClick={onNext}>
        Next
      </StepButton>
    </ButtonContainer>
  );
};
