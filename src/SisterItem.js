import React, { Component,Fragment } from 'react';
class SisterItem extends Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this)
        }
    render() { 
        return ( 
            <Fragment>
            <li onClick={this.handleClick}>
                {this.props.content}
            </li> 
            </Fragment>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
 
export default SisterItem;