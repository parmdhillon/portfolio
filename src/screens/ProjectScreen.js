import React from 'react';
import Project from '../components/Project';

const ProjectScreen = () => {
  return (
    <div className="px-5 md:px-8 w-full max-w-7xl m-auto">
      <span className="block text-center text-2xl font-extrabold text-blue-700">
        my recent work
      </span>
      <div className="flex w-full flex-col md:flex-row justify-between py-6">
        <Project
          name="MyStall Grocery Store"
          image="/img/projects/mystall.png"
          link="mystall"
        >
          An online grocery store application built with MERN Stack and Redux
          for a grocery store
        </Project>
        <Project
          name="Shortly"
          image="/img/projects/shortly.png"
          link="mystall"
        >
          A URL Shortening service, based on third party API, built with
          vanillaJS.
        </Project>
      </div>
    </div>
  );
};

export default ProjectScreen;
