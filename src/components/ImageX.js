import React from 'react';
import { LazyImage } from 'react-lazy-images';

const ImageX = ({ url }) => {
  return (
    <>
      <LazyImage
        src={url}
        alt="MyStall Online Grocery App"
        className="object-cover w-full h-full"
        actual={({ imageProps }) => <img {...imageProps} />}
        placeholder={({ ref }) => (
          <div className="w-full h-full bg-gray-600 gradient" ref={ref} />
        )}
        debounceDurationMs="2000"
        error={() => (
          <div className="bg-light-red h-100 w-100">
            <p>There was an error fetching this image :(</p>
          </div>
        )}
      />
      <style jsx>{`
        .gradient {
          animation-duration: 1.8s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: #d9d9d9;
          background: linear-gradient(
            to right,
            #fafafa 8%,
            #d9d9d9 38%,
            #fafafa 54%
          );
          background-size: 1000px 640px;

          position: relative;
        }

        @keyframes placeHolderShimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }
      `}</style>
    </>
  );
};

export default ImageX;
