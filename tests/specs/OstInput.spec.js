import React from 'react';
import sinon from 'sinon';
import { OstInput, OstNumKeyboard } from 'components';
import Factory, { destroyElement } from '../utils/factory';
describe('OstInput test section', function() {

  after(function() {
    destroyElement('#App');
  });

  it('should render correctly', function() {
    const component = Factory.createComponent(<OstInput />);
    expect(component.find('.ost-input').exists()).to.equal(true);
    expect(component.find('.ost-input-delBtn').exists()).to.equal(false);

    component.find('input').simulate('change', { target: { value: '111' } });
    // console.log('change', component.find('input').getDOMNode().value);
    // expect(component.find('input').getDOMNode().value).to.equal(mockEvent.currentTarget.value);
    // component.setProps({ disabled: true });
    // expect(component.find('.ost-input').exist()).to.equal(true);

  });
});