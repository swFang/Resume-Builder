import React from 'react';
import { connect } from 'react-redux';
import * as sections from "../StaticInfo/Sections.json"; 

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(sections.SECTIONS);
    }

    createDivs() {
        const sectionArr = sections.SECTIONS;
        sectionArr.forEach(element => {
            return (
                <div>
                    {element}
                </div>
            )
        });
    }

    render() {
        return(
            <div className = "sidbar">
                {sections.SECTIONS.map(sect => (
                    <div className="section">{sect}</div>
                ))}
                sidebar
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(SideBarComponent);