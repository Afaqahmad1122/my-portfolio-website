import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id='history'>
      <div className='items-container'>
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date='2023 - March'
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Frontend Developer Intern
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              BingTech Solution
            </h4>
            <p>Frontend Developer</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2023 - august'
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Frontend Enginneer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              IbraNext Technology
            </h4>
            <p>Frontend Development, Backend Development, User Experience</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2024 - present'
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Full Stack Developer Trainer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>WQ Softwares</h4>
            <p>Full-stack Development, API Development, User Experience</p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2020 - 2020'
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Data Analyst Intern
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Tokyo, Japan</h4>
            <p>Automation, Data Governance, Statistical Analysis</p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
