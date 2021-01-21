import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    hexColor = `#${hexColor}`;

    const copyColor = () => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    };

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setAlert(false);
    //     }, 2000);
    //     return () => clearTimeout(timeout);
    // }, [alert]);

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `${hexColor}` }}
            onClick={copyColor}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexColor}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
