import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "AIESEC",
      role: "Partnership Relation Team - Business Development",
      url: "https://www.aiesec.org",
      start: "February 2020",
      end: "January 2021",
      shortDescription: [
        "Organized strategic partnerships and managed external relations for various projects.",
        "Served as Organizing Committee Vice President Finance for the Impact Circle Project at UNEJ.",
        "Secured over 15 partners, including media, learning, and financial partners, achieving an in-kind voucher worth ten million rupiah.",
        "Managed project finances, including budget planning, audits, and legal documentation.",
        "Contributed to the Better Day Project by managing agendas and coordinating with 12 professional speakers.",
        "Served as liaison officer and coordinated delegates for the International Youth Conference attended by participants from Egypt, Portugal, China, and Indonesia.",
      ],
    },
    {
      name: "Pateron Indonesia",
      role: "Partnership Program Intern",
      url: "https://www.pateron.id",
      start: "February 2021",
      end: "April 2021",
      shortDescription: [
        "Developed data and conducted market research on 100+ clients to continuously explore new partnership opportunities.",
        "Supported business meetings, including offering, approaching, negotiations, and pitching with business clients.",
        "Drafted legality letters and memoranda of agreement for each partner, including profit-sharing systems.",
        "Served as the person in charge of client relations and managed partnerships effectively.",
      ],
    },

    {
      name: "Social Connect",
      role: "Lead of Partnership Associate",
      url: "https://www.socialconnect.id",
      start: "February 2021",
      end: "July 2021",
      shortDescription: [
        "Led partnership initiatives to support the community platform focused on mental well-being.",
        "Conducted market research and engaged with over 100 potential partners.",
        "Arranged contract documents and successfully established collaborations for webinars, workshops, and Instagram Live events.",
        "Facilitated partnerships with 10+ communities for an online social campaign addressing mental health issues.",
      ],
    },
    {
      name: "Social Connect",
      role: "Public Relations Associate",
      url: "https://www.socialconnect.id",
      start: "August 2020",
      end: "January 2021",
      shortDescription: [
        "Conducted market research and approached over 100 potential partners.",
        "Drafted and managed contract documents with partner organizations.",
        "Organized successful collaborations for webinars, workshops, and live social media events.",
        "Persuaded and secured participation from 10+ communities for a mental health awareness campaign.",
        "Coordinated internal events, inviting professional speakers to enhance community engagement.",
      ],
    },

    {
      name: "Aksel",
      role: "Community Engagement Intern",
      url: "https://aksel.co.id/",
      start: "July 2021",
      end: "September 2021",
      shortDescription: [
        "Engaged with community members to foster meaningful interactions and improve platform engagement.",
        "Supported initiatives to build and maintain positive relationships with key stakeholders.",
        "Organized events and activities to strengthen community involvement and participation.",
      ],
    },

    {
      name: "Grab",
      role: "Partner Benefits and Strategical Intern",
      url: "https://www.grab.com/id",
      start: "January 2022",
      end: "March 2022",
      shortDescription: [
        "Supported the Partner Benefits and Strategic team in managing partner relationships and identifying strategic opportunities.",
        "Assisted in the development of partnership strategies to enhance business operations and partner satisfaction.",
        "Coordinated efforts with cross-functional teams to drive partner success and implement key initiatives.",
      ],
    },

    {
      name: "Grab",
      role: "Commercial, Project Operations and Strategy - GCAP Intern",
      url: "https://www.grab.com/id",
      start: "August 2021",
      end: "January 2022",
      shortDescription: [
        "Worked within the Commercial and Project Operations team to optimize project processes and strategies.",
        "Assisted in planning and executing key operational strategies that aligned with the company’s business goals.",
        "Collaborated with various teams to ensure smooth project execution and achieve operational targets.",
      ],
    },

    {
      name: "Indonesian Embassy Ankara",
      role: "Cultural and Social Affairs Intern",
      url: "https://kemlu.go.id/ankara/en",
      start: "March 2022",
      end: "May 2022",
      shortDescription: [
        "Assisted in organizing and managing cultural and social events that promote Indonesia's culture in Turkey.",
        "Coordinated activities and communication with local institutions, government agencies, and Indonesian communities.",
        "Contributed to social media strategies to enhance the embassy's visibility and engagement with local communities.",
      ],
    },



  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
