import React from 'react';
import Factory, { destroyElement } from '../utils/factory';
import { OstDemo } from 'components';

export default describe('OstDemo test section', function() {
  after(function() {
    destroyElement('#App');
  });
  it('render demo correctly', function() {
    const component = Factory.createComponent(<OstDemo/>);
    expect(component.find('.ost-demo').exists()).to.equal(true);
  });
});