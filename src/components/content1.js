import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <img className={styles.icon} alt="" src="/011@2x.png" />
      <b className={styles.equipment}>02</b>
      <div className={styles.content1}>
        <div className={styles.tagline}>
          <div className={styles.hikingEssentials}>Hiking Essentials</div>
          <div className={styles.line} />
        </div>
        <div className={styles.pickingTheRight}>
          Picking the right Hiking Gear!
        </div>
        <b className={styles.theNiceThingContainer}>
          <p className={styles.theNiceThing}>
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have.
          </p>
          <p className={styles.theNiceThing}>
            Let’s start with clothing. A typical mistake hiking beginners make
            is wearing jeans and regular clothes, which will get heavy and chafe
            wif they get sweaty or wet.
          </p>
        </b>
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

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
