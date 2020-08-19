import React from 'react';
import { HEADING_OPTIONS, Heading } from '../shared/Heading';
import useMedia from '../../helper/useMedia';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const cardVaruants = {
  scale: {
    opacity: 0,
    scale: 0.2
  },
  unScale: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring'
    }
  }
};

const ProjectCard = ({ data }) => {
  if (data) {
    const {
      project_overview: { summary },
      project_name,
      nav_to_project_page_text,
      project_slug
    } = data;
    const [crdRef, cardInView] = useInView({
      threshold: 0.3,
      triggerOnce: true
    });
    const isMobile = useMedia(['(min-width: 1025px)'], [false], true);
    return (
      <motion.div
        ref={crdRef}
        variants={cardVaruants}
        initial={isMobile ? 'scale' : ''}
        animate={isMobile && cardInView ? 'unScale' : ''}
        className="project-card bg-c1200 p-8"
      >
        <div className="flex items-center justify-center">
          <Heading
            type={HEADING_OPTIONS.TYPE.CARD_SMALL}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
            textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
            className="inline-block card-heading w-1/2"
          >
            {project_name}
          </Heading>
          <div className="inline-block text-right w-1/2 mb-6">
            <Link
              href="/projects/[slug]"
              as={`/projects/${project_slug}`}
              passHref
            >
              <a className="font-bold inline-block">
                {nav_to_project_page_text}
                <img
                  className="inline-block ml-2 w-4"
                  src="/static/images/right-arrow.svg"
                ></img>
              </a>
            </Link>
          </div>
        </div>
        <p className="description my-4 text-xs text-c700">{summary}</p>
      </motion.div>
    );
  }
};

export default ProjectCard;
