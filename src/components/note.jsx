import React, { Component } from 'react';


class Note extends Component {
    state = {  }

    handleClick=()=>{
        let key=this.props.id;
        this.props.delete(key);
    }

    render() { 
        return ( 
            <div className='padding10' style={{backgroundColor:'#a4bfe2',borderRadius:5}} onClick={this.handleClick}>
                <span>{this.props.value}</span>
            </div>
         );
    }
}
 
export default Note;