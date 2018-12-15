import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OstMask from '../OstMask';
import delSvg from './delete.svg';

const KeyboardArr = [
  {
    key: 1,
    en: ''
  },
  {
    key: 2,
    en: 'A B C'
  },
  {
    key: 3,
    en: 'D E F'
  },
  {
    key: 4,
    en: 'G H I'
  },
  {
    key: 5,
    en: 'J K L'
  },
  {
    key: 6,
    en: 'M N O'
  },
  {
    key: 7,
    en: 'P Q R S'
  },
  {
    key: 8,
    en: 'T U V'
  },
  {
    key: 9,
    en: 'W X Y Z'
  }
]

export default class OstNumKeyboard extends Component {

  state = {
    keyStyle: {},
    value: ''
  }

  upDateKeyStyle = () => {
    
    if (!this.box) return;

    this.setState({
      keyStyle: {
                width: `${this.box && this.box.clientWidth * 0.31}px`,
                height: `${this.box && this.box.clientWidth * 0.12}px`,
                marginLeft: `${this.box && this.box.clientWidth * 0.0175}px`,
                marginTop: `${this.box && this.box.clientWidth * 0.0175}px`
              }
    })
  }

  componentDidMount() {
    this.upDateKeyStyle();
  }

  componentDidUpdate () {
    const {show} = this.props;
    
    if ((!this.state.keyStyle.width) && show) {
      
      this.upDateKeyStyle();
    }
    
  }

  updateValue = (key) => {
    const {onChange, maxLength} = this.props;
    const {value} = this.state;
    const _maxLength = Number(maxLength);
    const _v = _maxLength ? (value + key).slice(0, _maxLength) : (value + key);

    this.setState({value: _v});
    onChange && onChange(_v);
  }

  delValue = () => {
    const {onChange} = this.props;
    const {value} = this.state;

    const _value =  value.slice(0, value.length -1);

    this.setState({value: _value});
    onChange && onChange(_value);
   
  }

  render() {
    const {onChange, show, style} = this.props;

    return ([ 
                <OstMask show={show} key='00' style={{display: 'none'}}>
                    <div
                      ref={d => this.box = d}  
                      className="ost-numKeyboard"  
                      style={{
                        ...style
                      }}>
                      {
                        KeyboardArr.map((item, i) =>
                        <div  
                          style={this.state.keyStyle}
                          className="ost-numKeyboard-item" 
                          onClick={e => {

                            e.nativeEvent.stopImmediatePropagation();
                            this.updateValue(item.key);
                          }}
                          key={i}>
                            {item.key}
                        </div>
                      )}

                      <div style={this.state.keyStyle} />

                      <div 
                        className="ost-numKeyboard-item" 
                        onClick={e => {

                            e.nativeEvent.stopImmediatePropagation();
                            this.updateValue(0);
                        }}
                        style={this.state.keyStyle}>
                          0
                      </div>
                      <div
                        className="ost-numKeyboard-del"
                        onClick={e => {

                          e.nativeEvent.stopImmediatePropagation();
                          this.delValue();
                        }}
                        style={this.state.keyStyle}>
                        <img src={delSvg} />
                      </div>
                    </div>
            </OstMask>
        ]);
  }
}

OstNumKeyboard.propTypes = {
  style: PropTypes.object
}


