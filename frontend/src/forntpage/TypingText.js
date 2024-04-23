import React, { useEffect, useState } from 'react';
import "./Typing.css"; // Import the CSS file

const TypingText = () => {
    const genZText = "GEN-Z-CONNECT";
    const [charIndexGenZ, setCharIndexGenZ] = useState(0);
    const [isDeletingGenZ, setIsDeletingGenZ] = useState(false);
    const genZRef = React.useRef(null);

    const typeEffectGenZ = () => {
        const currentChar = isDeletingGenZ
            ? genZText.substring(0, charIndexGenZ - 1)
            : genZText.substring(0, charIndexGenZ + 1);

        genZRef.current.textContent = currentChar;

        if (!isDeletingGenZ && charIndexGenZ < genZText.length) {
            setCharIndexGenZ(charIndexGenZ + 1);
        } else if (isDeletingGenZ && charIndexGenZ > 0) {
            setCharIndexGenZ(charIndexGenZ - 1);
        } else {
            setIsDeletingGenZ(!isDeletingGenZ);
        }
    };

    useEffect(() => {
        const timeoutGenZ = setTimeout(typeEffectGenZ, isDeletingGenZ ? 50 : 200);
        return () => clearTimeout(timeoutGenZ);
    }, [charIndexGenZ, isDeletingGenZ]); // Dependencies for useEffect

    const genZConnect = genZText.split("-").join(" "); // Replace dashes with spaces

    return (
        <div className="TypingText">
            <h1>
                WELCOME TO {window.innerWidth < 1998 ? <br /> : null}
                <span ref={genZRef} className="stop-blinking">{genZConnect}</span>
            </h1>
        </div>
    );
};

export default TypingText;
