## OstDemo 示例

  
```jsx
:::$demo
    render() {
       return(
        <div>
        <OstList.card title='OstCheckbox'>
          <OstList title='可选'>
            <OstCheckbox defaultChecked={true} onClick={ck => {console.log(ck);}}/>
          </OstList>
          <OstList title='不可选-默认选中'>
            <OstCheckbox disabled={true} defaultChecked={true} onClick={ck => {console.log(ck);}}/>
          </OstList>
          <OstList title='不可选-默认未选'>
            <OstCheckbox disabled={true} defaultChecked={false} onClick={ck => {console.log(ck);}}/>
          </OstList>
        </OstList.card>
        </div>
       )
    }
:::$
```

