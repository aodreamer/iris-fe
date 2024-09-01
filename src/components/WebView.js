import React from "react";

const WebView = ({ url }) => {
  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center">SENTIMENT PROPORTION & PERCEPTION RADAR</div>
      <div className="row-span-7 rounded-lg p-2">
        <div className="mx-auto h-full w-full">
          <iframe src={url} title="Web View" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default WebView;
