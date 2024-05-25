import React from 'react';
import './Header.scss';
import { easeInOut, motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';

const scaleVarients = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: easeInOut
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100,0], opacity:[0,1]}}
        transition={{duration : 1}}
        className="app__header-info">
          <div className="app__header-badge">
            <div className="batch-cmp app__flex">
              <span>👋</span>
              <div style={{marginLeft:20}}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Shajith Mon</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">.NET Developer</p>
            </div>
          </div>
      </motion.div>

      <motion.div
        whileInView={{x: [-100,0]}}
        transition={{duration : 2, delayChildren:1}}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration : 1, ease: 'easeInOut'}}
            className="overlay_circle"
            src={images.circle}
            alt="profile_circle" />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles">
        {[images.angular, images.net,images.sqlserver].map((circle, index) =>(
          <div className="circle-cmp app__flex" 
          key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header,'home');
