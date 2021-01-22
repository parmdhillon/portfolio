import React from 'react';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden py-5 px-5 lg:px-10 flex justify-start items-start md:items-center">
      <div className="z-10 absolute bg-blue-700 rounded-2xl p-3 text-white font-extrabold text-3xl top-5 left-5 lg:left-10">
        ps.
      </div>

      <main className="my-4">
        <div className={styles.fix}></div>
        <div className="text-4xl sm:text-5xl text-gray-600">
          <span className="block my-2">hi there,</span>
          <span className="block my-2">
            I'm <span className="text-blue-700 font-bold">Parminder</span>.
          </span>
          <div className="my-2 text-xl md:text-2xl text-gray-400">
            <span className="inline-block w-12 h-2 bg-blue-700 rounded-full align-middle mr-1"></span>{' '}
            Front End Developer
          </div>
        </div>
        <div className="flex justify-start items-center mt-10">
          <a href="#" className="py-2 px-4 bg-blue-700 font-bold border-2 border-blue-700 box-border  text-white rounded-xl hover:bg-blue-500">projects</a>
          <a href="#" className="py-2 px-4 text-blue-700 font-bold border-2 border-blue-700 box-border rounded-xl ml-4 hover:bg-blue-700 hover:text-white">resume</a>
        </div>
      </main>

      <div className={styles.circle}>
        <div className={styles.parm}>
          <img src="/img/Parm.png" alt="Parminder Singh" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
