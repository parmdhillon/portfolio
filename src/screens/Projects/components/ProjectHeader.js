import React from 'react';
import Logo from '../../../components/Logo';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const ProjectHeader = () => {
  return (
    <>
      <Logo />
      <div className="w-full h-24 flex justify-end items-center px-5 md:px-10">
        <Link href="/">
          <a className="py-2 px-6 bg-blue-100 rounded-lg text-blue-700 font-bold hover:bg-blue-700 hover:text-white">
            <FaArrowLeft className="inline-block -mt-1 mr-1" /> Back
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProjectHeader;
