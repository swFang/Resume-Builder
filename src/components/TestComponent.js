import React from 'react';
import { connect } from 'react-redux';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data);
        return(<p>abc</p>)
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(TestComponent);