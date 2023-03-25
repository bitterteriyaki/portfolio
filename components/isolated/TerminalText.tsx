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

import { useEffect, useState } from 'react';

function TerminalText(props: { text: string }) {
  const original = props.text;
  const [text, setText] = useState('');
  const [typing, setTyping] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === true && text !== original) {
        setText(original.slice(0, text.length + 1));
      } else if (typing === true && text === original) {
        setTimeout(() => setTyping(false), 2500);
      } else if (typing === false && text !== '') {
        setText(original.slice(0, text.length - 1));
      } else {
        setTimeout(() => setTyping(true), 1500);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [text, typing, original]);

  return (
    <p className="mb-3">
      <code className="bg-inherit text-2xl">
        <span className="text-emerald-300">
          guest
          <i className="nf nf-md-chevron_right" />
        </span>
        <span>{text}</span>
        <span className="animate-pulse">|</span>
      </code>
    </p>
  );
}

export default TerminalText;
