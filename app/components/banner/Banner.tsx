import React from "react";
import styles from "./banner.module.css";


function Banner() {
  return (
    <div className={styles.banner}>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-[64px] text-white">Feel in Italy with our restaurant</h2>
        <p className="text-lg text-white">You can feel happy with us</p>
      </div>
    </div>
  );
}

export default Banner;
