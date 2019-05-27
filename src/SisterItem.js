import React, { Component,Fragment } from 'react';
class SisterItem extends Component {
    
    render() { 
        return ( 
            <Fragment>
            <li onClick={this.props.onClick}>
                {this.props.inputValue}
            </li> 
            </Fragment>
        );
    }
}
 
export default SisterItem;