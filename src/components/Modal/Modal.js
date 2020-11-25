import React, { useRef } from 'react';
import './Modal.scss';
import classnames from 'classnames';
import Portal from '../Portal/Portal';

const EmptyFunc = () => {};

const Modal = ({
    visible = false,
    children,
    title, // null: will not render header
    footer, //null: will not render footer
    width,
    height,
    closeWhenClickMask = true,
    maskClsName,
    maskStyle,
    modalClsName,
    modalStyle,
    centered,
    scrollable,
    onClickOk = EmptyFunc,
    okText = "Ok",
    closeMe = EmptyFunc,
    onClickCancel = EmptyFunc,
    cancelText = "Cancel"
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
    if (Number.isInteger(height)) modalContentStyle.height = height;
    if (Number.isInteger(width)) modalContentStyle.width = width;
    
    let contentRef = useRef(null);
    let onClickWrapper = e => {
        if(!contentRef.current.contains(e.target)) {
            closeWhenClickMask && closeMe();
        }
    }
    return (
        visible && <Portal>
            <div className="modal">
                <div className={`modal__mask ${maskClsName || ""}`} style={maskStyle}></div>
                <div className={`modal__wrapper ${modalWrapperCls}`} onClick={onClickWrapper}>
                    <div ref={contentRef} className={`modal__content ${modalClsName || ""}`} style={modalContentStyle}>
                        {
                            title !== null && <div className="modal__header">
                                <span>{title}</span>
                            </div>
                        }
                        <div className="modal__body">
                            {children}
                        </div>
                        {
                            footer !== null && <div className="modal__footer">
                                <button onClick={onClickOk}>{okText}</button>
                                <button onClick={onClickCancel}>{cancelText}</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Portal>

    )
}

export default Modal;