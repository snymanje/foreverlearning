import Head from 'next/head';
import Header from '../components/Header';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Forever Learning - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="">
        <Header />
        <main className="">
          <div className="grid grid-cols-2 grid-rows-1 mt-8">
            <div className="flex flex-col items-center justify-center text-gray-700">
              <h2 className="font-bold text-2xl">Tutorials</h2>
              <div className="flex flex-col flex-wrap mt-6 mx-4">
                <button className="bg-yellow-600 text-gray-100 font-bold p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-yellow-900">
                  Add Tutorial
                </button>
                <div className="max-w-2xl border border-solid border-gray-200 shadow-md mb-3">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Build Reddit clone</h3>
                    <p className="text-md text-yellow-600 font-medium">
                      Build with Nextjs, tailwindcss, TypeOrm and Node
                    </p>
                    <p className="mt-4 text-sm">
                      Channel: <span className="text-yellow-600 font-medium">Youtube</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Author: <span className="text-yellow-600 font-medium">Jean Snyman</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Length: <span className="text-yellow-600 font-medium">3 hours</span>
                    </p>
                    <i className="fas fa-edit mt-3 cursor-pointer" style={{ color: 'red' }}></i>
                    <i className="fas fa-trash mt-3 ml-4 cursor-pointer" style={{ color: 'red' }}></i>
                  </div>
                </div>

                <div className="max-w-2xl border border-solid border-gray-200 shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Microservices with Node JS and React</h3>
                    <p className="text-md text-yellow-600 font-medium">
                      Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and
                      Kubernetes
                    </p>
                    <p className="mt-4 text-sm">
                      Channel: <span className="text-yellow-600 font-medium">Udemy</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Author: <span className="text-yellow-600 font-medium">Jean Snyman</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Length: <span className="text-yellow-600 font-medium">3 hours</span>
                    </p>
                    <i className="fas fa-edit mt-3 cursor-pointer" style={{ color: 'red' }}></i>
                    <i className="fas fa-trash mt-3 ml-4 cursor-pointer" style={{ color: 'red' }}></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-700">
              <h2 className="font-bold text-2xl">Projects</h2>
              <div className="flex flex-col flex-wrap mt-6 mx-4">
                <button className="bg-yellow-600 text-gray-100 font-bold p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-yellow-900">
                  Add Project
                </button>
                <div className="max-w-2xl border border-solid border-gray-200 shadow-md mb-3">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Build Reddit clone</h3>
                    <p className="text-md text-yellow-600 font-medium">
                      Build with Nextjs, tailwindcss, TypeOrm and Node
                    </p>
                    <p className="mt-4 text-sm">
                      Channel: <span className="text-yellow-600 font-medium">Youtube</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Author: <span className="text-yellow-600 font-medium">Jean Snyman</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Length: <span className="text-yellow-600 font-medium">3 hours</span>
                    </p>
                    <i className="fas fa-edit mt-3 cursor-pointer" style={{ color: 'red' }}></i>
                    <i className="fas fa-trash mt-3 ml-4 cursor-pointer" style={{ color: 'red' }}></i>
                  </div>
                </div>

                <div className="max-w-2xl border border-solid border-gray-200 shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Microservices with Node JS and React</h3>
                    <p className="text-md text-yellow-600 font-medium">
                      Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and
                      Kubernetes
                    </p>
                    <p className="mt-4 text-sm">
                      Channel: <span className="text-yellow-600 font-medium">Udemy</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Author: <span className="text-yellow-600 font-medium">Jean Snyman</span>
                    </p>
                    <p className="mt-1 text-sm">
                      Length: <span className="text-yellow-600 font-medium">3 hours</span>
                    </p>
                    <i className="fas fa-edit mt-3 cursor-pointer" style={{ color: 'red' }}></i>
                    <i className="fas fa-trash mt-3 ml-4 cursor-pointer" style={{ color: 'red' }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer></footer>
      </div>
    </div>
  );
};

export default Home;
