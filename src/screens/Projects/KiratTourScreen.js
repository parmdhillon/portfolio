import React from 'react';
import Head from 'next/head';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import ProjectHeader from './components/ProjectHeader';
import ProjectStack from './components/ProjectStack';

const KiratTourScreen = () => {
  return (
    <>
      <Head>
        <title>Kirat Tour & Travels - Parminder Singh</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="w-full px-5 md:px-10  flex justify-center flex-col max-w-7xl m-auto relative">
        <ProjectHeader />

        <div className="py-7">
          <h1 className="text-blue-700 font-extrabold text-3xl my-7 slideup">
            Kirat Tour & Travels
          </h1>
          <p className="w-full my-7 lg:w-9/12 text-gray-600 font-medium leading-7 tracking-wide">
            It is a cab service website, where user can book there rides and
            check various tour packages. I have designed this website totally
            from scratch and developed with NextJS and to reduce the production cost of
            backend, I have used Serverless Functions. It is a fully resposinve
            website, mainly focused for mobile devices. Here, NextJS helps in
            server-side rendering for better SEO and page speed optimizations.
          </p>
          <div className="my-7 w-full lg:w-1/2 rounded-2xl">
            <div className="font-bold text-lg text-gray-600">STACK</div>
            <div className="w-full flex flex-wrap">
              <ProjectStack img="react.png">React</ProjectStack>
              <ProjectStack img="next.png">NextJS</ProjectStack>
              <ProjectStack img="css.png">Tailwind CSS</ProjectStack>
            </div>
            <div className="font-bold text-lg text-gray-600 py-2">LIVE</div>
            <div className="py-2">
              <a
                href="https://kirattours.com/"
                target="_blank"
                className="bg-blue-700 py-2 px-4 font-bold text-white rounded-lg transform hover:scale-105 duration-300 inline-block hover:bg-blue-600"
              >
                View Live
                <FaExternalLinkSquareAlt className="inline-block -mt-1 ml-2" />
              </a>
            </div>
          </div>
          <div className="my-10 w-full flex justify-center py-7 px-3 bg-blue-100 rounded-2xl max-w-7xl">
            <picture className="flex justify-center">
              <source
                srcSet="/img/projects/kirattours/kiratTours_full.webp"
                type="image/webp"
              />
              <source
                srcSet="/img/projects/kirattours/kiratTours_full.png"
                type="image/png"
              />
              <img src="/img/projects/kirattours/kiratTours_full.png" className="w-full md:w-9/12" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiratTourScreen;
