(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{74:function(n,o){n.exports="## OstLoading 示例\n\n  \n```jsx\n:::$demo\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            isLoading: false\n        }\n    }\n\n    render() {\n       return( \n            <div className='demo-box'>\n                <button \n                    className='demo-button'\n                    onClick={()=>this.setState({isLoading: !this.state.isLoading})} > \n                    {this.state.isLoading ? '关闭 Loading' : '显示 Loading'}\n                </button>\n                <OstLoading isLoading={this.state.isLoading} />\n            </div>\n       )\n    }\n:::$\n```\n\n```css\n<style>\n.demo-box {\n    width: 100%;\n    padding: 10px;\n}\n\n.demo-button {\n    width: calc(100% - 20px);\n    height: 44px;\n    position: fixed;\n    bottom: 10px;\n    z-index: 10000;\n    font-size: 14px;\n    background: #FF6D00;\n    color: #fff;\n    border-radius: 100px;\n}\n\n</style>\n\n```\n"}}]);