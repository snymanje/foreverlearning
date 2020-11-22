import Head from 'next/head';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="bg-blue-900 text-white">Hello Next</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
