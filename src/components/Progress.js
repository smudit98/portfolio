import React, { useState, useEffect } from 'react'
const Progress = (props) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(props.percent);
    });
    return (
        <div className="progressSpan">
            <div style={{ width: `${value}%` }} className="progressbar" />
        </div>

    );
}
export default Progress;