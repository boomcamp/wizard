import React from 'react';

import { StepForm } from '../forms/StepForm';
import { InputContainer } from './input/InputContainer';

export const BusinessAddressForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <React.Fragment>
          <InputContainer error={errors.street}>
            <input
              name="street"
              type="text"
              placeholder="Street"
              ref={register({ required: 'A street name is required' })}
            />
          </InputContainer>
          <InputContainer error={errors.city}>
            <input
              name="city"
              type="text"
              placeholder="City"
              ref={register({ required: 'A city is required' })}
            />
          </InputContainer>
          <InputContainer error={errors.state}>
            <select
              name="state"
              ref={register({ required: 'State is required' })}
            >
              <option value="">Please select a state</option>
              <option value="utah">Utah</option>
              <option value="albay">Albay</option>
            </select>
          </InputContainer>
          <InputContainer error={errors.country}>
            <select
              name="country"
              ref={register({ required: 'Country is required' })}
            >
              <option value="">Please select country</option>
              <option value="usa">U.S.A.</option>
              <option value="philippines">Philippines</option>
            </select>
          </InputContainer>
          <InputContainer error={errors.postalCode}>
            <input
              name="postalCode"
              type="text"
              placeholder="Postal Code"
              ref={register({ required: 'Postal code is required' })}
            />
          </InputContainer>
        </React.Fragment>
      )}
    </StepForm>
  );
};
