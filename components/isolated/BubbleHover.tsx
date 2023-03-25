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

function BubbleHover(props: { children: React.ReactNode }) {
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

  // Property 'children' can be undefined, so we need to check it.
  const text = props.children?.toString() || '';
  const spans = text.split('').map(mapChars);

  return <h2 className="text-center text-6xl text-white">{spans}</h2>;
}

export default BubbleHover;
