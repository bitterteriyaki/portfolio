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

const tagsInfo = {
  // Languages
  python: { color: '#4584b6', fancyName: 'Python' },
  git: { color: '#f34f29', fancyName: 'Git' },
  pandas: { color: '#ffca00', fancyName: 'Pandas' },
  postgresql: { color: '#008bb9', fancyName: 'PostgreSQL' },
  php: { color: '#aeb2d5', fancyName: 'PHP' },
  linux: { color: '#ffffff', fancyName: 'Linux' },
  typescript: { color: '#3178c6', fancyName: 'TypeScript' },

  // Frameworks
  nextjs: { color: '#ffffff', fancyName: 'Next.js' },
  tailwindcss: { color: '#38bdf8', fancyName: 'Tailwind' },

  // DevOps
  docker: { color: '#0db7ed', fancyName: 'Docker' },

  // Other stuff
  aboutMe: { color: '#10b981', fancyName: 'About Me' },
  career: { color: '#fb7185', fancyName: 'Career' },
  discordBot: { color: '#7289da', fancyName: 'Discord Bot' },
  website: { color: '#f59e0b', fancyName: 'Website' },
};

type TagType = keyof typeof tagsInfo;

function Tag(props: { type: TagType }) {
  const info = tagsInfo[props.type];
  const style = { color: info.color, backgroundColor: `${info.color}15` };

  const classes = [
    'border',
    'border-solid',
    'px-2',
    'py-1',
    'rounded-full',
    'text-[10px]',
    'md:text-xs',
  ];

  return (
    <span className={classes.join(' ')} style={style}>
      {info.fancyName}
    </span>
  );
}

export type { TagType };
export default Tag;
