import React from 'react';
import PropTypes from 'prop-types';

const InsurancePartners = ({ heading , partners}) => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-center text-[#0283BB] text-[35px] font-bold mb-10 leading-tight">{heading}</h2>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {partners.map((partner) => (
          <div
            key={partner.id || partner.name}
            className="w-40 h-24 sm:w-48 sm:h-28 bg-white shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out rounded-xl flex items-center justify-center p-4"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

InsurancePartners.propTypes = {
  heading: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InsurancePartners;
