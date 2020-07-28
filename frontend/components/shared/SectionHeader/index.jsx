import React from 'react';
import { Heading, GradientText, HEADING_OPTIONS } from '../Heading/index';
import GenericParagrapgh from '../GenericParagrapgh/index';

/**
 * Props List
 *    Heading
 *    HeadingGradientText
 *    description
 *    image or images (patch)
 *    children >> buttons
 */

const SectionHeader = ({ data, headingtype, children, gradient_color }) => {
  const {
    heading,
    headerImage,
    headingGradientText,
    description,
    image,
    buttons
  } = data;
  return (
    <>
      {data && (
        <section className="flex items-center justify-center flex-col-reverse lg:flex-row">
          <div className="flex-1 lg:mr-6 justify-center">
            <div className="flex items-center">
              <div className="heading ">
                {heading && (
                  <Heading
                    type={headingtype}
                    textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
                    className="py-10"
                  >
                    {heading}
                    {headingGradientText && (
                      <GradientText
                        text={headingGradientText}
                        gradientColor={gradient_color}
                      ></GradientText>
                    )}
                  </Heading>
                )}
              </div>

              {image && (
                <div className="hidden lg:block heading-image w-full">
                  <img src={image} alt="" />
                </div>
              )}
            </div>
            {description && (
              <GenericParagrapgh
                textColor="gray"
                customClassName="text-base py-10"
              >
                {description}
              </GenericParagrapgh>
            )}
            {!buttons && (
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                {children}
              </div>
            )}
          </div>

          {headerImage && (
            <div className="flex-1">
              <img src={headerImage} alt="" />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default SectionHeader;
