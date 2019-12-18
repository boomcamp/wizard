import React from 'react';

import { StepForm } from './StepForm';
import { InputContainer } from './input/InputContainer';

export const NameForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <React.Fragment>
          <InputContainer error={errors.firstName}>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              ref={register({
                required: 'First Name is required',
              })}
            />
          </InputContainer>
          <InputContainer error={errors.lastName}>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              ref={register({
                required: 'Last Name is required',
              })}
            />
          </InputContainer>
        </React.Fragment>
      )}
    </StepForm>
  );
};
