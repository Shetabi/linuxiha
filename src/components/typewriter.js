import React from 'react'
import { useState, useEffect} from 'react';

export default function Typewriter(props) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true); 
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
      }, [blink]);
    useEffect(() => {
        if (
          subIndex === props.words[index].length + 1 &&
          !reverse
          ){
            setReverse(true);
            return;
           }
         
         if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
           }

        const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 300);

        if (reverse && index === (props.words.length - 1) && subIndex === 1) {
            setIndex(0);
            setSubIndex(0);
            setReverse(false);
            return;
        };

        return () => clearTimeout(timeout);
        }, [subIndex, index, reverse]);

    return (
        <span>
          {`${props.words[index].substring(0, subIndex)}${blink ? "|" : ""}`}  
        </span>
    )
}
