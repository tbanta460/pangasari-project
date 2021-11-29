import React from 'react';

const Button = ({title, type = "button", style, ...rest}) => {
    return (
        <>
            <button type={type} className={`rounded-lg p-2 ${style}`} {...rest}>{title}</button>
        </>
    )
}

export default Button