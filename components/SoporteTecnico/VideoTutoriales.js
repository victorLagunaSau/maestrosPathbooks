import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";

const videoTutorialesData = [
  {
    title: "Guía de maestros",
    src: "https://www.youtube.com/watch?v=F7rR-4Khwks",
    type: "youtube",
  },
  {
    title: "Capacitación 1",
    src: "https://www.youtube.com/watch?v=F7rR-4Khwks",
    type: "youtube",
  },
  {
    title: "Capacitación 2",
    src: "https://www.youtube.com/watch?v=jOZSzpqiyy0",
    type: "youtube",
  },
];

const VideoTutoriales = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const renderVideo = (video) => {
    if (video.type === "youtube") {
      const videoId = video.src.split("v=")[1];
      const embedSrc = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          width="600"
          height="400"
          src={embedSrc}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else if (video.type === "local") {
      return (
        <video controls className="w-full" style={{ width: "600px", height: "400px" }}>
          <source src={video.src} type="video/mp4" />
          Tu navegador no soporta la reproducción de este video.
        </video>
      );
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full" id="videotutoriales">
      <div className="flex flex-col w-full my-0 mt-10 py-4">
        <ScrollAnimationWrapper>
          <motion.h2
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center"
          >
            Videotutoriales para maestros
          </motion.h2>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex justify-center w-full my-0 mt-10 py-4 lg:px-20">
          <motion.div className="join join-vertical" variants={scrollAnimation}>
            {videoTutorialesData.map((video, index) => (
              <div key={index} className="">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center mt-10">
                  {video.title}
                </div>
                <div className="text-xl flex justify-center">
                  {renderVideo(video)}
                </div>
              </div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default VideoTutoriales;
