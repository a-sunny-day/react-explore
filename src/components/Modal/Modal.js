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
            "modal--wrapper__centered": centered,
            "modal--wrapper__scrollable": scrollable
        }
    )
    let modalContentStyle = {
        ...modalStyle,
    }
    if(Number.isInteger(height)) modalContentStyle.height = height;
    if(Number.isInteger(width)) modalContentStyle.width = width;

    return (
        <div className="modal">
            <div className={`modal--mask ${maskClsName || ""}`} style={maskStyle}></div>
            <div className={`modal--wrapper ${modalWrapperCls}`}>
                <div className={`modal--content ${modalClsName || ""}`} style={modalContentStyle}>
                    <div className="modal--header">
                        <span>{title}</span>
                    </div>
                    <div className="modal--body">
                        {children}
                    </div>
                    <div className="modal--footer">
                        <button>{footer}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;