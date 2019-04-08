(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{71:function(n,t){n.exports="## OstHeader 示例\n\n  \n```jsx\n:::$demo\nclass Demo extends Component {\n    \n    render() {\n\n       return(\n            <div>\n\n                <OstHeader title='头部' />\n\n                <OstHeader\n                    title='头部-自定义返回'\n                    leftOpt={{\n                        onClick: ()=> alert('自定义返回')\n                    }}\n                    style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)', top: '60px' }} />\n\n                <OstHeader\n                    title='头部-修改默认样式'\n                    titleStyle={{color: '#fff' }}\n                    style={{ background: '#3f7ae7', top: '120px'}} />\n\n            </div>\n       )\n    }\n}\n:::$\n```\n\n### 组件 props 说明\n| 事件名称 | 说明 | 类型 | 默认值 |\n|---------|--------|---------|---------|\n| title | 用于展示头部标题 | string | - |\n| leftOpt | 左边按钮选项 | obj | - |\n| leftOpt.onClick | 左边按钮-点击事件 | func | - |\n| style | 组件容器样式 | obj | - |\n| titleStyle | 组件标题样式 | obj | - |\n"}}]);