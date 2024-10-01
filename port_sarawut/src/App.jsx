import React, { useState, useEffect } from 'react';
import MyNavbar from './components/nav';
import Footer from './components/footer';
import Profile from './components/Profile';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all([
      loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec63dde4-0dc8-47a8-87fe-9c424adb3cf3/dfsdhj7-49813945-b6fb-474f-b88e-2b059533409c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjNjNkZGU0LTBkYzgtNDdhOC04N2ZlLTljNDI0YWRiM2NmM1wvZGZzZGhqNy00OTgxMzk0NS1iNmZiLTQ3NGYtYjg4ZS0yYjA1OTUzMzQwOWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EKj12hMJ6b6SLYoQkU25mdYFG4IKb-U7xiqZVS1N3V8"),
      loadImage("https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp")
    ]).then(() => {
      setImagesLoaded(true);
      setTimeout(() => setShowContent(true), 100);
    });
  }, []);

  const yourname = "Sarawut";

  function dataname(name) {
    return "Welcome " + name + " To My Portfolio";
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {imagesLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >

          <MyNavbar scrollToSection={scrollToSection} />

          {/*Welcome*/}
          <div id="welcome-section">
            <motion.div
              className="hero min-h-screen bg-cover"
              style={{ backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec63dde4-0dc8-47a8-87fe-9c424adb3cf3/dfsdhj7-49813945-b6fb-474f-b88e-2b059533409c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjNjNkZGU0LTBkYzgtNDdhOC04N2ZlLTljNDI0YWRiM2NmM1wvZGZzZGhqNy00OTgxMzk0NS1iNmZiLTQ3NGYtYjg4ZS0yYjA1OTUzMzQwOWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EKj12hMJ6b6SLYoQkU25mdYFG4IKb-U7xiqZVS1N3V8)" }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    className="hero-content text-neutral-content text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >

                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold text-[#ffffff]">
                        <Typewriter
                          words={[dataname(yourname)]}
                          loop
                          cursor
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </h1>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div id='Profile-section'>
            <Profile />
            <Profile />
            <Profile />
          </div>

          <Footer />

        </motion.div>

      )}
    </AnimatePresence>
  );
};

export default App;