import { useState } from 'react';
import Shine from './Shine';

function Card(props: { children: React.ReactNode }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const classes = [
    'p-5',
    'bg-zinc-900',
    'border',
    'border-solid',
    'border-zinc-800',
    'rounded-lg',
    'w-full',
    'ease-out',
    'duration-200',
    'group',
    'overflow-hidden',
    'max-w-xl',
    'text-white',
  ];

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setCoords({
      x: event.pageX - event.currentTarget.offsetLeft - 128,
      y: event.pageY - event.currentTarget.offsetTop - 128,
    });

    const x =
      event.pageX -
      event.currentTarget.offsetLeft -
      event.currentTarget.offsetWidth / 2;
    const y =
      event.pageY -
      event.currentTarget.offsetTop -
      event.currentTarget.offsetHeight / 2;

    const degX = (x * 6) / event.currentTarget.offsetWidth;
    const degY = (y * 3) / event.currentTarget.offsetHeight;

    event.currentTarget.style.transform = `perspective(700px) rotateX(${degY}deg) rotateY(${-degX}deg)`;
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
      {props.children}
      <Shine x={coords.x} y={coords.y} />
    </div>
  );
}

export default Card;
