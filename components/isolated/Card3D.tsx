/* Copyright (c) 2022-2023 kyomi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { useState } from 'react';

import Shine from './Shine';

function Card3D(props: { children: React.ReactNode }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const classes = [
    'max-w-xl',
    'text-white',
    'border',
    'border-solid',
    'border-zinc-800',
    'bg-zinc-900',
    'p-5',
    'rounded-lg',
    'overflow-hidden',
    'group',
    'duration-300',
    'ease-out',
  ];

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setCoords({
      x: event.pageX - event.currentTarget.offsetLeft - 192,
      y: event.pageY - event.currentTarget.offsetTop - 192,
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

export default Card3D;
