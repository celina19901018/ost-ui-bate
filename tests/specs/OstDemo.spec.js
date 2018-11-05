import React from 'react';
import Factory from '../utils/factory';
import { OstDemo } from 'components';
import { shallow } from 'enzyme';

export default describe('OstDemo test', function() {
  beforeEach(function() {
    Factory.destroyAppContainer();
  });
  it('render demo correctly', function() {
    const component = shallow(<OstDemo/>);
    Factory.createComponent(component);
    expect(component.find('.ost-demo')).to.exist;
  });
});