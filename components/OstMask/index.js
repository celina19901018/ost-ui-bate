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
    
    if (this.props.show) {
      this.container && this.container.removeEventListener('animationend',  this.removeContainer)
      this.state._preventBgScroll.afterOpen();
    } else {
      this.container && this.container.addEventListener('animationend', this.removeContainer)
      this.state._preventBgScroll.beforeClose();
    }


    if (this.refs.defaultPopup) {
      this.refs.defaultPopup.style.left = `calc(50% - (${this.refs.defaultPopup.clientWidth/2}px))`
      this.refs.defaultPopup.style.top = this.props.top || `calc(50% - (${this.refs.defaultPopup.clientHeight/2}px))`
    }
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
    const {show, onClick, maskColor} = this.props;
  
    return (
      <div className='ost-mask'>
        {
              <div
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
        }
        <div
          className={classnames(
            "ost-mask-bg",
            {
              'ost-mask-am-fade-out': !show,
              'ost-mask-am-fade-in': show
            }
          )}
          style={{background: maskColor || 'rgba(0, 0, 0, 0.4)'}}
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