import { useState, useEffect } from 'react';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function TerminalText(props: { text: string }) {
  const originalText = props.text;
  const [text, setText] = useState('');
  const [typing, setTyping] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === true && text !== originalText) {
        setText(originalText.slice(0, text.length + 1));
      } else if (typing === true && text === originalText) {
        sleep(2000).then(() => setTyping(false));
      } else if (typing === false) {
        setText(originalText.slice(0, text.length - 1));
        if (text.length <= 1) setTyping(true);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [text, typing]);

  return (
    <h3 className="mb-4">
      <code className="bg-inherit text-2xl">
        <span className="mr-2 text-emerald-300">
          guest
          <i className="nf nf-md-chevron_right"></i>
        </span>
        <span>{text}</span>
        <span className="animate-pulse">|</span>
      </code>
    </h3>
  );
}

export default TerminalText;
