import React from 'react'

const Button = ({ value, svg, className, onClick }) => {
    return (
        <button onClick={onClick} className={className}>
            <span>{svg}</span>
            <span>{value}</span>
        </button>
    )
}

export default Button