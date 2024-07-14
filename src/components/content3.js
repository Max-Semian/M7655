import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./content3.module.css";

const Content3 = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.aHikingGuideParent}>
        <div className={styles.aHikingGuide}>A Hiking guide</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.bePreparedFor}>
        Be prepared for the Mountains and beyond!
      </div>
      <div className={styles.equipmentParent}>
        <b className={styles.equipment}>scroll down</b>
        <img
          className={styles.iconnavigationarrowDownward}
          alt=""
          src="/iconnavigationarrow-downward-24px.svg"
        />
      </div>
    </div>
  );
};

Content3.propTypes = {
  className: PropTypes.string,
};

export default Content3;
