import { motion } from "framer-motion";
import { useState } from "react";
import PartnersCarousel from "../components/PartnersCarousel";
import House from "../assets/home-page/housing_loan.svg";
import Consumer from "../assets/home-page/consumer_loan.svg";
import LapLoan from "../assets/home-page/lap_loan.svg";
import Service from "../assets/home-page/service.png";
import HdfcBank from "../assets/home-page/hdfc_bank.avif";
import HdfcCard from "../assets/home-page/hdfc_card.avif";
import HdfcLoan from "../assets/home-page/hdfc_loan.avif";
import PersonalLoan from "../assets/home-page/business_loan_99304060b9.avif";
import BussinessLoan from "../assets/home-page/Business_Loan_cd14cecb36.avif";
import ShortTermLoan from "../assets/home-page/STPL_9cb60080c5.avif";
import cd from '../assets/home-page/cen.png';
import brand from "../assets/home-page/br.png";
import buss from '../assets/home-page/bus.png';
import creates from '../assets/home-page/cam.png';
import stock from '../assets/home-page/sto.png';
import sus from '../assets/home-page/sus.png';
import cre from '../assets/home-page/creator.png';
import hd from '../assets/home-page/social.png';
import ourpromisess from '../assets/home-page/loan11.avif';
import loan1 from '../assets/home-page/rupee.png';
import loan2 from '../assets/home-page/rupee.png';
import loan5 from '../assets/home-page/rupee.png';
import loan6 from '../assets/home-page/rupee.png';
import loan7 from '../assets/home-page/rupee.png';
import Hdfc from "../assets/partners/hdfc.png";
import Icici from "../assets/partners/icici.png";
import Axis from "../assets/partners/axis.png";
import Indus from "../assets/partners/induslogo.jpg";
import Idfc from "../assets/partners/idfc.png";
import Kotak from "../assets/partners/kotak.png";
import Dbs from "../assets/partners/dbs.png";
import Bandhan from "../assets/partners/bandhan.png";
import Yes from "../assets/partners/yesbanklogo.jpg";
import Bajaj from "../assets/partners/bajajfinservlogo.png";
import LT from "../assets/partners/l&tlogo.jpg";
import ABC from "../assets/partners/abcbanklogo.jpg";
import Piramal from "../assets/partners/pirmal.svg";
import Chola from "../assets/partners/cholalogo.jpg";
import InCred from "../assets/partners/incred.png";
import Axis1 from "../assets/partners/axisfinancelogo.png";
import Linden from "../assets/partners/lindenlogo.png";
import Shriram from "../assets/partners/shriram.png";
import Full from "../assets/partners/fullertonlogo.jpg";
import Hero from "../assets/partners/herologo.png";
import Pay from "../assets/partners/pay.png";
import Poon from "../assets/partners/poon.png";
import Muthoo from "../assets/partners/muthoo.png";
import AutoAnimatedText from "../components/AutoAnimatedText";
// import image from "./boys.jpg";
// import image from "./slboys.jpg";
import image from "../assets/home-page/boyss.jpg";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaHeartbeat,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHandshake,
  FaBolt,
  FaSmile,
  FaUniversity,
  FaBriefcase,
  FaMedal,
  FaWallet,
  FaPiggyBank,
  FaCoins,
  FaChartLine,
  FaCarCrash,
  FaBuilding,
  FaCreditCard,
  
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoIosBusiness } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa6";

import { useNavigate } from 'react-router-dom';


import bg3 from '../assets/sample/bg3.png';
import bg4 from '../assets/sample/bg10.png';
import ApplyNowForm from "../components/ApplyNowForm";



const companies = [
  {
    name: "Savings Account",
    size: "100–500 employees",
    description: "Earn interest while keeping your money safe and accessible.",
    type: "Banking",
    stage: "Established",
    tag: "Top Rated",
    openings: "12 open positions",
    icon: <FaPiggyBank className="text-green-700 w-6 h-6" />,
  },
  {
    name: "Fixed Deposits",
    size: "201–1000 employees",
    description: "Secure investments with assured returns over time.",
    type: "Investment",
    stage: "Growth",
    tag: "Safe Investment",
    openings: "5 open positions",
    icon: <FaCoins className="text-yellow-600 w-6 h-6" />,
  },
  {
    name: "Mutual Funds",
    size: "51–200 employees",
    description: "Diversified portfolios managed by expert fund managers.",
    type: "Investment",
    stage: "Emerging",
    tag: "High Returns",
    openings: "10 open positions",
    icon: <FaChartLine className="text-blue-600 w-6 h-6" />,
  },
  {
    name: "Education Loan",
    size: "11–50 employees",
    description: "Financial support for your higher education goals.",
    type: "Loan",
    stage: "Growing",
    tag: "Student Friendly",
    openings: "3 open positions",
    icon: <FaUniversity className="text-indigo-700 w-6 h-6" />,
  },
];


const products = [
  {
    title: "Personal Loan",
    description: "Use funds for any purpose—travel, education, emergencies—with flexible repayment.",
    icon: <FaHome className="text-purple-700 w-6 h-6" />,
    Link: "/personal-loan",
  },
  {
    title: "Home Loan",
    description: "Turn your dream home into reality with affordable, long-term financing.",
    icon: <FaBriefcase className="text-orange-600 w-6 h-6" />,
    Link: "/home-loan",
  },
  {
    title: "Business Loan",
    description: "Upgrade or expand your company quickly with tailored financing solutions.",
    icon: <FaUniversity className="text-blue-600 w-6 h-6" />,
    Link: "/business-loan",
  },
  {
    title: "Doctor Loan",
    description: "Exclusive loan solutions designed for medical professionals to expand clinics, buy equipment, or manage working capital.",
    icon: <FaMoneyBillWave className="text-green-600 w-6 h-6" />,
    Link: "/doctor-loan",
  },
  {
    title: "LAP Loan",
    description: "Leverage your property to meet large financial needs.",
    icon: <FaMedal className="text-yellow-600 w-6 h-6" />,
    Link: "/lap-loan",
  },
  {
    title: "LRD Loan",
    description: "Monetize rental income with loans against leased commercial properties.",
    icon: <FaWallet className="text-pink-600 w-6 h-6" />,
    Link: "/lrd-loan",
  },
];


const leftCards = [
  {
    title: "Comprehensive Insurance Plans",
    icon: brand,
  },
  {
    title: "Instant Claim Assistance",
    icon: buss,
  },
  {
    title: "Zero Paperwork Process",
    icon: stock,
  },
  {
    title: "Affordable Monthly Premiums",
    icon: PersonalLoan,
  },
  {
    title: "Lifetime Renewal Options",
    icon: hd,
  },
];

const rightCards = [
  {
    title: "EMI Without Credit Card",
    icon: BussinessLoan,
  },
  {
    title: "Flexible Repayment Terms",
    icon: ShortTermLoan,
  },
  {
    title: "Compare Multiple Insurers",
    icon: creates,
  },
  {
    title: "100% Digital Onboarding",
    icon: sus,
  },
  {
    title: "Track Your Policy Anytime",
    icon: cre,
  },
];

import PropTypes from "prop-types";

const Card = ({ title, icon }) => (
  <div className="flex items-center gap-3 bg-white/10 w-full sm:w-[380px] rounded-lg px-4 sm:px-8 py-4 shadow-lg hover:shadow-xl hover:bg-white/20">
    <img src={icon} alt={`${title} icon`} className="w-8 h-8 object-contain" />
    <h6 className="text-black-500 font-semibold text-sm sm:text-base">{title}</h6>
  </div>

);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};


const whyItems = [
  {
    title: "Fast Disbursal",
    description: "Our team helps customers make informed loan decisions quickly.",
    image: House,
    bgColor: "bg-[#99ccff]",
  },
  {
    title: "Low Interest Rates",
    description: "We provide affordable loans with minimal interest rates.",
    image: Consumer,
    bgColor: "bg-[#b3e6b3]",
  },
  {
    title: "Easy Documentation",
    description: "Hassle-free document processing for quick loan approvals.",
    image: LapLoan,
    bgColor: "bg-[#ffcc99]",
  },
  {
    title: "24/7 Support",
    description: "We offer round-the-clock customer support for all your needs.",
    image: Service,
    bgColor: "bg-[#ff9999]",
  },
  {
    title: "Flexible Repayment",
    description: "Choose repayment plans that suit your budget and schedule.",
    image: Consumer,
    bgColor: "bg-[#d9b3ff]",
  },
];



const blogs = [
  {
    title: 'Types of HDFC Cards and Their Eligibility',
    img: HdfcBank,
    hoverText: 'HDFC Bank has many credit and debit cards. Your eligibility depends on your income and credit.',
  },
  {
    title: 'HDFC Bank Credit Card Cash Withdrawal Charges & Limit',
    img: HdfcCard,
    hoverText: 'HDFC credit cards allow ATM cash withdrawals, but be aware of withdrawal limits and charges.',
  },
  {
    title: 'How to Choose Personal Loan Tenure Wisely?',
    img: HdfcLoan,
    hoverText: 'When getting a personal loan, consider the loan length carefully. The best length balances affordable payments with overall cost.',
  },
];

const teamMembers = [
  {
    title: "2 Decades+",
    desc: "Proven expertise in delivering tailored financial solutions to diverse customer needs.",
  },
  {
    title: "300+ Partners",
    desc: "Strong alliances with top banks & NBFCs to offer competitive loan options.",
  },
  {
    title: "Pan-India Presence",
    desc: "Extensive network spanning over 4,000 towns and cities across the country.",
  },
  {
    title: "Trusted Advisors",
    desc: "Led by senior finance professionals with decades of industry insight and credentials.",
  },
];


const partnerLogos = [
  { src: Hdfc, alt: 'HDFC' },
  { src: Icici, alt: 'ICICI' },
  { src: Axis, alt: 'Axis' },
  { src: Indus, alt: 'Indus' },
  { src: Idfc, alt: 'IDFC' },
  { src: Kotak, alt: 'Kotak' },
  { src: Dbs, alt: 'DBS' },
  { src: Bandhan, alt: 'Bandhan' },
  { src: Yes, alt: 'Yes' },
  { src: Bajaj, alt: 'Bajaj' },
  { src: LT, alt: 'LT' },
  { src: ABC, alt: 'ABC' },
  { src: Piramal, alt: 'Piramal' },
  { src: Chola, alt: 'Chola' },
  { src: InCred, alt: 'InCred' },
  { src: Axis1, alt: 'Axis1' },
  { src: Linden, alt: 'Linden' },
  { src: Shriram, alt: 'Shriram' },
  { src: Full, alt: 'Full' },
  { src: Hero, alt: 'Hero' },
  { src: Pay, alt: 'Pay' },
  { src: Poon, alt: 'Poon' },
  { src: Muthoo, alt: 'Muthoo' },
];



const HomePage = () => {
  const navigate = useNavigate();

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>

      <section className="relative min-h-[650px] bg-cover bg-center bg-no-repeat text-white flex items-center overflow-hidden px-4 sm:px-6 md:px-10 py-10 ">
      {/* <video
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
  autoPlay
  muted
  loop
  playsInline
  controls
>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
{/* <img
  src={image} // Replace `image` with your actual image import or URL
  alt="Background"
  className="absolute top-0 left-0 w-full h-full object-cover z-0 "
/> */}
  <img
    src={image}
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

        

        {/* Content */}
        <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between gap-10">

          {/* Left Text Area */}
          <div className="w-full md:w-1/2 mt-[80px] md:mt-[40px]">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-black custom-font tracking-wide uppercase leading-snug">
              Unlock Your{" "}
              <span className="inline italic text-black whitespace-nowrap">
                <AutoAnimatedText
                  texts={["Dreams", "Goals", "Ambitions", "Future"]}
                  className="inline text-black italic"
                />
              </span>{" "}
              with{" "}
              <span className="inline italic text-black whitespace-nowrap">
                <AutoAnimatedText
                  texts={["Personal Loan", "Easy Finance", "Low Interest", "Home Loan", "Business Loan", "Doctor Loan", "LRD Loan", "LAP Loan", "Health Insurance", "Home Insurance", "Car Insurance", "SME Insurance"]}
                  className="inline text-black italic"
                />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-black mt-6 max-w-md">
              Flexible terms and competitive rates to help you fund your next big purchase or dream vacation.
            </p>

            <div className="mt-6">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-[#FF8800] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all">
                Compare & Apply
              </button>



            </div>
           
              <ApplyNowForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                loanTypeLabel="Apply"
              />

          </div>

          {/* Right Feature Cards: Enhanced UI */}

          <div className="w-full md:w-1/2 space-y-8">
            {/* Insurance Plans */}
            {/* <div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Health Insurance", icon: <FaHeartbeat />, border: "#0283BB", href: "/health-insurance"},
                  { text: "Home Insurance", icon: <FaHome />, border: "#F99F14", href: "/home-insurance" },
                  { text: "Car Insurance", icon: <FaCarCrash />, border: "#F99F14", href: "/car-insurance"  },
                  { text: "SME Insurance", icon: <FaBuilding />, border: "#0283BB", href: "/sme-insurance" },
                ].map((item) => (
                  <div
                    key={item.text}
                    onClick={() => item.href && navigate(item.href)}
                    className="flex items-center gap-4 border rounded-xl p-3 shadow hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer"
                    style={{ borderColor: item.border }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white border text-xl"
                      style={{ borderColor: item.border, color: item.border }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-black font-medium text-sm sm:text-base">
                      {item.text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer">
                {[
                  { text: "ICICI Pru Plans", icon: <FaChartLine />, border: "#0283BB" , href: "/icici-direct-plans" },
                  { text: "HDFC Life", icon: <FaBriefcase />, border: "#F99F14" , href: "/hdfc-life"},
                  { text: "Max Life Insurance", icon: <FaShieldAlt />, border: "#F99F14", href: "/max-life" },
                  { text: "Credit Cards", icon: <FaCreditCard />, border: "#0283BB", href:"/hdfc-credit-card-home-page"},
                ].map((item) => (
                  <div
                    key={item.text}
                    onClick={() => item.href && navigate(item.href)}
                    className="flex items-center gap-4 border rounded-xl p-3 shadow hover:shadow-md hover:bg-gray-50 transition-all"
                    style={{ borderColor: item.border }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white border text-xl"
                      style={{ borderColor: item.border, color: item.border }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-black font-medium text-sm sm:text-base">
                      {item.text}
                    </h4>
                  </div>
                ))}
              </div>
              
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {[
                  // { text: "Health Insurance", icon: <FaHeartbeat />, border: "#0283BB", href: "/health-insurance"},
                  // { text: "Home Insurance", icon: <FaHome />, border: "#F99F14", href: "/home-insurance" },
                  // { text: "Car Insurance", icon: <FaCarCrash />, border: "#0283BB", href: "/car-insurance"  },
                  // { text: "SME Insurance", icon: <FaBuilding />, border: "#F99F14", href: "/sme-insurance" },
                  // { text: "ICICI Pru Plans", icon: <FaChartLine />, border: "#0283BB" , href: "/icici-direct-plans" },
                  // { text: "HDFC Life", icon: <FaBriefcase />, border: "#F99F14" , href: "/hdfc-life"},
                  // { text: "Max Life Insurance", icon: <FaShieldAlt />, border: "#0283BB", href: "/max-life" },
                  // { text: "Credit Cards", icon: <FaCreditCard />, border: "#F99F14", href:"/hdfc-credit-card-home-page"},
                  // { text: "Personal Loan", icon: <FaBuilding />, border: "#0283BB", href: "/personal-loan" },
                  // { text: "Home Loan", icon: <FaBuilding />, border: "#F99F14", href: "/home-loan" },
                  // { text: "Business Loan", icon: <FaBuilding />, border: "#0283BB", href: "/business-loan" },
                  // { text: "Doctor Loan", icon: <FaBuilding />, border: "#F99F14", href: "/doctor-loan" },
                  { text: "Health Insurance", icon: <FaHeartbeat />, border: "#0283BB", href: "/health-insurance"},
                  { text: "Home Insurance", icon: <FaHome />, border: "#0283BB", href: "/home-insurance" },
                  { text: "Car Insurance", icon: <FaCarCrash />, border: "#0283BB", href: "/car-insurance"  },
                  { text: "SME Insurance", icon: <FaBuilding />, border: "#0283BB", href: "/sme-insurance" },
                  { text: "ICICI Pru Plans", icon: <FaChartLine />, border: "#0283BB" , href: "/icici-direct-plans" },
                  { text: "HDFC Life", icon: <FaBriefcase />, border: "#0283BB" , href: "/hdfc-life"},
                  { text: "Max Life Insurance", icon: <FaShieldAlt />, border: "#0283BB", href: "/max-life" },
                  { text: "Credit Cards", icon: <FaCreditCard />, border: "#0283BB", href:"/hdfc-credit-card-home-page"},
                  { text: "Personal Loan", icon: <BsPersonFillCheck />, border: "#0283BB", href: "/personal-loan" },
                  { text: "Home Loan", icon: <AiFillHome />, border: "#0283BB", href: "/home-loan" },
                  { text: "Business Loan", icon: <IoIosBusiness />, border: "#0283BB", href: "/business-loan" },
                  { text: "Doctor Loan", icon: <FaBriefcaseMedical />, border: "#0283BB", href: "/doctor-loan" },

  ].map((item) => (
    <div
      key={item.text}
      onClick={() => item.href && navigate(item.href)}
      className="flex items-center gap-4 border rounded-xl p-3 shadow hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer"
      style={{ borderColor: item.border }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white border text-xl"
        style={{ borderColor: item.border, color: item.border }}
      >
        {item.icon}
      </div>
      <h4 className="text-black font-medium text-sm sm:text-base">
        {item.text}
      </h4>
    </div>
  ))}
</div>


          </div>


        </div>
      </section>

      <section
        className="px-6 py-16 bg-fixed bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bg3})` }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Main content */}
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-white text-center">We Facilitate</h2>
          <p className="text-white mb-10 text-center">
            Wide Range of Financial Products That suits your customer's needs!
          </p>

          {/* Cards grid */}
          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl p-6 bg-white/10 backdrop-blur-lg text-white border-l-4 border-[#FE9201]
          shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-white/20"
              >
                <div className="flex items-center justify-between mb-4 text-3xl">
                  {product.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm mb-6">{product.description}</p>

                <Link
                  to={product.Link}
                  className="text-orange-400 font-medium inline-flex items-center group"
                >
                  Know more<span className="ml-1 transition-all group-hover:translate-x-1">➔</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 sm:py-16 bg-[aliceblue] min-h-[420px] w-full flex justify-center">

        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-8 sm:mb-12">
            Why Choose Us
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 min-h-[22rem]">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className={`
            relative
            w-28 h-28
            sm:w-36 sm:h-36
            md:w-48 md:h-48
            rounded-full
            transition-all duration-500 ease-in-out
            ${item.bgColor} text-black shadow-lg p-2
            flex flex-col items-center justify-center
            hover:h-64 hover:rounded-2xl cursor-pointer group overflow-hidden`
                }
              >
                <div className="flex flex-col items-center justify-center px-2">
                  <h5 className="text-xs sm:text-sm md:text-base font-semibold">
                    {item.title}
                  </h5>
                  <p
                    className="
                text-[10px] sm:text-xs md:text-sm text-center
                opacity-0 group-hover:opacity-100
                group-hover:translate-y-0 max-h-0 group-hover:max-h-32
                transition-all duration-500 ease-in-out mt-1 sm:mt-2
                overflow-hidden
              "
                  >
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 sm:w-14 md:w-16 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>

{/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 px-4 sm:px-6 md:px-8">
  {whyItems.map((item, index) => (
    <div
      key={index}
      className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-full h-64 bg-blue-100 rounded-xl border-t-4 border-l-4 [border-top-color:#9dc9fa] [border-left-color:#9dc9fa]"
    >
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-24 h-24" />
      <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-24 h-24" />
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-24 h-24" />
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-12 h-12" />
      <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-44 h-44" />
      <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-64 h-64" />
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out duration-1000 group-hover:duration-1000 w-4 h-4" />
      <div className="w-full h-full shadow-xl shadow-neutral-200 p-3 bg-[#0283BB] opacity-90 rounded-xl flex-col gap-2 flex justify-center">
        <span className="text-white font-bold text-xl">{item.title}</span>
        <p className="text-white">{item.description}</p>
      </div>
    </div>
  ))}
</div> */}

        </div>
      </section>


      <style>{`
       .card {
    position: relative;
    width: 320px;
    height: 230px !important;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow:
      20px 20px 60px #bebebe,
      -20px -20px 60px #ffffff;
  }
 
  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 307px;
    height: 216px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }
 
  .blob {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color:#0283BB;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }
 
  .save button {
    background: #fff;
    border: none;
    margin-right: 5px;
    padding: 7px 5px;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    width: 100px;
    text-transform: uppercase;
    cursor: pointer;
    transform: skew(-21deg);
  }
 
  .save span {
    display: inline-block;
    transform: skew(21deg);
  }
 
  .save button::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background:#4A2647;
    opacity: 0;
    transition: all 0.5s;
  }
 
  .save button:hover {
    color: #fff;
  }
 
  .save button:hover::before {
    left: 0;
    right: 0;
    opacity: 1;
  }
 
  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
 
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
 
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
 
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
 
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }`}</style>


      <section
        className="relative pt-16 min-h-[450px] px-4 sm:px-10 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative max-w-7xl mx-auto text-white pb-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            Why Choose Our Insurance Plans?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left cards */}
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              {leftCards.map((item) => (
                <Card key={item.title} title={item.title} icon={item.icon} />
              ))}
            </div>

            {/* Center image */}
            <div className="flex justify-center">
              <img
                src={cd}
                alt="Center Illustration"
                className="w-2/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>

            {/* Right cards */}
            <div className="flex flex-col gap-6 items-center md:items-end text-center md:text-right">
              {rightCards.map((item) => (
                <Card key={item.title} title={item.title} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray-100 pt-16 pb-10">
        {/* Heading */}
        <div className="text-center mb-10 px-4 sm:px-20">
          <h2 className="text-3xl font-bold text-gray-800">Our Financial Products</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Explore our range of trusted financial products designed to help you grow and manage your wealth.
          </p>
        </div>

        {/* Grid layout instead of flex */}
        <div className="grid gap-6 px-4 sm:px-20 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-full max-w-[320px] h-[230px] relative rounded-[14px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] overflow-hidden"
            >
              {/* Foreground glass effect */}
              <div className="bg absolute top-[5px] left-[5px] w-[305px] h-[20px] bg-white/95 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white p-4 flex flex-col z-20">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  {company.icon}
                  <h3 className="text-lg font-semibold">{company.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mx-2 mb-2">{company.description}</p>

                {/* Tags */}
                <div className="mt-auto text-sm text-gray-600 space-y-1">
                  <p><span className="font-semibold">Type:</span> {company.type}</p>
                </div>
              </div>

              {/* Animated blob in background */}
              <div className="blob absolute top-1/2 left-1/2 w-[150px] h-[150px] bg-black/20 rounded-full blur-[12px] animate-blob"></div>

            </div>
          ))}
        </div>
      </section>

      <section
        className="relative bg-fixed bg-cover bg-center bg-no-repeat py-24 px-4 sm:px-10 text-white"
        style={{ backgroundImage: `url(${ourpromisess})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12"
          >
            Loans – India’s Leading Loan Distribution Company
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-xl backdrop-blur-xl hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FE9201]/20 text-[#FE9201] text-2xl shadow-md">
                <FaHandshake />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">2 Decades+</h3>
              <p className="text-sm text-gray-300">Proven expertise in delivering tailored financial solutions to diverse customer needs.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-xl backdrop-blur-xl hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FE9201]/20 text-[#FE9201] text-2xl shadow-md">
                <FaBolt />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">300+ Partners</h3>
              <p className="text-sm text-gray-300">Strong alliances with top banks & NBFCs to offer competitive loan options.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-xl backdrop-blur-xl hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FE9201]/20 text-[#FE9201] text-2xl shadow-md">
                <FaShieldAlt />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Pan-India Presence</h3>
              <p className="text-sm text-gray-300">Extensive network spanning over 4,000 towns and cities across the country.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-xl backdrop-blur-xl hover:scale-105 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FE9201]/20 text-[#FE9201] text-2xl shadow-md">
                <FaSmile />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Trusted Advisors</h3>
              <p className="text-sm text-gray-300">Led by senior finance professionals with decades of industry insight and credentials.</p>
            </motion.div>
          </div>
        </div>
      </section>



      <div className="text-center mb-6 py-10 px-4 sm:px-6">
        <h3 className="text-[black] font-bold text-3xl">Blogs</h3>
        <section className="flex justify-center items-center flex-wrap gap-5 mt-5">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="group relative w-full sm:w-[47%] md:w-[30%] max-w-sm rounded-[15px] overflow-hidden bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:border-[3px] border-[#fc8001f0]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-[220px] object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium text-center p-3 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {blog.hoverText}
                </div>
              </div>
              <div className="p-4 text-black text-center ">
                <h4 className="text-lg font-semibold hover:text-shadow">
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section>
        <PartnersCarousel partnerLogos={partnerLogos} />
      </section>


    </div>
  );
};

export default HomePage;
