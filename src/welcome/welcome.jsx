import './style.css';

import Line from './line/line'


import { useEffect, useState } from "react";


function Welcome() {

    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false);
    }, 7000);

    return <div className="Welcome" style={{display: (show ? "block" : "none")}}>
        <Line delay="0">Setting up portfolio...</Line> {/* 23*25 = 575ms */}
        <Line delay="2000">Finding good film references</Line> {/* 28*25 = 700ms */}
        <Line delay="3000">Loading up projects...</Line> {/* 22*25 = 550ms */}
        <Line delay="5000">Starting UI, please wait...</Line> {/* 27*25 = 675ms */}
    </div>
}

export default Welcome;