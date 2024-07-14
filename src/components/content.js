import * as React from "react";
import Content2 from "./content2";
import Content1 from "./content1";
import PropTypes from "prop-types";
import * as styles from "./content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <Content2
        sectionNumber="01"
        imageDimensions="/01@2x.png"
        ctaText="GEt Started"
        hikingLevelQuestion="What level of  hiker are you?"
        hikingLevelGuideText="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
      />
      <Content1 />
      <Content2
        sectionNumber="03"
        imageDimensions="/012@2x.png"
        ctaText="where you go is the key"
        hikingLevelQuestion={`Understand Your Map & Timing`}
        hikingLevelGuideText="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
      />
      <div className={styles.footer}>
        <div className={styles.logo}>
          <b className={styles.m}>M</b>
          <b className={styles.n}>N</b>
          <b className={styles.t}>T</b>
          <b className={styles.n1}>N</b>
        </div>
        <b
          className={styles.getOutThere}
        >{`Get out there & discover your next slope, mountain & destination!`}</b>
        <div className={styles.links}>
          <b className={styles.moreOnThe}>More on The Blog</b>
          <div className={styles.aboutMntn}>About MNTN</div>
          <div
            className={styles.contributorsWriters}
          >{`Contributors & Writers`}</div>
          <div className={styles.writeForUs}>Write For Us</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <div className={styles.links1}>
          <b className={styles.moreOnThe}>More on MNTN</b>
          <div className={styles.aboutMntn}>The Team</div>
          <div className={styles.contributorsWriters}>Jobs</div>
          <div className={styles.writeForUs}>Press</div>
        </div>
        <div
          className={styles.copyright2023Mntn}
        >{`Copyright 2023 MNTN, Inc. Terms & Privacy`}</div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
