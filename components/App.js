import React, {Component} from 'react';
import Content from './Content'
import Header from './Header'
import Maincomponent from '../src/views/MainComponents';
require('../src/style/global.scss')

class App extends Component{
    constructor(){
        super();
        this.state= {
            message1: "Initial msg",
            message2: "Initial msg"
        }
        
        this.handleState = this.handleState.bind(this)
        this.updateOnClick = this.updateOnClick.bind(this)
    }
    handleState(e){
        this.setState({message1: e.target.value})
    }

    updateOnClick(){
        this.setState({message2: "Final msg"})
    }
    render(){
        return(
            <div>
                <Content msgProp= {this.state.message1}
                    updateStateprop= {this.handleState}></Content>
                <Header msgProp= {this.state.message2}
                    onClickprop = {this.updateOnClick}></Header>
                <Maincomponent/>
            </div>
        )
    }
}



export default App

