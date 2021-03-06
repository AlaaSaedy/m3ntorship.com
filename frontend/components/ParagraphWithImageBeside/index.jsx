import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../helper/useMobileAnimation';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

export const ParagraphWithImageBeside = ({ data, settings }) => {
  const componentId = 'par_with_img_side';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  if (data) {
    const { title, description, image } = data;
    const [ref, inView] = useInView({
      threshold: 0.5,
      triggerOnce: true
    });
    return (
      <div className="flex justify-between items-center" ref={ref}>
        <motion.div
          className="w-full md:w-8/12"
          initial={animateOnMobile && { x: -500, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : ''}
          transition={{ type: 'spring' }}
        >
          {title && <p className="text-center mb-4 md:text-left">{title}</p>}
          {description && (
            <p className="text-center md:text-left">{description}</p>
          )}
        </motion.div>
        <motion.div
          className="w-2/12 flex-auto hidden md:flex justify-end items-center"
          initial={animateOnMobile && { x: 500, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : ''}
          transition={{ type: 'spring' }}
        >
          {image && (
            <LazyImage
              src={image.url}
              alt="side icon for a more beautiful UI"
            />
          )}
        </motion.div>
      </div>
    );
  } else {
    return null;
  }
};
