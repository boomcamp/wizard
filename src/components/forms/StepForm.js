import React from 'react';
import useForm from 'react-hook-form';
import styled from '@emotion/styled';

import { getDefaultFormValues } from './utils';

// components
import { StepControl } from '../StepControl';

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & fieldset {
    margin-bottom: 8px;
  }
`;

export const StepForm = ({ formKey, next, prev, formData, children }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <StyledForm name={formKey}>
      <div>{children({ register, errors })}</div>
      <StepControl
        valid={formState.isValid}
        hasPrev={!!prev}
        hasNext={!!next}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </StyledForm>
  );
};
