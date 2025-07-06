import { motion } from 'framer-motion';
import TeamImage from '../assets/teamwork.jpg';
import aboutus1 from '../assets/aboutus/gold1.png';
import abg from '../assets/aboutus/5601.jpg'
import { FaCheckCircle, FaHandshake, FaEye, FaBalanceScale, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";


const coreValues = [
  {
    title: "Trust",
    description: "We prioritize your financial well-being over profits.",
    icon: <FaHandshake className="text-[#FF8800] text-3xl" />,
  },
  {
    title: "Transparency",
    description: "Clear and honest information, no hidden terms.",
    icon: <FaEye className="text-[#FF8800] text-3xl" />,
  },
  {
    title: "Innovation",
    description: "Using tech to simplify your financial experience.",
    icon: <FaLightbulb className="text-[#FF8800] text-3xl" />,
  },
  {
    title: "Inclusivity",
    description: "Financial access for everyone, regardless of background.",
    icon: <FaUsers className="text-[#FF8800] text-3xl" />,
  },
  {
    title: "Customer Success",
    description: "Your progress is our mission.",
    icon: <FaChartLine className="text-[#FF8800] text-3xl" />,
  },
  {
    title: "Responsibility",
    description: "We act with integrity and own the impact of our actions.",
    icon: <FaBalanceScale className="text-[#FF8800] text-3xl" />,
  },
];


const features = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 11c0-1.104.896-2 2-2s2 .896 2 2a2 2 0 01-2 2 2 2 0 01-2-2zM20 12a8 8 0 10-8 8" />
        </svg>
      </div>
    ),
    title: "Trust Built Over Time",
    description: "With over 1 million satisfied clients, we’ve earned a reputation for integrity, transparency, and commitment. Your trust drives us to deliver better every day.",
  },
  {
    icon: (
      <div className="bg-red-100 p-4 rounded-full">
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
    title: "Innovative Technology",
    description:
      "Our proprietary tools—like the Smart Loan Calculator—help you make smarter financial decisions. We use AI-powered insights to personalize every user experience and streamline your journey.",
  },
  {
    icon: (
      <div className="bg-yellow-100 p-4 rounded-full">
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      </div>
    ),
    title: "Holistic Benefits",
    description: "We go beyond numbers. Our platform is built to be accessible, educational, and empowering—designed with your full financial well-being in mind.",
    pills: [
      "Clear, Intuitive Interface",
      "Expert Guidance",
      "24/7 Support",
      "Custom Loan Options",
      "Secure Digital Access",
    ],
  },
];


const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-100 to-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[80px] items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              About Us
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Empowering your financial journey with transparency, trust, and technology. Discover who we are and what we stand for.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6 max-w-3xl">
              At <span className="font-bold text-indigo-700">Om Finserv</span>, we believe that financial empowerment comes from clear, honest communication and innovative tools. Our team is dedicated to providing you with personalized advice and cutting-edge solutions that help you make informed decisions.
            </p>
          </div>

          {/* Right Image or SVG Illustration */}
          <div className="flex justify-center">
            <img
              src={aboutus1}
              alt="Loan illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>


      {/* Breadcrumb Section */}
      <div className="bg-[#fbfbfb] pl-12 py-3">
        <nav className="text-gray-600 text-sm flex items-center space-x-2">
          <a href="/" className="hover:underline text-[#0282ba]">Home</a>
          <span className="text-gray-400">&gt;</span>
          <span>About Us</span>
        </nav>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Who We Are */}
        <section className="py-20 bg-gray-100 px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-500">Who We Are</h2>
              <div className="border-l-4 border-orange-400 pl-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900">Our Mission</h4>
                  <p className="text-gray-600">
                    We simplify credit access for individuals & businesses.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900">How We Work</h4>
                  <p className="text-gray-600">
                    Using technology, partnerships & tools to help smarter financial decisions.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Your Advantage</h4>
                  <p className="text-gray-600">
                    Expert support and tailored solutions for a better financial future.
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={TeamImage} alt="Our Team" className="rounded-3xl shadow-lg w-full h-80 object-cover" />
            </motion.div>
          </div>
        </section>


        <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Our Core Principles
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">

            <div className="relative bg-white shadow-lg rounded-lg pt-14 pb-8 px-6 w-full max-w-xs border-t-4 border-red-500">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.75a.75.75 0 01.75-.75h2a.75.75 0 01.75.75v3.25h3.25a.75.75 0 01.75.75v2a.75.75 0 01-.75.75H13.25v3.25a.75.75 0 01-.75.75h-2a.75.75 0 01-.75-.75V10.5H6.25a.75.75 0 01-.75-.75v-2a.75.75 0 01.75-.75H9.75V3.75z" />
                </svg>
              </div>
              <h2 className="text-center text-red-500 font-bold text-xl mb-3">Our Mission</h2>
              <p className="text-center text-gray-600 text-sm leading-relaxed">
                To simplify access to financial products and empower users with the tools and knowledge to achieve their goals.
              </p>
            </div>


            <div className="relative bg-white shadow-lg rounded-lg pt-14 pb-8 px-6 w-full max-w-xs border-t-4 border-blue-500">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5C7.305 4.5 3.47 7.533 2.25 12c1.22 4.467 5.055 7.5 9.75 7.5s8.53-3.033 9.75-7.5C20.53 7.533 16.695 4.5 12 4.5z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-center text-blue-500 font-bold text-xl mb-3">Our Vision</h2>
              <p className="text-center text-gray-600 text-sm leading-relaxed">
                We envision a financially inclusive India, where everyone makes informed credit decisions and accesses financial products with confidence.
              </p>
            </div>


            <div className="relative bg-white shadow-lg rounded-lg pt-14 pb-8 px-6 w-full max-w-xs border-t-4 border-yellow-500">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h2 className="text-center text-yellow-500 font-bold text-xl mb-3">Our Values</h2>
              <p className="text-center text-gray-600 text-sm leading-relaxed">
                Integrity, transparency, and customer-centricity form the foundation of everything we do. We are committed to innovation, trust, and delivering value that empowers financial well-being.
              </p>
            </div>
          </div>
        </div>


        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">

            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <p className="text-gray-600 text-lg">
                Discover the key features that set us apart and drive your success.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

              {/* Left: Feature Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-10 top-0 bottom-0 w-1 bg-indigo-100 rounded-full z-0" />

                <div className="space-y-16">
                  {features.map((feature) => (
                    <div key={feature.title} className="relative pl-24">
                      {/* Icon Dot */}
                      <div className="absolute left-6 top-2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md z-10">
                        <span className="text-lg">{feature.icon}</span>
                      </div>

                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                        {feature.description}
                      </p>

                      {feature.pills && (
                        <div className="flex flex-wrap gap-3">
                          {feature.pills.map((pill) => (
                            <span
                              key={pill}
                              className="px-4 py-2 text-sm font-medium rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm hover:bg-indigo-100 transition"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={abg}
                  alt="About Our Team"
                  className="w-full max-w-lg rounded-2xl shadow-xl object-cover transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>


        {/* What We Offer */}


        <section className="py-20 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center text-[#0283BB] mb-12">
            What We Offer
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Loan comparison from top banks and NBFCs",
              "Free credit score checks",
              "Credit card suggestions tailored to your profile",
              "Financial education and resources",
              "Fast, paperless digital processes",
              "Personalized borrowing advice",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#fdfdfd] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-[#FF8800] mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-50 ring-2 ring-orange-300">
                    <FaCheckCircle size={24} />
                  </div>
                </div>
                <p className="text-gray-800 text-base font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>




        {/* Core Values */}
        <section className="py-20 px-6 bg-gray-100">
          <h2 className="text-4xl font-bold text-center text-[#0283BB] mb-16">
            Our Core Values
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-tr from-[#fff] to-[#fef7ed] p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    {value.icon}
                  </div>
                  <h4 className="ml-4 text-xl font-semibold text-[#FF8800]">
                    {value.title}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-100 to-blue-100 text-center">
          <h2 className="text-4xl font-bold text-[#FF8800] mb-6">
            Join Us On Your Financial Journey
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-800 mb-8 leading-relaxed">
            Whether you're applying for your first loan or improving your credit score, we're here to guide you every step of the way.
          </p>
          {/* <button className="bg-[#FF8800] text-white py-3 px-8 rounded-full font-semibold shadow-md hover:bg-orange-600 hover:shadow-xl transition-all">
            Explore Our Services
          </button> */}
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
