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

import Card3D from '../isolated/Card3D';
import Job from '../isolated/Job';
import Tag from '../isolated/Tag';
import TerminalText from '../isolated/TerminalText';

function FAQ() {
  const classes = ['grid', 'place-items-center', 'gap-10'];

  return (
    <section className={classes.join(' ')}>
      {/* FAQ Title */}
      <motion.div
        className="grid place-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <h2 className="text-center text-4xl font-bold leading-normal text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex gap-2">
          <Tag color="#10b981">About Me</Tag>
          <Tag color="#fb7185">Career</Tag>
        </div>
      </motion.div>

      {/* Who Am I? */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <Card3D>
          <TerminalText text="whoami" />
          <p>
            Hey there! I am a 20 year old developer from Brazil. I am currently
            studying Software Engineering at the University of Brasilia and I
            have a strong background in web development and software
            engineering. I am highly motivated and dedicated to creating{' '}
            <b>efficient and high-quality code</b> that is both{' '}
            <b>functional and user-friendly</b>.
          </p>
        </Card3D>
      </motion.div>

      {/* Career */}
      <motion.div
        className="mb-5 grid place-items-center gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <h3 className="text-3xl font-bold text-white">Career</h3>
        <div className="flex max-w-lg gap-5">
          <div className="hidden w-1 bg-gradient-to-b from-transparent via-white to-slate-400 md:block" />
          <div className="grid place-items-center gap-5">
            <Job
              title="Software Developer Intern"
              tags={['python', 'git', 'pandas']}
              company="Ernest Manheim"
              duration="May 2021 - Jun 2021"
            >
              Development of a product in which messages were analyzed and,
              through analysis and natural language processing (NLP), displayed
              graphs and dashboards of information from that particular group.
            </Job>
            <Job
              title="Software Engineer"
              tags={['linux', 'git', 'postgresql', 'php']}
              company="Tecnisys"
              duration="Jun 2022 - Dec 2022"
            >
              Features development, bug fixes and code refactoring for a
              platform using PHP and some HTML and CSS (with Bootstrap). Code
              improvements like creating automated tests and documentation have
              also been improved.
            </Job>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;
