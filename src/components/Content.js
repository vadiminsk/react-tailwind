import React from 'react';
import ImageOne from '../images/image.jpg';
import ImageTwo from '../images/image-2.jpg';

const Content = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-white font-mono h-screen py-40'>
        <img className='h-full rounded md-20' src={ImageOne} alt='salat' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl md-2'>Salat</h2>
          <p className='mb-2'>Crispy, delicious</p>
          <span>$16</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white font-mono h-screen py-40'>
        <img className='h-full rounded md-20' src={ImageTwo} alt='salat' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl md-2'>Salat Two</h2>
          <p className='mb-2'>Crispy, delicious</p>
          <span>$20</span>
        </div>
      </div>
    </>
  );
};

export default Content;
