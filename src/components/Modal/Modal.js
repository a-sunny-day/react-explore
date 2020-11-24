import React from 'react';
import './Modal.scss';
import classnames from 'classnames';

const Modal = ({
    children,
    title,
    footer,
    width,
    height,
    maskClsName,
    maskStyle,
    modalClsName,
    modalStyle,
    centered,
    scrollable,
}) => {
    let modalWrapperCls = classnames(
        { 
            "modal__wrapper--centered": centered,
            "modal__wrapper--scrollable": scrollable
        }
    )
    let modalContentStyle = {
        ...modalStyle,
    }
    if(Number.isInteger(height)) modalContentStyle.height = height;
    if(Number.isInteger(width)) modalContentStyle.width = width;

    return (
        <div className="modal">
            <div className={`modal__mask ${maskClsName || ""}`} style={maskStyle}></div>
            <div className={`modal__wrapper ${modalWrapperCls}`}>
                <div className={`modal__content ${modalClsName || ""}`} style={modalContentStyle}>
                    <div className="modal__header">
                        <span>{title}</span>
                    </div>
                    <div className="modal__body">
                        {children}
                    </div>
                    <div className="modal__footer">
                        <button>{footer}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;