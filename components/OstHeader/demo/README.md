## OstDemo 示例

  
```jsx
:::$demo

    render() {

       return(
        <div>
        
            <OstHeader title='头部' />

            <OstHeader
                title='头部-自定义返回'
                leftOpt={{
                    onClick: ()=> alert('自定义返回')
                }}
                style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)', top: '60px' }}/>

            <OstHeader
                title='头部-修改默认样式'
                titleStyle={{color: '#fff' }}
                style={{ background: '#3f7ae7', top: '120px'}} />

        </div>
       )
    }
:::$
```
