import React from 'react';
import { connect } from 'react-redux';
import GeneralInformationPage from './page_components/GeneralInformationPage';
import SkillsPage from './page_components/SkillsPage';
import './MainPageComponentStyling.css';

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainPageContent">
                <GeneralInformationPage/>
                <SkillsPage/>
            </div>
        );
    }
}

export default MainPageComponent;