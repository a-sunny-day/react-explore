import React from 'react';
import ReactDOM from 'react-dom';

export default function Popup({
    text = 'hello popup',
    onClose = () => {}
}) {
    const style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.45)'
    }
    
    return <div className="__popup_container" style={style} onClick={onClose}>
        <h1>{text}</h1>
    </div>
}


Popup.render = (props) => {
    let container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
        <Popup {...props} />,
        container
    )
    return container;
}

Popup.destroy = (domElement) => {
    ReactDOM.unmountComponentAtNode(domElement);
    document.body.removeChild(domElement);
}

