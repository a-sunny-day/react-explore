import React, { useLayoutEffect, useRef, useState} from 'react';
import "./Home.scss";
import Popup from '../ImperativeComponent/ImperativeCom';

const Home = ({

}) => {
    let divider = ({key}) => <div key={key} className="home__divider"></div>;
    let tagEles = [];
    [
        "header",
        "nav",
        "main",
        "section",
        "article",
        "aside",
        "footer"
    ].map((tag, index, array) => {
        tagEles.push(<span key={tag} className="home__tag-item">{tag}</span>)
        if (index < array.length - 1) {
            tagEles.push(divider({key: index}));
        }
    });
    let [size16Height, setSize16Height] = useState("-");
    let [size22Height, setSize22Height] = useState("-");
    let size16pxRef = useRef(null);
    let size22pxRef = useRef(null);

    useLayoutEffect(() => {
        setSize16Height(
            size16pxRef.current && size16pxRef.current.offsetHeight
        );
        setSize22Height(
            size22pxRef.current && size22pxRef.current.offsetHeight
        )
    }, []);
    
    const onClickHome = () => {
        const container = Popup.render({
            text: 'hello react dom',
            onClose: () => { Popup.destroy(container)}
        })
    };

    return (
        <div className="home">
            <h2 onClick={onClickHome}>Home</h2>
            <section className="home__tags">
                {tagEles}
            </section>
            <section>
                <section>
                    <span className="font-size-16" ref={size16pxRef}>字体大小: 16px</span>
                    <code>
                        font: 16px
                        height: {size16Height} px
                    </code>
                </section>
                
                <section>
                    <span className="font-size-22" ref={size22pxRef}>font-size: 22px</span>
                    <code>
                        height: {size22Height} px
                    </code>
                </section>
            </section>
        </div>
    )
}

export default Home;