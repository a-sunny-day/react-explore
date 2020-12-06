import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import './About.scss';

const About = ({

}) => {
    let modalStyle = {};
    let [modalVisible, setModalVisible] = useState(true);
    let closeModal = () => setModalVisible(false);
    let openModal = () => setModalVisible(true);
    return (
        <div>
            <button onClick={openModal}>open modal</button>
            <Modal
                visible={modalVisible}
                title={null}
                footer={null}
                closeMe={closeModal}
                onClickOk={closeModal}
                onClickCancel={closeModal}
                modalStyle={modalStyle}
                centered={true}
                scrollable={true}
            >
                <div className="about">
                    <h2>Copyright</h2>
                    <div>About</div>
                </div>
            </Modal>
        </div>
    )
}

export default About;