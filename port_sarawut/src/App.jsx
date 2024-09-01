import React from 'react';
import MyNavbar from './components/nav';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <>
      <MyNavbar />
      <motion.div
        className="hero min-h-screen bg-cover"
        style={{ backgroundImage: "url(https://scontent.xx.fbcdn.net/v/t1.15752-9/453445040_852528243090249_6736572468152724914_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEis8xSSZ6Gf5N0snrpSdaA0UwKELNvl7nRTAoQs2-XuZEAXHwl1_QjO1hdQSyyytz6ZLPoG4MoXG_OgCtmS0VF&_nc_ohc=jRZvnx53ftQQ7kNvgEw2JXM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHVvIwThcvNMSyTx3jrTX7FEArlaHey6XzeT67mrpXkDg&oe=66F1509F)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }} // Customize animation duration and easing
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <motion.div
          className="hero-content text-neutral-content text-center"
          initial={{ y: 100, opacity: 0 }} // Start off-screen and invisible
          animate={{ y: 0, opacity: 1 }} // Animate to center and become visible
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }} // Customize animation duration, delay, and easing
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <Typewriter
                words={['Welcome Darling', 'I LOVE YOU', 'Very Much']}
                loop
                cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero bg-base-200 min-h-screen"
        whileInView={{
          opacity: [0, 1], // Animate opacity from 0 to 1 on scroll
          scale: [0.5, 1], // Zoom in on scroll (adjust values for desired effect)
          y: [100, 0], // Move the element 100px down initially, then up
          transition: { duration: 1 }, // Set animation duration to 1 second
        }}
        initial={{ opacity: 0, scale: 1, y: 100 }}
        exit={{ opacity: 0, scale: 0.5, y: 100 }} // Define exit animation on scroll up
      >
        <motion.div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Box Office News" // Add descriptive alt text for accessibility
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi.
              In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </motion.div>

      </motion.div>
    </>
  );
};

export default Hero;