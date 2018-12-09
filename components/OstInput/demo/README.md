## OstDemo 示例

  
```jsx
:::$demo
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        const { value } = this.state;

       return([
        
        <OstList.card title="输入框" key='0'>
          <OstList title='标准输入'>
            <OstInput placeholder='请输入' />
          </OstList>
          <OstList title='不可输入'>
            <OstInput defaultValue='禁用' disabled />
          </OstList>
        </OstList.card>,

        <OstList.card title="输入框" key='1'>
          <OstList title='请输入测试内容'>
            <OstInput
                placeholder='请输入' 
                value={value}
                onDel={()=>this.setState({value: ''})}
                onChange={e => this.setState({value: e.currentTarget.value})} />
          </OstList>
        </OstList.card>

       ])
    }
:::$
```
