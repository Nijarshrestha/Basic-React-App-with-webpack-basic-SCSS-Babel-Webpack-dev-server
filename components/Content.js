import React,{Component} from 'react';

class Content extends Component{

    render(){
        return(
            <div>
                <input onChange = {this.props.updateStateprop}/>
                <h1>{this.props.msgProp}</h1>
            </div>
        )
    }
}
export default Content