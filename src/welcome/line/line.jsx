import './style.css'

// import { Children } from 'react';
import { useEffect, useState } from "react";

function Line({children, delay}){
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(0);

    const texts = children;

    setTimeout(() => {
        setShow(1);
    }, delay);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + show));
            if(index === texts.length + 1){
                clearInterval(interval);
            }
        }, 25);
        return () => clearInterval(interval);
    }, [setIndex, index, show, texts]);

    return <div className="Line">
        {show ? <div className='superior'>&#62;</div> : <></>}
        <div className='content'>{texts.substring(0, index)}</div>
    </div>
}

export default Line;