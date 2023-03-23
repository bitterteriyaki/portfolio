import { useState } from 'react';

export default function BubbleHover() {
  const [current, setCurrent] = useState<number>();
  const classes = ['text-red-100', 'text-6xl', 'text-center', 'my-5'];

  function mapSpans(char: string, index: number) {
    const classes = ['duration-[50ms]'];

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
  const spans = text.split('').map(mapSpans);

  return <h1 className={classes.join(' ')}>{spans}</h1>;
}
