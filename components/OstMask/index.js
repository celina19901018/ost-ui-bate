import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import preventBgScroll from './preventBgScroll'

export default class OstMask extends Component {

  state = {
    _preventBgScroll: new preventBgScroll()
  }

  showUpdata = () => {
    const {defaultPopup} = this.refs;
    const {top, bottom, left, right, unlock} = this.props;
    
    if (this.props.show) {
      this.container && this.container.removeEventListener('animationend',  this.removeContainer)
      !unlock && this.state._preventBgScroll.afterOpen();
    } else {
      this.container && this.container.addEventListener('animationend', this.removeContainer)
      !unlock && this.state._preventBgScroll.beforeClose();
    }

    setTimeout(() => {
      if (!defaultPopup) return;

      defaultPopup.style.left = `calc(50% - (${defaultPopup.clientWidth/2}px))`;

      if (!top && !bottom) {
        defaultPopup.style.top = `calc(50% - (${defaultPopup.clientHeight/2}px))`;
      }
      
      if (top) {
        defaultPopup.style.top = top;
      }

      if (bottom) {
        defaultPopup.style.bottom = bottom;
      }

      if (left) {
        defaultPopup.style.left = left;
      }

      if (right) {
        defaultPopup.style.right = right;
      }

    }, 0);
  }
 
  componentDidMount() {

    this.showUpdata()
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.show !==  this.props.show) {
      this.showUpdata()
    }
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  removeContainer = () => {
    this.container && this.container.parentNode.removeChild(this.container);
    this.componentActivated = false;
    this.container = null;
  }

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `ost-mask-container-${(new Date().getTime())}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  }

  getComponent = () => {
    const {show, onClick, maskColor, style, childrenStyle} = this.props;
  
    return (
      <div className='ost-mask'>
        <div
          style={childrenStyle}
          className={classnames(
            'ost-mask-children',
            {
              'ost-mask-am-fade-out': !show,
              'ost-mask-am-fade-in': show
            }
          )}
          ref='defaultPopup' >
          { this.props.children }
        </div>
        <div
          className={classnames(
            "ost-mask-bg",
            {
              'ost-mask-am-fade-out': !show,
              'ost-mask-am-fade-in': show
            }
          )}
          style={{background: maskColor || 'rgba(0, 0, 0, 0.4)', ...style}}
          onClick={(e) => onClick && onClick(e)} />
      </div>
    );
  }

  render() {
    const {show} = this.props;

    if (show) this.componentActivated = true;

    if (!this.componentActivated) return null;

    return ReactDOM.createPortal( this.getComponent(), this.getContainer());
  }
}


OstMask.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  maskColor: PropTypes.string,
  top: PropTypes.string
}