import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import arrowRightSvg from './arrowRight.svg';
import arrowBottomSvg from './arrowBottom.svg';
import arrowTopSvg from './arrowTop.svg';


class Item extends Component {

  render() {
    const { text, style, onClick, arrowTo, placeholder } = this.props;


    return (
        <div className="ost-card-item" style={style} onClick={onClick}>
          <span className="ost-card-item-text" style={{color: !text ? '#BABFC9' : null}}>
            {text ? text : placeholder}
          </span>
          <span className="ost-card-item-icon">
           {
             arrowTo &&
                <img src={
                arrowTo === 'right' ?
                arrowRightSvg : 
                arrowTo === 'top' ?
                arrowTopSvg :
                arrowTo === 'bottom' ?
                arrowBottomSvg :
                null
              } />
            }
          </span>
        </div>
    );
  }
}

class Card extends Component {

  render() {
    const {children, style, title, titleStyle} = this.props;

    return (
      <div className="ost-card" style={style}>
        {
          title &&
          <span className="ost-card-title" style={titleStyle}>
            {title}
          </span>
        }
        {children}
      </div>
    );
  }
}

export default class OstList extends Component {
  static item = Item;
  static card = Card;

   render() {
    const {title, desc, children, style, tips} = this.props;

    return (
      <div className="ost-card-list" style={style}>
        <div className="ost-card-list-title" style={{width: desc ? '100%' : null }}>
          <div className="ost-card-list-title-box">
            <span>
              {title}
              {tips && <i onClick={() => {tips.onClick && tips.onClick()}}/>}
            </span>
            {desc && <p className="ost-card-list-title-desc"> {desc} </p>}
          </div>
        </div>
        
        <div  className="ost-card-list-children" style={{width: desc ? 'auto' : null }}>
        {children}
        </div>
      </div>
    );
  }
}

OstList.propTypes = {
  style: PropTypes.object
}


