import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import delIcon from './delIcon.svg';


class OstInput extends Component {

  constructor(props) {
    super(props);
    this.state = { closeBtn: false };
  }

  render() {
    const {
      defaultValue,
      value,
      onChange,
      onDel,
      placeholder,
      disabled,
      type
    } = this.props;

    return (
      <div className='ost-input'>
        <input
          className={
            classnames({
              "ost-input-disabled": disabled
             })
          }
          type={type || "text"}
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
          onBlur={()=>{
            
            const _this = this;

            setTimeout(() => {
              
            _this.setState({closeBtn: false}) 
            }, 300);
          }}
          onFocus={()=>{ this.setState({closeBtn: true}) }}
          onChange={e=> onChange && onChange(e)}
          placeholder={placeholder}
        />
        {
          value && onDel && this.state.closeBtn &&
          <div className='ost-input-delBtn'>
            <img 
              onClick={onDel}
              src={delIcon} />
          </div>
        }
      </div>
    )
  }
}


export default OstInput;

OstInput.propTypes = {
  title: PropTypes.string
}
