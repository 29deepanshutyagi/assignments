import { useEffect } from "react";
import { useRef } from "react";
// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const input = useRef(null);

    useEffect(() => {
        document.getElementById('input').focus();
    }, []);

    const handleButtonClick = () => {
        //   document.getElementById('input').focus();
        input.current.focus();
    };

    return (
        <div>
            <input ref={input} id="input" type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
