import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./content2.module.css";

const Content2 = ({
  className = "",
  sectionNumber,
  imageDimensions,
  ctaText,
  hikingLevelQuestion,
  hikingLevelGuideText,
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <b className={styles.equipment}>{sectionNumber}</b>
      <img className={styles.icon} alt="" src={imageDimensions} />
      <div className={styles.content1}>
        <div className={styles.tagline}>
          <div className={styles.getStarted}>{ctaText}</div>
          <div className={styles.line} />
        </div>
        <div className={styles.whatLevelOf}>{hikingLevelQuestion}</div>
        <b className={styles.determiningWhatLevel}>{hikingLevelGuideText}</b>
        <div className={styles.more}>
          <b className={styles.equipment1}>read more</b>
          <img
            className={styles.iconnavigationarrowDownward}
            alt=""
            src="/iconnavigationarrow-downward-24px1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
  sectionNumber: PropTypes.string,
  imageDimensions: PropTypes.string,
  ctaText: PropTypes.string,
  hikingLevelQuestion: PropTypes.string,
  hikingLevelGuideText: PropTypes.string,
};

export default Content2;
