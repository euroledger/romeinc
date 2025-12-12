// TTCounter.jsx
import React, { memo } from 'react';

function TTCounter({ data, currentScale, onDoubleClick }) {
    const style = {
        position: "absolute",
        top: data.position.top, 
        left: data.position.left, 
        width: data.width, // '1.6%'
        zIndex: 500 + data.stackIndex, 
        cursor: 'pointer', // Indicates interactivity
    };

    return (
        <img
            src={data.image}
            alt={data.name}
            style={style}
            onDoubleClick={onDoubleClick} // Add double click handler
        />
    );
}

export default memo(TTCounter);
