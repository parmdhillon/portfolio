import React from 'react';
import Skill from '../components/Skill';

const SkillScreen = () => {
  return (
    <>
      <div className="my-20">
        <div className="w-full h-56 bg-blue-700 text-center py-8">
          <span className="block text-white text-3xl font-bold">my skills</span>
          <span className="block text-white py-2">
            clean design & code, that what I love to do.
          </span>
        </div>
        <div className="relative -mt-24 w-11/12 md:w-4/5 max-w-7xl rounded-2xl bg-white shadow-2xl border border-gray-200 skillset">
          <div class="w-full flex flex-wrap m-auto py-4 px-2">
            <Skill img="js.svg">JavaScript</Skill>
            <Skill img="react.png">React</Skill>
            <Skill img="html.png">HTML</Skill>
            <Skill img="css.png">CSS</Skill>
            <Skill img="redux.png">Redux</Skill>
            <Skill img="nodejs.png">Node/Express</Skill>
            <Skill img="next.png">NextJS</Skill>
            <Skill img="php.png">PHP</Skill>
            <Skill img="db.png">MySQL/Mongo</Skill>
            <Skill img="api.png">REST</Skill>
            <Skill img="xd.png">Adobe Xd</Skill>
            <Skill img="git.png">Git</Skill>
          </div>
        </div>
        <style jsx>{`
          .skillset {
            left: 50%;
            transform: translateX(-50%);
          }
        `}</style>
      </div>
    </>
  );
};

export default SkillScreen;
