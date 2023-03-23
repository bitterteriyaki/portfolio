import Head from 'next/head';
import Hero from '../components/Hero';
import Info from '../components/Info';

export default function Home() {
  return (
    <>
      <Head>
        <title>kyomi - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section>
          <Hero />
          <Info />
        </section>
      </main>
    </>
  );
}
