import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';

// form components
import { NameForm } from '../forms/NameForm';
import { EmailForm } from '../forms/EmailForm';
import { TitleAndAccessForm } from '../forms/TitleAndAccessForm.js';
import { BusinessIdentifierForm } from '../forms/BusinessIdentifierForm';
import { BusinessAddressForm } from '../forms/BusinessAddressForm';
import { BusinessIndustryForm } from '../forms/BusinessIndustryForm';
import { BusinessSizeForm } from '../forms/BusinessSizeForm';

// components
import { WizardStep } from '../WizardStep';

const styles = {
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const hasStep = path => /step-[1-7]$/.test(path);

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    // if not on valid step then update url to valid step
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, []);

  const [transClass, setTransClass] = React.useState('fade-left');

  const [formData, setFormData] = useLocalStorage('formData', {});
  const nextStep = step => formValues => {
    setTransClass('fade-left');
    setFormData({
      ...formData,
      ...formValues,
    });
    history.push(`${path}/step-${step + 1}`);
  };

  const previousStep = step => formValues => {
    setTransClass('fade-right');
    setFormData({
      ...formData,
      ...formValues,
    });
    history.push(`${path}/step-${step - 1}`);
  };

  return (
    <div style={styles}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={transClass} timeout={800}>
          <Switch>
            <Route path={`${path}/step-1`}>
              <WizardStep title="What's your name?">
                <NameForm
                  formKey="names"
                  next={nextStep(1)}
                  formData={formData}
                />
              </WizardStep>
            </Route>
            <Route path={`${path}/step-2`}>
              <WizardStep title="What's your email address?">
                <EmailForm
                  formKey="email"
                  formData={formData}
                  prev={previousStep(2)}
                  next={nextStep(2)}
                />
              </WizardStep>
            </Route>
            <Route path={`${path}/step-3`}>
              <WizardStep title="What's your title?">
                <TitleAndAccessForm
                  formKey="titleAndAccess"
                  formData={formData}
                  prev={previousStep(3)}
                  next={nextStep(3)}
                />
              </WizardStep>
            </Route>
            <Route path={`${path}/step-4`}>
              <WizardStep title="Business Info?">
                <BusinessIdentifierForm
                  formKey="businessIdentifier"
                  formData={formData}
                  prev={previousStep(4)}
                  next={nextStep(4)}
                />
              </WizardStep>
            </Route>
            <Route path={`${path}/step-5`}>
              <WizardStep title="Business Address?">
                <BusinessAddressForm
                  formKey="businessAddress"
                  formData={formData}
                  prev={previousStep(5)}
                  next={nextStep(5)}
                />
              </WizardStep>
            </Route>
            <Route path={`${path}/step-6`}>
              <WizardStep title="Tell us about your industry.">
                <BusinessIndustryForm
                  formKey="businessIndustry"
                  formData={formData}
                  next={nextStep(6)}
                  prev={previousStep(6)}
                />
              </WizardStep>
            </Route>
            <Route path={`${path}/step-7`}>
              <WizardStep title="How big is your business?">
                <BusinessSizeForm
                  formKey="businessSize"
                  formData={formData}
                  prev={previousStep(7)}
                />
              </WizardStep>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
