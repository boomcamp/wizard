import React from 'react';

import { InputContainer } from './input/InputContainer';
import { StepForm } from '../forms/StepForm'

export const BusinessIndustryForm = (props) => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <React.Fragment>
          <fieldset>
            <legend>Industry</legend>
            <InputContainer error={errors.industry}>
              <select
                name="industry"
                ref={register({ required: 'An industry is required' })}
              >
                <option value="">Please select an industry</option>
                <option value="enterprise software">Enterprise Software</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="ecommerce">Ecommerce</option>
                <option value="constructions">Construction</option>
                <option value="logistics">Logistics</option>
                <option value="saas">SAAS</option>
                <option value="telephony">Telephony</option>
                <option value="consumer electronics">
                  Consumer Electronics
                </option>
                <option value="transportation">Transportation</option>
              </select>
            </InputContainer>
          </fieldset>
          <fieldset>
            <legend>Customer Segment</legend>
            <InputContainer error={errors.segment}>
              <select
                name="segment"
                ref={register({ required: 'A segment is required' })}
              >
                <option value="">Please select a segment</option>
                <option value="consumer">Consumer</option>
                <option value="enterprise">Enterprise</option>
                <option value="both">Both</option>
              </select>
            </InputContainer>
          </fieldset>
        </React.Fragment>
      )}
    </StepForm>
  );
};
