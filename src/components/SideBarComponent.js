import React from 'react';
import { connect } from 'react-redux';
import * as sections from "../StaticInfo/Sections.json";

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(sections);
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

export default connect(mapStateToProps)(SideBarComponent);