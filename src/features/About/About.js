import React from 'react';
import Modal from '../../components/Modal/Modal';
import './About.scss';

const About = ({

}) => {
    return (
        <Modal
                title="About"
                footer="Ok"
                centered={false}
                scrollable={false}
            >
                <div className="about">
                    <h2>Copyright</h2>
                    <div>About</div>
                </div>
            </Modal>
    )
}

export default About;