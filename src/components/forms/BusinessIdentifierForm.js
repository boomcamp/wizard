import React from 'react';

import { StepForm } from '../forms/StepForm';
import { InputContainer } from './input/InputContainer';

export const BusinessIdentifierForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <React.Fragment>
          <InputContainer error={errors.name}>
            <input
              name="name"
              type="text"
              placeholder="Business Name"
              ref={register({
                required: 'Your business name is required',
              })}
            />
          </InputContainer>
          <InputContainer>
            <input
              name="websiteURL"
              type="url"
              placeholder="Website URL"
              ref={register}
            />
          </InputContainer>
          <InputContainer>
            <input
              name="phonenumber"
              type="text"
              placeholder="Phonenumber"
              ref={register}
            />
          </InputContainer>
        </React.Fragment>
      )}
    </StepForm>
  );
};
