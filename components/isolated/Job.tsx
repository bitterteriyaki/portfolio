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

import Tag from './Tag';

type Tags = {
  [key: string]: {
    color: string;
    fancyName: string;
  };
};

const tagsInfo: Tags = {
  python: {
    color: '#4584b6',
    fancyName: 'Python',
  },
  git: {
    color: '#f34f29',
    fancyName: 'Git',
  },
  pandas: {
    color: '#ffca00',
    fancyName: 'Pandas',
  },
  postgresql: {
    color: '#008bb9',
    fancyName: 'PostgreSQL',
  },
  php: {
    color: '#aeb2d5',
    fancyName: 'PHP',
  },
  linux: {
    color: '#ffffff',
    fancyName: 'Linux',
  },
};

type JobProps = {
  children: React.ReactNode;
  title: string;
  tags: string[];
  company: string;
  duration: string;
};

function Job(props: JobProps) {
  const classes = [
    'text-white',
    'border',
    'border-solid',
    'border-zinc-700',
    'p-4',
    'rounded-lg',
    'bg-zinc-900',
    'hover:bg-zinc-800',
    'duration-150',
    'hover:translate-x-2',
    'ease-out',
  ];

  const tags = props.tags.map((tag, index) => {
    const color = tagsInfo[tag].color;
    const fancyName = tagsInfo[tag].fancyName;
    return (
      <Tag key={index} color={color}>
        {fancyName}
      </Tag>
    );
  });

  return (
    <motion.div
      className={classes.join(' ')}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <div className="grid gap-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold leading-none">{props.title}</h3>
            {tags}
          </div>
          <p className="text-xs">{props.company}</p>
          <p className="text-xs">{props.duration}</p>
        </div>
        <p className="leading-5">{props.children}</p>
      </div>
    </motion.div>
  );
}

export default Job;
