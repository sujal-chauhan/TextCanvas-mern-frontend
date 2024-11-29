import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4' >Presenting the Text-to-Image Generator Powered by AI</h2>
          <p className='text-gray-600 mb-4'>
            Effortlessly bring your ideas to life with our free AI image generator. Whether you're looking for striking visuals or one-of-a-kind images, our tool turns your text into captivating pictures with just a few clicks. Describe it, envision it, and watch it materialize in seconds.
          </p>
          <p className='text-gray-600' >
          Just type your text prompt, and our advanced AI will generate high-quality images in seconds. Whether it’s product visuals, character designs, portraits, or even ideas that haven’t been imagined yet, the possibilities are endless. Let our cutting-edge technology bring your creativity to life
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description
