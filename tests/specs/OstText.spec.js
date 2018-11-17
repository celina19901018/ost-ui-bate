import React from 'react';
import { OstText } from 'components';
import Factory, { defer } from '../utils/factory';

describe('OstText test section', function() {

  const text1 = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.';
  const text2 = 'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。';
  const label1 = 'Declarative';
  const label2 = '声明式';

  it('should render correctly', function() {
    const component = Factory.createComponent(<OstText/>);
    expect(component.find('div').exists()).to.equal(true);
    expect(component.find('label').exists()).to.equal(false);
    expect(component.find('p').exists()).to.equal(true);
    expect(component.find('p')).to.have.lengthOf(1);

  });

  it('should have text from props', async function() {
    const component = Factory.createComponent(<OstText text={text1}/>);
    expect(component.find('p').text()).to.contain(text1);
    expect(component.find('label').exists()).to.equal(false);

    component.setProps({ text: text2 });

    await defer(250);
    expect(component.find('p').text()).to.not.contain(text1);
    expect(component.find('p').text()).to.contain(text2);
    component.setProps({ label: label1, type: 'primary' });

    await defer(250);
    expect(component.find('p').text()).to.contain(text2);
    expect(component.find('label').exists()).to.equal(true);
    expect(component.find('label').text()).to.equal(label1);
    component.setProps({ label: label2, type: 'success' });

    await defer(250);
    expect(component.find('label').text()).to.equal(label2);
    component.setProps({ label: null });

    await defer(250);
    expect(component.find('label').exists()).to.equal(false);
    component.setProps({ multiLine: false, type: 'warning' });

    await defer(250);
    expect(component.find('p').hasClass('ost-text-single-line')).to.equal(true);
    // done();
    // defer(250)
    //   .then(() => {
    //     expect(component.find('p').text()).to.not.contain(text1);
    //     expect(component.find('p').text()).to.contain(text2);
    //     component.setProps({ label: label1, type: 'primary' });
    //     return defer(250);
    //   })
    //   .then(() => {
    //     expect(component.find('p').text()).to.contain(text2);
    //     expect(component.find('label').exists()).to.equal(true);
    //     expect(component.find('label').text()).to.equal(label1);
    //     component.setProps({ label: label2, type: 'success' });
    //     return defer(250);
    //   })
    //   .then(() => {
    //     expect(component.find('label').text()).to.equal(label2);
    //     component.setProps({ label: null });
    //     return defer(250);
    //   })
    //   .then(() => {
    //     expect(component.find('label').exists()).to.equal(false);
    //     component.setProps({ multiLine: false, type: 'warning' });
    //     return defer(250)
    //   })
    //   .then(() => {
    //     expect(component.find('p').hasClass('ost-text-single-line')).to.equal(true);
    //     done();
    //   })
    //   .catch(done);
  });
});
