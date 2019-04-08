(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{68:function(n,t){n.exports="## OstInput 示例\n\n  \n```jsx\n:::$demo\nclass Demo extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = { \n            value: ''\n        };\n    }\n\n    render() {\n       const { value } = this.state;\n\n       return([\n        \n        <OstList.card title=\"输入框\" key='0'>\n          <OstList title='标准输入'>\n            <OstInput placeholder='请输入' />\n          </OstList>\n          <OstList title='不可输入'>\n            <OstInput defaultValue='禁用' disabled />\n          </OstList>\n        </OstList.card>,\n\n        <OstList.card title=\"输入框\" key='1'>\n          <OstList title='请输入测试内容'>\n            <OstInput\n                placeholder='请输入' \n                value={value}\n                onDel={()=>this.setState({value: ''})}\n                onChange={e => this.setState({value: e.currentTarget.value})} />\n          </OstList>\n        </OstList.card>\n       ])\n    }\n}\n:::$\n```\n\n  \n```jsx\n:::$demo\nclass Demo extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = { \n            sixBitValue: '',\n            showKeyBoard: false \n        };\n    }\n\n    render() {\n       const { sixBitValue } = this.state;\n\n       return([\n        <OstList.card title=\"6位数字输入框\" key='2'>\n            <OstInput.sixBit\n                style={{padding: '10px 0'}}\n                autoFocus={false}\n                value={sixBitValue}\n                onChange={(v) => {\n                    console.log('onChange>>>', v)\n                }}\n                onBlur={(v) => {\n                    this.setState({\n                        showKeyBoard: false, \n                        sixBitValue: ''\n                    });\n                    console.log('onBlur callback>>>', v);\n                }}\n                onFocus={(v) => {\n                    this.setState({showKeyBoard: true});\n                    console.log('onFocus callback>>>', v);\n                }}\n             >\n             </OstInput.sixBit>\n        </OstList.card>,\n        \n        <OstNumKeyboard\n            resetWhenClose\n            key='3'\n            maxLength='6'\n            show={this.state.showKeyBoard} \n            onChange={v => this.setState({sixBitValue: v})} />\n       ])\n    }\n}\n:::$\n```"}}]);