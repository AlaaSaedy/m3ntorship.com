import React from 'react';

import cn from 'classnames';

const Button = React.forwardRef(({ children, ...props }, ref) => {
  let {
    customClassName,
    textColor,
    bgColor,
    btnSize,
    borderColor,
    borderStyle,
    href,
    onClick,
    externalLink,
    textSize,
    fontWeight
  } = props;
  return (
    <>
      <a
        onClick={onClick}
        href={`${href ? href : ''}`}
        ref={ref}
        target={externalLink && '_blank'}
        className={cn(
          'flex items-center justify-center',
          'global-btn inline-block text-center hover:shadow-btn transform hover:-translate-y-.5 transition-all duration-200 ',
          {
            // border
            'border-none': !borderStyle,
            'border border-solid': borderStyle === 'solid',
            'border-c300': borderColor === 'blue',
            'border-c200': borderColor === 'green',
            'border-c100': borderColor === 'black',

            // colors
            'text-c100': !textColor,
            'text-c000': textColor === 'white',
            'text-c800': textColor === 'gray',
            'text-c200': textColor === 'green',

            //bg Color
            'bg-c000': !bgColor,
            'bg-c100': bgColor === 'black',
            'bg-c200': bgColor === 'green',
            'bg-c300': bgColor === 'blue',
            'bg-c1000': bgColor === 'gray',

            //spacing
            ' w-48 h-20': !btnSize,
            ' w-32 h-16': btnSize === 'small',
            ' w-32 sm:w-64 h-16': btnSize === 'medium',
            ' w-64 sm:w-72 h-16': btnSize === 'large',
            ' w-64 sm:w-72 h-20': btnSize === 'largeTall',

            //font size
            'text-base': !textSize || textSize === 'large',
            'text-xs': textSize === 'medium',
            'text-xxs': textSize === 'small',
            //font weight
            'font-black': !fontWeight || fontWeight === 'bold',
            'font-normal': fontWeight === 'normal'
          },
          customClassName
        )}
      >
        {children}
      </a>
    </>
  );
});

export default Button;
