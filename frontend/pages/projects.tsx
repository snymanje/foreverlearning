import Head from 'next/head';
import { FormEvent } from 'react';
import Header from '../components/Header';

const projects: React.FunctionComponent = () => {
  const addProjects = (e: FormEvent) => {
    e.preventDefault();
    console.log('Add project');
  };
  return (
    <div>
      <Head>
        <title>Forever Learning - Projects</title>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 mt-8">
            <div className="flex flex-col items-center justify-center text-gray-700">
              <h2 className="font-bold text-2xl">Add Projects</h2>
              <div className="flex flex-col flex-wrap mt-6 mx-4">
                <form onSubmit={(e) => addProjects(e)} className="flex flex-col w-48 md:w-96">
                  <div className="flex flex-col mt-5">
                    <label htmlFor="title" className="text-lg text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex flex-col my-3">
                    <label htmlFor="description" className="text-lg text-gray-700">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex flex-col my-3">
                    <label htmlFor="channel" className="text-lg text-gray-700">
                      Channel
                    </label>
                    <select
                      name="channel"
                      id="channel"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="youtube">YouTube</option>
                      <option value="udemy">Udemy</option>
                    </select>
                  </div>
                  <div className="flex flex-col my-3">
                    <label htmlFor="instructor" className="text-lg text-gray-700">
                      Instructor
                    </label>
                    <input
                      type="text"
                      name="instructor"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex flex-col my-3">
                    <label htmlFor="duration" className="text-lg text-gray-700">
                      Duration in hours
                    </label>
                    <input
                      type="text"
                      name="duration"
                      className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="Save"
                      className="w-full shadow appearance-none border rounded py-2 px-3 bg-yellow-800 hover:bg-yellow-700 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start text-gray-700">
              <h2 className="font-bold text-2xl mt-6 lg:mt-0">Projects</h2>
              <div className="flex flex-col flex-wrap mt-6 mx-4">
                <div className="max-w-2xl border border-solid border-gray-200 shadow-md mb-3">
                  <div className="flex justify-between p-4 hover:shadow-lg transition ease-linear">
                    <div>
                      <h3 className="font-bold text-lg">Build Reddit clone</h3>
                      <p className="text-md text-yellow-700 font-medium">
                        Build with Nextjs, tailwindcss, TypeOrm and Node
                      </p>
                      <p className="mt-4 text-sm">
                        Channel: <span className=" font-medium">Youtube</span>
                      </p>
                      <p className="mt-1 text-sm">
                        Author: <span className=" font-medium">Jean Snyman</span>
                      </p>
                      <p className="mt-1 text-sm">
                        Length: <span className=" font-medium">3 hours</span>
                      </p>
                    </div>
                    <div className="self-end min-w-max">
                      <i className="fas fa-edit text-xl cursor-pointer" style={{ color: 'red' }}></i>
                      <i className="fas fa-trash text-xl ml-6 cursor-pointer" style={{ color: 'red' }}></i>
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl border border-solid border-gray-200 shadow-md hover:shadow-lg transition ease-linear duration-200 cursor-pointer">
                  <div className="flex justify-between p-4 hover:shadow-lg transition ease-linear">
                    <div>
                      <h3 className="font-bold text-lg">Microservices with Node JS and React</h3>
                      <p className="text-md text-yellow-700 font-medium">
                        Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker
                        and Kubernetes
                      </p>
                      <p className="mt-4 text-sm">
                        Channel: <span className=" font-medium">Youtube</span>
                      </p>
                      <p className="mt-1 text-sm">
                        Author: <span className=" font-medium">Jean Snyman</span>
                      </p>
                      <p className="mt-1 text-sm">
                        Length: <span className=" font-medium">3 hours</span>
                      </p>
                    </div>
                    <div className="self-end min-w-max">
                      <i className="fas fa-edit text-xl cursor-pointer" style={{ color: 'red' }}></i>
                      <i className="fas fa-trash text-xl ml-6 cursor-pointer" style={{ color: 'red' }}></i>
                    </div>
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

export default projects;
