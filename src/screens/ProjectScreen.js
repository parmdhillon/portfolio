import React from 'react';
import Project from '../components/Project';
const ProjectScreen = () => {
  return (
    <section id="projects" className="px-5 md:px-8 w-full max-w-7xl m-auto">
      <span className="block text-center text-2xl font-extrabold text-blue-700">
        my recent work
      </span>
      <div className="flex w-full flex-col md:flex-row justify-between py-6">
        <Project
          name="MyStall Grocery Store"
          image="/img/projects/mystall.png"
          link="/project/mystall"
        >
          An online grocery store application built with MERN Stack and Redux
          for a grocery store
        </Project>
        <Project
          name="Kirat Tour & Travels"
          image="/img/projects/kiratTours.png"
          link="/project/kirattours"
        >
          Website of a Cab service in India, based on Serverless Functions and
          NextJS
        </Project>
      </div>
    </section>
  );
};

export default ProjectScreen;
