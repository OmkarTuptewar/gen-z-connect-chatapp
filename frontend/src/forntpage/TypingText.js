import React, { useEffect, useState } from 'react';
import "./Typing.css"; // Import the CSS file

const TypingText = () => {
    const genZText = "GEN-Z-CONNECT";
    const madeWithLoveText = "Made with 💞 by Omkar Tuptewar";
    const [charIndexGenZ, setCharIndexGenZ] = useState(0);
    const [charIndexLove, setCharIndexLove] = useState(0);
    const [isDeletingGenZ, setIsDeletingGenZ] = useState(false);
    const [isDeletingLove, setIsDeletingLove] = useState(false);
    const genZRef = React.useRef(null);
    const loveRef = React.useRef(null);

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

    const typeEffectLove = () => {
        const currentChar = isDeletingLove
            ? madeWithLoveText.substring(0, charIndexLove - 1)
            : madeWithLoveText.substring(0, charIndexLove + 1);

        loveRef.current.textContent = currentChar;

        if (!isDeletingLove && charIndexLove < madeWithLoveText.length) {
            setCharIndexLove(charIndexLove + 1);
        } else if (isDeletingLove && charIndexLove > 0) {
            setCharIndexLove(charIndexLove - 1);
        } else {
            setIsDeletingLove(!isDeletingLove);
        }
    };

    useEffect(() => {
        const timeoutGenZ = setTimeout(typeEffectGenZ, isDeletingGenZ ? 50 : 200);
        const timeoutLove = setTimeout(typeEffectLove, isDeletingLove ? 50 : 200);
        return () => {
            clearTimeout(timeoutGenZ);
            clearTimeout(timeoutLove);
        };
    }, [charIndexGenZ, isDeletingGenZ, charIndexLove, isDeletingLove]); // Dependencies for useEffect

    return (
        <div className="TypingText">
            <h1>
                WELCOME TO <span ref={genZRef} className="stop-blinking"></span>
            </h1>
            <h3 style={{ marginLeft: '20px' }}>
                <span ref={loveRef} className="stop-blinking"></span>
            </h3>
        </div>
    );
};

export default TypingText;
