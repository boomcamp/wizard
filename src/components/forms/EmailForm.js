import React from 'react';

// components
import { StepForm } from './StepForm';
import { InputContainer } from './input/InputContainer';

export const EmailForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <InputContainer error={errors.email}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={register({
              required: 'Email address is required',
            })}
          />
        </InputContainer>
      )}
    </StepForm>
  );
};
