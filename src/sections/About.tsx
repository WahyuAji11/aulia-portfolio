import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Deva Aulia Putri Syam, and I am passionate about building strong connections and teamwork. My interest in marketing and collaboration grew during my time working at Grab, where I developed key communication and relationship skills.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I focus on enhancing my knowledge in International Relations, seeking opportunities to grow and contribute creatively by thinking outside the box.
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my experiences and insights across various platforms, engaging with professionals at all levels within companies and across disciplines.
          </p>
          <p className="about-grid-info-text">
            I am also working on developing my expertise further, aiming to create impactful collaborations in the future.
          </p>
          <p className="about-grid-info-text">
            Here are a few skills I’ve been focusing on recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Public Relations</li>
            <li className="about-grid-info-list-item">Finance</li>
            <li className="about-grid-info-list-item">Strategic Partnerships</li>
            <li className="about-grid-info-list-item">Strategic Planning</li>
            <li className="about-grid-info-list-item">Business Development</li>
            <li className="about-grid-info-list-item">Sales Management</li>
            <li className="about-grid-info-list-item">Planning</li>
            <li className="about-grid-info-list-item">Social Media Communications</li>
            <li className="about-grid-info-list-item">Microsoft Excel</li>
            <li className="about-grid-info-list-item">Negotiation</li>
            <li className="about-grid-info-list-item">Social Media Outreach</li>
            <li className="about-grid-info-list-item">Partnership Marketing</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/aulia.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
