import PropTypes from 'prop-types';
import { useState } from 'react';

const PartnersCarousel = ({ partnerLogos }) => {
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-white to-blue-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0282BA] mb-12 tracking-wide">
          Our Trusted Partners
        </h2>

        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex w-max gap-10 p-5 animate-marquee-full"
            style={{
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={logo.src}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-28 w-44 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

PartnersCarousel.propTypes = {
  partnerLogos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PartnersCarousel;
