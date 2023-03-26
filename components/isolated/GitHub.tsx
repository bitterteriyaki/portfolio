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

import Link from 'next/link';

function GitHub() {
  const github = 'https://github.com/bitterteriyaki';
  const classes = [
    'grid',
    'grid-flow-col',
    'place-items-center',
    'gap-3',
    'border',
    'border-solid',
    'border-slate-400',
    'px-4',
    'py-3',
    'rounded-full',
    'bg-gradient-to-r',
    'from-stone-900',
    'to-transparent',
    'hover:bg-zinc-900',
    'duration-200',
    'text-white',
    'group',
  ];

  return (
    <Link href={github} target="_blank" className={classes.join(' ')}>
      <div className="rounded-full bg-green-800 p-2 opacity-90">
        <i className="nf nf-dev-git_pull_request text-[22px] text-green-400" />
      </div>
      <div>
        <p className="font-bold">Do you want to see my work?</p>
        <p className="text-xs text-slate-400 md:text-base">
          Click here to see my GitHub profile.
        </p>
      </div>
      <div className="duration-150 group-hover:translate-x-2">
        <i className="nf nf-fa-arrow_right" />
      </div>
    </Link>
  );
}

export default GitHub;
