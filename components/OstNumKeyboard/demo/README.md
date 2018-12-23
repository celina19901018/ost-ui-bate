## OstNumKeyboard 示例

  
```jsx
class OstNumKeyboard extends Component {

:::$demo
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
       return( 
            <div>
                <OstNumKeyboard
                    show={this.state.show}
                    onChange={v => console.log('onChange>>>', v)} />
            </div>
       )
    }
:::$

}
```
