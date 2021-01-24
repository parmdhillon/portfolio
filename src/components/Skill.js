import React from 'react';

const Skill = ({ img, children }) => {
  return (
    <div class="text-xs sm:text-base my-4 px-1 sm:px-3 w-1/2 overflow-hidden md:w-1/3 lg:w-1/4 flex items-center">
      <div className="flex w-2/4 justify-end">
        <img src={`/img/icons/${img}`} className="w-8 h-8 inline-block mr-3" />
      </div>
      <span className="text-blue-700 font-bold ">{children}</span>
    </div>
  );
};

export default Skill;
