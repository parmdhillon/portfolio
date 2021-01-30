import React from 'react';
import Logo from '../../components/Logo';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {
  return (
    <div className="m-auto w-full h-screen relative overflow-hidden py-5 px-5 lg:px-10 flex justify-start items-start md:items-center">
      <Logo />

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
        <div className="mt-10">
          <a
            href="#"
            className="py-4 px-8 bg-blue-700 font-bold text-white rounded-2xl hover:bg-blue-500 transform hover:scale-105 duration-300 inline-block"
          >
            view my work
          </a>
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
