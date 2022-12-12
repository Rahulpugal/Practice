import React, { Component } from 'react'
import Encomponent from './Encomponent'


 class Hover extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
  render() {
    return (
      <div>
      {this.props.name}
        <h1 onMouseEnter={this.inc}>Hover!{this.state.count}</h1>
      </div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}
export default Encomponent(Hover)
