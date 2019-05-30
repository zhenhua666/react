import React, { Component,Fragment } from 'react';
import propTypes from 'prop-types'

class SisterItem extends Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this)
        }
    render() { 
        return ( 
            <Fragment>
            <li onClick={this.handleClick}>
                {this.props.avname}--{this.props.content}
            </li> 
            </Fragment>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

SisterItem.propTypes = {
    content:propTypes.string,
    deleteItem:propTypes.func,
    index:propTypes.number,
    avname:propTypes.string.isRequired
}

SisterItem.defaultProps={
    avname:'夜烬'
}

export default SisterItem;
