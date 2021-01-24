import React from 'react';

const AboutScreen = () => {
  return (
    <div className="flex p-5 lg:px-10 items-start m-auto w-auto md:w-4/5 max-w-8xl justify-start md:items-center md:justify-center flex-col md:flex-row">
      <div className="md:mr-24 xl:mr-36">
        <img
          src="/img/memoji_parm.png"
          alt="Parminder Singh's Memoji"
          className="w-1/2 md:w-48 md:h-48"
        />
      </div>
      <div className="flex-1 max-w-2xl text-xl text-gray-700 pt-10 md:pt-0">
        <p className="p">
          I'm <b>Parminder Singh</b>, 25 year-old passionate developer, who
          loves to bring ideas to life with design & code.
        </p>
        <p className="pt-4">
          I have gained various skills in the past 6 years from college and on
          my own, that allows me to build and design beautiful and highly
          responsive websites. I'm naturally curious and perpetually working on
          polishing my skillset.
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
