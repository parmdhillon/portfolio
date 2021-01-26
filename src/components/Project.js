import React from 'react';
import ImageX from './ImageX';

const Project = ({ name, image, link, children }) => {
  return (
    <div className="w-full md:w-5/12 py-8">
      <div className="w-full h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl overflow-hidden">
        <ImageX url={image} />
      </div>
      <span className="block pt-6 pb-4 font-extrabold text-2xl">{name}</span>
      <p className="text-gray-400 w-full md:w-9/12">{children}</p>
      <a href="#" className="py-4 text-blue-700 underline block font-bold">
        View Project
      </a>
    </div>
  );
};

export default Project;
