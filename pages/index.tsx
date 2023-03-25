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

import dynamic from 'next/dynamic';
import Head from 'next/head';

import Hero from '@/components/groups/Hero';

// Since the FAQ component can take a while to load, we use dynamic import
// to load it only when the user is on the home page.
const DynamicFAQ = dynamic(() => import('@/components/groups/FAQ'), {
  loading: () => (
    <div className="mb-5 grid place-items-center gap-5">
      <div className="h-56 w-full max-w-lg animate-pulse rounded-lg bg-zinc-800" />
      <div className="h-56 w-full max-w-lg animate-pulse rounded-lg bg-zinc-800" />
    </div>
  ),
  ssr: false,
});

function Home() {
  return (
    <>
      <Head>
        <title>kyomi | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex justify-center">
        <div className="grid w-11/12 max-w-7xl gap-1 md:w-5/6">
          <Hero />
          <DynamicFAQ />
        </div>
      </main>
    </>
  );
}

export default Home;
