import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor:'#5a8596',padding:10,color:'white'}}>
                <div className='container' style={{textAlign:'center'}}>
                    <div>{this.props.footer}</div>
                </div>
            </div>
         );
    }
}
 
export default Footer;