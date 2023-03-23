import { useState, useEffect } from 'react';
import CardShine from './CardShine';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function AboutMe() {
  const shineSize = 256;
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const classes = [
    'w-5/6',
    'md:w-1/2',
    'p-5',
    'bg-zinc-900',
    'max-w-2xl',
    'rounded-lg',
    'border',
    'border-solid',
    'border-zinc-800',
    'overflow-hidden',
    'group',
    'relative',
    'ease-out',
    'duration-200',
    'mb-5',
  ];

  const typingText = 'whoami';

  const [text, setText] = useState('');
  const [typing, setTyping] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === true && text !== typingText) {
        setText(typingText.slice(0, text.length + 1));
      } else if (typing === true && text === typingText) {
        sleep(2000).then(() => setTyping(false));
      } else if (typing === false) {
        setText(typingText.slice(0, text.length - 1));
        if (text.length <= 1) setTyping(true);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [text, typing]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const coordX = event.pageX - event.currentTarget.offsetLeft - shineSize / 2;
    const coordY = event.pageY - event.currentTarget.offsetTop - shineSize / 2;

    setCoords({ x: coordX, y: coordY });

    const x =
      event.pageX -
      event.currentTarget.offsetLeft -
      event.currentTarget.offsetWidth / 2;
    const y =
      event.pageY -
      event.currentTarget.offsetTop -
      event.currentTarget.offsetHeight / 2;

    const degX = (x * 6) / event.currentTarget.offsetWidth;
    const degY = (y * 2) / event.currentTarget.offsetHeight;

    const transform = `perspective(700px) rotateX(${degY}deg) rotateY(${-degX}deg)`;
    event.currentTarget.style.transform = transform;
  }

  function handleMouseOut(event: React.MouseEvent<HTMLDivElement>) {
    event.currentTarget.style.transform =
      'perspective(700px) rotateX(0deg) rotateY(0deg)';
  }

  return (
    <div
      className={classes.join(' ')}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <h2 className="mb-4 text-red-50">
        <code className="bg-inherit text-2xl">
          <span className="mr-2 text-emerald-200">
            guest
            <i className="nf nf-md-chevron_right"></i>
          </span>
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </code>
      </h2>
      <p className="text-slate-300">
        Hey there! I am a 20 year old developer from Brazil. I am currently
        studying Software Engineering at the University of Brasilia and I have a
        strong background in web development and software engineering. I am
        highly motivated and dedicated to creating
        {` `}
        <b>efficient and high-quality code</b>
        {` `}that is both <b>functional and user-friendly</b>.
      </p>
      <CardShine x={coords.x} y={coords.y} />
    </div>
  );
}
