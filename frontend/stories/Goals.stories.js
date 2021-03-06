import React from 'react';
import Goals from '../components/Goals';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Goals', component: Goals, decorators: [withKnobs] };

const data = {
  side_image: {
    url:
      'https://res.cloudinary.com/malngaawy/image/upload/v1595261682/Squiggles_Monochromatic_jwvct9.png'
  },
  list_goals: [
    {
      goal: 'Help new developers gain real world experience',
      id: '5f15be11c8184a2250a760e2'
    },
    {
      goal: 'Help NGOs and small businesses build their online identity',
      id: '5f15be24c8184a2250a760e3'
    }
  ],
  title: 'Goals'
};

export const GoalsComponent = () => {
  return (
    <>
      <div>
        <div className="h-72"></div>
        <Goals data={data} />
      </div>
    </>
  );
};
