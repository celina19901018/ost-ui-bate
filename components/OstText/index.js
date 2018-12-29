import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class OstText extends React.Component {
  static defaultProps = {
    fixedCls: 'ost-text',
    size: 'md',
    multiLine: true,// 是否多行显示，默认多行显示
    textBGColor: '#fff',// 文本省略号背景颜色，默认白色
    textLineHeight: 22,// 文本行高，初始默认值为22px
    ellipsis: true// 文本是否需要省略号，默认需要
  }
  render() {
    const {
      fixedCls,
      className,
      label,
      text,
      multiLine,
      type,
      size,
      lineClamp,// 自定义的文本行数，默认3行
      textLineHeight,
      textBGColor,
      ellipsis
    } = this.props;
    const wrapClass = classnames(fixedCls, className, {
      [`${fixedCls}-${type}`]: type,
      [`${fixedCls}-${size}`]: size
    })
    const contentCls = multiLine ? `${fixedCls}-multi-line` : `${fixedCls}-single-line`;
    return <div className={wrapClass}>
      {label && <label className={`${fixedCls}-label`}>{label}</label>}
      <p className={contentCls}
        style={{ height: lineClamp * textLineHeight + 'px', lineHeight: textLineHeight + 'px' }}>
        {text}
        {
          multiLine && lineClamp && ellipsis && <span className={`${fixedCls}-ellipsis`}
            style={{ background: `linear-gradient(to right, transparent, ${textBGColor} 55%)`, height: textLineHeight + 'px' }}>...</span>
        }
      </p>
    </div>
  }
}

OstText.propTypes = {
  fixedCls: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  multiLine: PropTypes.bool.isRequired,
  textBGColor: PropTypes.string,
  textLineHeight: PropTypes.number,
  lineClamp: PropTypes.number,
  ellipsis: PropTypes.bool.isRequired
}
