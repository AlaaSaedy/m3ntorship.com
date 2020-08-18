import React from 'react';
import ProjectCard from '../ProjectCard';
import { GradientText, Heading, HEADING_OPTIONS } from '../shared/Heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMedia from '../../helper/useMedia';

const projectsSectionVariants = {
  start: {
    opacity: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  end: {
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.3
    }
  }
};

const projectsCardVariants = {
  start: {
    scale: 0
  },
  end: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

const RealProjects = ({ projectsInfoData, projectsData }) => {
  const isDesktop = useMedia(['(max-width: 1025px)'], [false], true);
  const [ref, inView] = useInView({
    threshold: isDesktop ? 0.1 : 0.05
  });

  if (projectsInfoData && projectsData) {
    const {projects_brief: {title, sub_title, image:{url}}} = projectsInfoData
    return (
      <section className="real-projects" ref={ref}>
        <motion.div
          variants={projectsSectionVariants}
          initial="start"
          animate={inView ? 'end' : ''}
          className="container"
        >
          <div>
            <Heading
              type={HEADING_OPTIONS.TYPE.SECTION}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            >
              <GradientText text={title} />
            </Heading>
            <p className="text-center mx-auto text-base text-c600 md:w-2/3">
             {sub_title}
            </p>
          </div>
          <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map(project => {
              return (
                <motion.div variants={isDesktop ? projectsCardVariants : ''}>
                  <ProjectCard data={project} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    );
  } else {
    return "Genaric error"
  }
};

export default RealProjects;
