import React from 'react';
import { OstLoading } from 'components';
import { mount } from 'enzyme';
import Factory, { destroyElement } from "../utils/factory";

export default describe('OstLoading test', function() {

  let component;

  const state = {
    isLoading: true
  };

  before(function() {
    const TestContent = (props) => {
      return (
        <div className="loading-test">
          <OstLoading isLoading={props.isLoading}/>
          <button id="closeBtn" onClick={testCloseCallback}>off</button>
          <button id="openBtn" onClick={testOpenCallback}>open</button>
        </div>
      )
    };
    this.component = mount(<TestContent isLoading={state.isLoading}/>);
    component = this.component;
  });

  function testCloseCallback() {
    component.setProps({
      isLoading: false
    });
  }

  function testOpenCallback() {
    component.setProps({
      isLoading: true
    });
  }

  after(function() {
    destroyElement('#ost-mask-container');
  });

  it('render <OstLoading> correctly', function() {
    expect(component.find('.ost-loading')).to.exist;
  });

  it('close <OstLoading> Component', function(done) {
    component.find('.loading-test #closeBtn').simulate('click');
    setTimeout(function() {
      expect(component.find('.ost-loading').exists()).to.equal(false);
      expect(component.find('.ost-mask').exists()).to.equal(false);
      done();
    }, 500);
  });

  it('open <OstLoading> Component', function(done) {
    component.find('.loading-test #openBtn').simulate('click');
    setTimeout(function() {
      expect(component.find('.ost-loading').exists()).to.equal(true);
      expect(component.find('.ost-mask').exists()).to.equal(true);
      done();
    }, 500);
  });
})