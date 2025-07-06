import PropTypes from 'prop-types';
import {
  FaHandHoldingUsd,
  FaWallet,
  FaPauseCircle,
  FaUsers,
  FaProcedures,
  FaCarCrash,
  FaHandHoldingMedical,
  FaShieldAlt,
  FaWheelchair,
  FaSignOutAlt,
  FaHeartbeat,
  FaUndo,
  FaHourglassHalf,
} from 'react-icons/fa';

const features = [
  { icon: <FaHandHoldingUsd />, title: "Death Benefit" },
  { icon: <FaWallet />, title: "Option to pay your Premiums as per your convenience" },
  { icon: <FaPauseCircle />, title: "Premium Break Option**" },
  { icon: <FaUsers />, title: "Joint Life Option*" },
  { icon: <FaProcedures />, title: "Accelerated Critical Illness Benefit*" },
  { icon: <FaCarCrash />, title: "Accident Cover*" },
  { icon: <FaHandHoldingMedical />, title: "Voluntary Sum Assured Top-up Option*" },
  { icon: <FaShieldAlt />, title: "Max Life Waiver of Premium Plus Rider#" },
  { icon: <FaWheelchair />, title: "Max Life Critical Illness and Disability Rider#" },
  { icon: <FaSignOutAlt />, title: "Special Exit Value" },
  { icon: <FaHeartbeat />, title: "Terminal Illness" },
  { icon: <FaUndo />, title: "Return of Premium Variant**" },
  {
    icon: <FaHourglassHalf />,
    title: "Longer coverage duration: Choose your own desired Policy Term with coverage available up to age 85 years",
  },
];

const ReusePlanOffersYou = ({ features }) => {
  return (
    <section className="mb-5">
      <div className="container max-w-5xl mx-auto mt-5 px-4">
        <h1 className="text-center text-[#0282ba] text-3xl mb-6 font-semibold">
          What this plan offers you
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
          {features.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <div
                key={item.title}
                className={`h-full ${isLast ? 'md:col-span-2 mx-auto md:w-1/2' : ''}`}
              >
                <div className="group feature-box bg-white hover:bg-blue-400 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col justify-between items-center text-center transform hover:scale-105">
                  <div className="icon text-4xl mb-4 text-black transition-all duration-300 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h5 className="text-xl mb-2 transition-all duration-300 group-hover:text-white">
                    {item.title}
                  </h5>
                  {item.desc && (
                    <p className="text-gray-600 transition-all duration-300 group-hover:text-white">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ReusePlanOffersYou.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,   
      title: PropTypes.string.isRequired,  
      desc: PropTypes.string,               
    })
  ).isRequired,
};

export default function App() {
  return <ReusePlanOffersYou features={features} />;
}