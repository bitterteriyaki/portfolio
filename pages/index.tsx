import Head from 'next/head';
import { motion } from 'framer-motion';
import BubbleHover from '@/components/BubbleHover';
import Invite from '@/components/Invite';
import Card from '@/components/Card';
import TerminalText from '@/components/TerminalText';
import Tag from '@/components/Tag';
import Job from '@/components/Job';

function Home() {
  return (
    <>
      <Head>
        <title>kyomi - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className="grid place-items-center">
          <div className="mb-4 flex h-screen w-5/6 flex-col items-center justify-center">
            <BubbleHover />
            <Invite />
          </div>
          <div className="grid w-full place-items-center gap-16">
            <motion.div
              className="grid w-5/6 place-items-center gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div>
                <h2 className="text-center text-4xl font-bold leading-relaxed text-white">
                  F.A.Q
                </h2>
                <div className="flex justify-center gap-2">
                  <Tag color="text-emerald-500">About Me</Tag>
                  <Tag color="text-rose-400">Career</Tag>
                </div>
              </div>
              <Card>
                <TerminalText text="whoami" />
                <p>
                  Hey there! I am a 20 year old developer from Brazil. I am
                  currently studying Software Engineering at the University of
                  Brasilia and I have a strong background in web development and
                  software engineering. I am highly motivated and dedicated to
                  creating <b>efficient and high-quality code</b> that is both{' '}
                  <b>functional and user-friendly</b>.
                </p>
              </Card>
            </motion.div>
            <motion.div
              className="mb-5 grid max-w-4xl place-items-center gap-5 md:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <h4 className="text-center text-2xl font-bold text-white">
                Jobs Background
              </h4>
              <div className="flex max-w-xl">
                <div className="hidden w-1 rounded-full bg-gradient-to-b from-transparent via-white to-slate-400 md:block" />
                <div className="grid place-items-center gap-5 text-white">
                  <Job>
                    <div className="grid gap-5">
                      <div>
                        <div className="mb-1 flex place-items-center gap-2">
                          <h3 className="font-bold leading-none">
                            Software Developer Intern
                          </h3>
                          <Tag color="text-[#4584b6]">Python</Tag>
                          <Tag color="text-[#f34f29]">Git</Tag>
                          <Tag color="text-[#ffca00]">Pandas</Tag>
                        </div>
                        <p className="text-xs">Ernest Manheim</p>
                        <p className="text-xs">May 2021 » Jun 2022</p>
                      </div>
                      <div>
                        Development of a product in which messages were analyzed
                        and, through analysis and natural language processing
                        (NLP), displayed graphs and dashboards of information
                        from that particular group.
                      </div>
                    </div>
                  </Job>
                  <Job>
                    <div className="grid gap-5">
                      <div>
                        <div className="mb-1 flex gap-2">
                          <h3 className="font-bold leading-none">
                            Software Engineer
                          </h3>
                          <Tag color="text-white">Linux</Tag>
                          <Tag color="text-[#f34f29]">Git</Tag>
                          <Tag color="text-[#008bb9]">PostgreSQL</Tag>
                          <Tag color="text-[#aeb2d5]">PHP</Tag>
                        </div>
                        <p className="text-xs">Tecnisys</p>
                        <p className="text-xs">Jun 2022 » Dec 2022</p>
                      </div>
                      <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Reiciendis laboriosam sit saepe eligendi, rem
                        dolore cumque ut doloremque asperiores optio eaque natus
                        quaerat adipisci modi enim? Blanditiis odit numquam
                        magni.
                      </div>
                    </div>
                  </Job>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
