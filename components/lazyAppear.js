import {useState, useEffect, useRef} from 'react';

import styles from './lazyAppear.module.scss';

const LazyApper = ({children, scroll}) => {
    const [visible, setVisible] = useState(false);

    let windowHeight = 0;

    const domRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        windowHeight = window.innerHeight;
        console.log(`windowHeight : ${windowHeight}`)
        window.addEventListener('resize', updateWindowSize);
        toggleVisible();
    }, []);

    const updateScroll = () => {
        toggleVisible();
    };

    const toggleVisible = () => {
        const offset = domRef.current.getBoundingClientRect().top;
        if (!visible && offset < windowHeight - 200) setVisible(true);
        else if (visible && offset > windowHeight - 200) setVisible(false);
    };

    const updateWindowSize = () => {
        windowHeight = window.innerHeight;
    };

    return (
        <div className={`${styles.wrapper} ${visible ? styles.show : styles.hide}`} ref={domRef}>
            {children}
        </div>
    );
};

export default LazyApper;