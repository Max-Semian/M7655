import * as React from "react";
import Content3 from "../components/content3";
import Content from "../components/content";
import * as styles from "./index.module.css";

const MNTN = () => {
  return (
    <div className={styles.mntn}>
      <img className={styles.hgIcon} alt="" src="/hg@2x.png" />
      <div className={styles.bgHero} />
      <Content3 />
      <img className={styles.mgIcon} alt="" src="/mg@2x.png" />
      <img className={styles.vgIcon} alt="" src="/vg@2x.png" />
      <div className={styles.bgContent} />
      <div className={styles.social}>
        <b className={styles.followUs}>Follow us</b>
        <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
        <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      </div>
      <div className={styles.slider}>
        <div className={styles.slider1}>
          <div className={styles.sliderBg} />
          <div className={styles.sliderIndicator} />
        </div>
        <div className={styles.text}>
          <div className={styles.startParent}>
            <b className={styles.start}>Start</b>
            <b className={styles.start}>01</b>
            <b className={styles.start}>02</b>
            <b className={styles.start}>03</b>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <b className={styles.blog}>Blog</b>
        <b className={styles.aboutUs}>About us</b>
        <b className={styles.equipment}>Equipment</b>
        <div className={styles.account}>
          <b className={styles.account1}>Account</b>
          <img
            className={styles.iconsGeneralCart}
            alt=""
            src="/icons-general--cart@2x.png"
          />
        </div>
        <div className={styles.logo}>
          <b className={styles.m}>M</b>
          <b className={styles.n}>N</b>
          <b className={styles.t}>T</b>
          <b className={styles.n1}>N</b>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default MNTN;
