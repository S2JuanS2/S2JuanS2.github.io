import { useState, useEffect } from "react";

export default function TypewriterEffect({ text, speed = 50, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStart(true);
    }, delay * 1000);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (start && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, start]);

  return <p className="text-lg font-mono">{displayedText}</p>;
}
