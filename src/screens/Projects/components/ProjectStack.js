import React from 'react';

const ProjectStack = ({ img, children }) => {
  return (
    <div className="my-3 px-1 w-full overflow-hidden sm:w-1/3 flex items-center">
      <img
        src={`/img/icons/${img}`}
        className="w-6 h-6 md:w-8 md:h-8 inline-block mr-3"
      />
      <span className="text-blue-700 font-bold ">{children}</span>
    </div>
  );
};

export default ProjectStack;
