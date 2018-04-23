import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Authentication from '../src/components/Authentication';

describe('<Authentication />', () => {
  def('props', {});
  subject('wrapper', () => shallow(<Authentication {...$props} />));

  context('when the login form is filled out', () => {
    context('with an invalid email', () => {
      it('displays an invalid email error', () => {
        expect($wrapper.text()).to.include('Invalid Email');
      });
    });
  });
});
