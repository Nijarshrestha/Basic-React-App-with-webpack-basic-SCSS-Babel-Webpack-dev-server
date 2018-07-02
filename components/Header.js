import  React, {Component} from 'react'

class Header extends Component{
    render(){
        return(
            <div>
               <h1>{this.props.msgProp}</h1><button onClick = {this.props.onClickprop}>Click</button>
            </div>
        )
    }
}

export default Header