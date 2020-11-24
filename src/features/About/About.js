import React from 'react';
import Modal from '../../components/Modal/Modal';
import './About.scss';

const About = ({

}) => {
    let modalStyle = {};

    return (
        <Modal
            visible={true}
            title="About"
            footer="Ok"
            modalStyle={modalStyle}
            centered={true}
            scrollable={true}
        >
            <div className="about">
                <h2>Copyright</h2>
                <div>About</div>
            </div>
        </Modal>
    )
}

export default About;