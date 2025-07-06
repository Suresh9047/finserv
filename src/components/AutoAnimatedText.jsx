import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AutoAnimatedText = ({ texts = [], className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText(false); // trigger exit animation

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setShowText(true); // show new word
      }, 600); // exit animation duration
    }, 3000); // total cycle duration (3 seconds per word)

    return () => clearInterval(timer);
  }, [texts]);

  return (
    <div className={`${className} inline-block`}>
      <AnimatePresence mode="wait">
        {showText && (
          <motion.span
            key={texts[currentIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            {texts[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
AutoAnimatedText.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default AutoAnimatedText;
