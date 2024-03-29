import React from "react";

const PlainButton = ({ dest, content }) => {
  const iconPath = process.env.PUBLIC_URL;
  return (
    <div className="plain-button inline-flex mt-4">
      {/* <motion.div
        // className="hovered2"
        animate={controls}
        initial={{ y: 0 }}
        exit={{ y: 0 }}
      > */}
      <div className="flex align-middle justify-center items-center">
        <div>
          <a href={dest} target="_blank" className="text-white opacity-100" rel="noreferrer">
            {content}
          </a>
        </div>
        <img className="ml-1" src={iconPath + "/arrow-right.svg"} alt=""/>
      </div>

      {/* </motion.div> */}
    </div>
  );
};

export default PlainButton;
