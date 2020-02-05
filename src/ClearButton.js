import React from 'react';
function ClearButton({ clearOnClick }) {
    // console.log(props.content)
    return (
        <div className="input">
            <button onClick={clearOnClick}>Button</button>
        </div>


    )
}

export default ClearButton;