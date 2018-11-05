import React from 'react';
import { OstMask } from 'components';
import { mount } from 'enzyme';

export default describe('OstMask test', function() {
  before(function() {
    this.component = mount(<OstMask show={false}/>);
  });
  it('should have a element whose classname is `ost-mask` ', function() {
    expect(this.component.find('.ost-mask').exists()).to.equal(true);
  });
})