import React, {Component} from 'react'

const Encomponent=(OrComponent)=>{
    class NewComponent extends Component
    {
        render(){
            return <OrComponent name="suit"/>
        }
    }
    return NewComponent
}
export default Encomponent
  