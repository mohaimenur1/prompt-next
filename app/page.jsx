/** @format */

import Feed from '@components/Feed';

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h2 className='head_text text-center'>
        Discover & Share <br className='max-md:hidden' />{' '}
        <span className='orange_gradient'>AI-Powred Prompts</span>
      </h2>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      {/* Feed component */}
      <Feed />
    </section>
  );
}
