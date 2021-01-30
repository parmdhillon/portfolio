import React from 'react';
import ImageX from './ImageX';
import Link from 'next/link';

const Project = ({ name, image, link, children }) => {
  return (
    <div className="w-full md:w-5/12 py-8">
      <div className="w-full h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl overflow-hidden">
        <ImageX url={image} />
      </div>
      <span className="block pt-6 pb-4 font-extrabold text-2xl text-gray-700">
        {name}
      </span>
      <p className="text-gray-400 w-full md:w-9/12">{children}</p>
      <Link href={link}>
        <a className="my-4 py-2 px-4 text-blue-700 bg-blue-100 rounded-xl text-center block md:inline-block font-extrabold hover:bg-blue-700 hover:text-white transition-all duration-300">
          View Project
        </a>
      </Link>
    </div>
  );
};

export default Project;
