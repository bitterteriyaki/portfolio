import { useState } from 'react';

function BubbleHover() {
  const [current, setCurrent] = useState<number>();

  function mapChars(char: string, index: number) {
    const classes = ['duration-100'];

    if (index === current) classes.push('font-extrabold');
    if (index - 1 === current || index + 1 === current)
      classes.push('font-bold');
    if (index - 2 === current || index + 2 === current)
      classes.push('font-semibold');
    if (index - 3 === current || index + 3 === current)
      classes.push('font-medium');

    return (
      <span
        key={index}
        onMouseOver={() => setCurrent(index)}
        onMouseLeave={() => setCurrent(undefined)}
        className={classes.join(' ')}
      >
        {char}
      </span>
    );
  }

  const text = 'Pragmatic, efficient and flexible.';
  const spans = text.split('').map(mapChars);

  return <h1 className="my-5 text-center text-6xl text-white">{spans}</h1>;
}

export default BubbleHover;
