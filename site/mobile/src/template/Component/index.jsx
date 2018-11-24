import ReactDOM from 'react-dom';
import React from 'react';
import { transform } from 'babel-standalone'
import './index.less';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // console.log('phone location===>', window.location.href);
    // console.log('phone history.length===>', window.history.length);
    // console.log('phone hash===>', window.location.hash);
    this.importMd();
  }

  importMd = () => {

    import(`../../../../../components`).then(Module =>{
      Object.keys(Module).forEach(_key => {

        if (/MENU_ITEM*./ig.test(_key)) return;

        import(`../../../../../components/${_key}/demo/README.md`)
        .then(md =>  md.default)
        .then(data => this.kitchenMd(data, _key, Module));
      });
    });

  }

  kitchenMd = (data, key, Module) => {
    if (window.location.hash.substring(2)!==key) return;
    const demoRex = /:::\s?\$demo\s?([^]+?):::\$/g;
    const demoFlagRex = /:::\s?\$demo|:::\$/g;

    if (!data.match(demoRex)) return;

    let _componentStr = '';
    let _domStr = '';

    data.match(demoRex).forEach((ele, i) => {
      const _demo = ele.replace(demoFlagRex, '');

      const cptStr =  `class Cpt${i} extends React.Component {
            ${_demo}
      }`

        _componentStr  += cptStr;
        _domStr += `<Cpt${i}/>`;
    })

    const args = ['context', 'React', 'ReactDOM'];
    const argv = [this, React, ReactDOM];
    
    for (const _key in Module) {
        args.push(_key);
        argv.push(Module[_key]);
    }

    const code = transform(`
      ${_componentStr}

      class Demo extends React.Component {
          render() {
            return <div> ${_domStr} </div>
          }
      }
    
    ReactDOM.render(<Demo {...context.props} />, document.getElementById('ost-phone-demo'))`, {
        presets: ['es2015', 'react']
    }).code;

    args.push(code);

    new Function(...args).apply(null, argv);
  }

  componentWillUnmount() {
    const dom = document.getElementById('ost-phone-demo');
    ReactDOM.unmountComponentAtNode(dom);
  }

  render() {
    const {history} = this.props;

    return (
      <div className="ost-component">
        <div className="ost-component-content" id='ost-phone-demo' />
      </div>
    );
  }
}

