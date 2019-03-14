import React, { Component } from 'react';

class Header extends Component {
    state = {  }

    render() { 
        return ( 
            <div style={{backgroundColor:'#5a8596',padding:10,color:'white'}}>
                <div className='container' style={{textAlign:'center'}}>
                    <div>{this.props.title}</div>
                </div>
            </div>
         );
    }
}
 
export default Header;