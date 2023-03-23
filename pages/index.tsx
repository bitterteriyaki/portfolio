import Head from 'next/head';
import BubbleHover from '@/components/BubbleHover';
import Invite from '@/components/Invite';
import Card from '@/components/Card';
import TerminalText from '@/components/TerminalText';

function Home() {
  return (
    <>
      <Head>
        <title>kyomi - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className="grid place-items-center">
          <div className="flex h-screen flex-col items-center justify-center">
            <BubbleHover />
            <Invite />
          </div>
          <div className="grid w-5/6 max-w-6xl grid-flow-col place-items-center gap-6">
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
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
