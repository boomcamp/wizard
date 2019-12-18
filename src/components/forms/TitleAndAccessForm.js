import React from 'react';
import useForm from 'react-hook-form';

import { StepForm } from '../forms/StepForm';
import { InputContainer } from './input/InputContainer';

export const TitleAndAccessForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <React.Fragment>
          <InputContainer>
            <input
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              ref={register}
            />
          </InputContainer>
          <InputContainer errors={errors.access}>
            <select
              name="access"
              ref={register({ required: 'An access level is required' })}
            >
              <option value="">Select a role</option>
              <option value="ADMIN">Administrator</option>
              <option value="EMPLOYEE">Employee</option>
            </select>
          </InputContainer>
        </React.Fragment>
      )}
    </StepForm>
  );
};
