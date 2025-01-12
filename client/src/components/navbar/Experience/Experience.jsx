import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../../utils";

export const Experience = () => {
  const profileUrl = "https://www.youtube.com/@thephumlanidubeshow";

  const handleVideoClick = () => {
    window.open(profileUrl, "_blank");
  };

  return (
    <section className={styles.container} id="experience">
      {/* Headings */}
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>Funda kabanzi ngoPhumlani Dube</h2>
        <h2 className={styles.title2}>Who is Phumlani Dube?</h2>
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <img
          className={styles.image}
          src={getImageUrl("projects/backdroppd.jpg")}
          alt="Backdrop"
        />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Image */}
        <img
          className={styles.imageLeft}
          src={getImageUrl("projects/pd.jpeg")}
          alt="Phumlani Dube"
        />

        {/* Description */}
        <div className={styles.description}>
        <p className={styles.descriptionText}>
  Phumlani Dube, a media personality and health advocate, is dedicated to uplifting marginalized communities through health and wellness initiatives. Turning personal challenges into a mission, he inspires others to prioritize well-being and live healthier lives.
</p>
<p className={styles.descriptionText}>
  As the founder of the Phumlani Dube Foundation, he addresses health challenges in underserved communities, promoting active lifestyles, mental health awareness, and holistic wellness, with a special focus on senior citizens.
</p>
<p className={styles.descriptionText}>
  The foundation has impacted countless lives through outreach campaigns, fitness workshops, and collaborations with local health practitioners, fostering hope and community where it’s most needed.
</p>
<p className={styles.descriptionText}>
  Phumlani invites support to expand his mission. By volunteering, partnering, or donating, you can help build healthier, empowered communities. Join him in making a difference today.
</p>



          
        </div>
      </div>

      

      {/* Video Section */}
      <div className={styles.videoContainer} onClick={handleVideoClick}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/_9jqFfxEKEU?autoplay=1&mute=1&loop=1&playlist=_9jqFfxEKEU"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className={styles.videoOverlayText}>Watch on YouTube</p>
      </div>
    </section>
  );
};

export default Experience;
