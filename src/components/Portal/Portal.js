import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';

const Portal = ({
    children,
}) => {
    let [mounted, setMounted] = useState(false);
    let nodeRef = useRef(
        document.createElement('div')
    );
    useEffect(() => {
        setMounted(true);
        document.body.appendChild(nodeRef.current);
        return () => {
            document.body.removeChild(nodeRef.current);
        }
    }, []);

    return (
        mounted && ReactDOM.createPortal(children, nodeRef.current)
    );
}


export default Portal;