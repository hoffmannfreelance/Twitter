import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <div className='flex'>
        <header className=''>
          <div className='w-full'>
          <img alt="Twitter" src="twitter.svg" width="25" />
          </div>
          <div className='w-full'>
          <img alt="Search" src="search.svg" width="25" />
          </div>
        </header>
        <div className='flex-1'>
        <input
            type="search"
            name="search"
            placeholder="Search Twitter"
            className="bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow border-0 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
      </div>
    </>
  )
}
