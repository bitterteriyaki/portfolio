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

import { motion } from 'framer-motion';
import Link from 'next/link';

import Tag from './Tag';
import type { TagType } from './Tag';

type ProjectProps = {
  children: React.ReactNode;
  title: string;
  tags: TagType[];
  repositoryName: string;
};

function Project(props: ProjectProps) {
  const classes = [
    'border',
    'border-solid',
    'border-zinc-700',
    'p-3',
    'md:p-4',
    'rounded-lg',
    'bg-zinc-900',
    'hover:bg-zinc-800',
    'duration-150',
    'max-md:hover:-translate-y-1',
    'md:hover:-translate-x-2',
    'ease-out',
  ];

  const url = `https://github.com/bitterteriyaki/${props.repositoryName}`;
  const tags = props.tags.map((tag, index) => {
    return <Tag key={index} type={tag} />;
  });

  return (
    <motion.div
      className={classes.join(' ')}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <div className="grid gap-5">
        <div className="flex items-center gap-1 md:gap-2">
          <h3 className="font-bold leading-none text-white">{props.title}</h3>
          {tags}
        </div>
        <p className="leading-5 text-white">{props.children}</p>
        <div>
          <Link
            className="text-green-300 duration-100 hover:text-green-200 hover:underline"
            href={url}
            target="_blank"
          >
            Check repository <i className="nf nf-md-arrow_right"></i>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
