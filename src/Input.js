import React from 'react';


function Input({ textValue, updateText }) {
    // console.log(props.content)
    return (
        <div className="text-input">
            <form >
                <input
                    onChange={updateText} type="text" value={textValue}
                />
            </form>
        </div>
    )
}

export default Input;