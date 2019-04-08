(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{73:function(t,s){t.exports="## OstDemo 示例\n\n  \n```jsx\n:::$demo\n    constructor(props) {\n        super(props);\n        this.state = { turnOn: false };\n    }\n\n    render() {\n        const { turnOn } = this.state;\n\n       return([\n            <OstList.card title=\"卡片-1\" key='0'>\n                <OstList title='列表标题1'>\n                    <OstList.item arrowTo='right' onClick={()=>console.log('事件')} text=\"内容\" />\n                </OstList>\n                <OstList title='列表标题2'>\n                    <OstList.item arrowTo='top' onClick={()=>console.log('事件')} text=\"内容\" />\n                </OstList>\n            </OstList.card>,\n\n            <OstList.card title=\"卡片-2\" key='1'>\n                <OstList title='列表标题1'>\n                    <OstList.item arrowTo={turnOn ? 'bottom' : 'top'} onClick={()=>this.setState({turnOn: !turnOn})} text=\"点击切换\" />\n                </OstList>\n                <OstList title='列表标题2'  tips={()=> {console.log('tips!!!')}}>\n                    <OstList.item arrowTo={'right'} text=\"提示\" />\n                </OstList>\n            </OstList.card>,\n\n            <OstList.card title=\"卡片-3\" key='2'>\n                <OstList title='列表标题1'  style={{padding: '20px 0'}} desc='添加desc属性添加副标题'>\n                </OstList>\n                <OstList title='列表标题2'  style={{padding: '20px 0'}} desc='添加desc属性添加副标题'>\n                </OstList>\n            </OstList.card>\n       ])\n    }\n:::$\n```\n"}}]);