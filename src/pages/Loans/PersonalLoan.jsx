import { useState } from "react";
import loan1 from "../../assets/loan_section/loan1.png";
import Wedding from "../../assets/loan_section/wedding.png";
import Home from "../../assets/loan_section/home.png";
import Holiday from "../../assets/loan_section/holiday.jpeg";
import Nri from "../../assets/loan_section/nri-personal.png";
import TopUp from "../../assets/loan_section/top-up.jpeg";
import Festival from "../../assets/loan_section/festival.jpeg";
import Consumer from "../../assets/loan_section/consumer-durables.png";
import Education from "../../assets/loan_section/education.png";
import Computer from "../../assets/loan_section/computer.png";
import { HiCheckCircle } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi'
import Personal from "../../assets/loan_section/personal.avif";
import {
  FaPercent,
  FaWallet,
  FaCalendar,
  FaLock,
  FaClock,
  FaMoneyCheckAlt,
  FaExclamationCircle,
  FaUndo,
  FaStar,
  FaBriefcase,
  FaCalendarCheck,
  FaBirthdayCake,
  FaCreditCard,
} from "react-icons/fa";
import Hdfc from "../../assets/partners/hdfc.png";
import Icici from "../../assets/partners/icici.png";
import Axis from "../../assets/partners/axis.png";
import Indus from "../../assets/partners/induslogo.jpg";
import Idfc from "../../assets/partners/idfc.png";
import Kotak from "../../assets/partners/kotak.png";
import Dbs from "../../assets/partners/dbs.png";
import Bandhan from "../../assets/partners/bandhan.png";
import Yes from "../../assets/partners/yesbanklogo.jpg";
import Bajaj from "../../assets/partners/bajajfinservlogo.png";
import LT from "../../assets/partners/l&tlogo.jpg";
import ABC from "../../assets/partners/abcbanklogo.jpg";
import Piramal from "../../assets/partners/pirmal.svg";
import Chola from "../../assets/partners/cholalogo.jpg";
import InCred from "../../assets/partners/incred.png";
import Axis1 from "../../assets/partners/axisfinancelogo.png";
import Linden from "../../assets/partners/lindenlogo.png";
import Shriram from "../../assets/partners/shriram.png";
import Full from "../../assets/partners/fullertonlogo.jpg";
import Hero from "../../assets/partners/herologo.png";
import Pay from "../../assets/partners/pay.png";
import Poon from "../../assets/partners/poon.png";
import Muthoo from "../../assets/partners/muthoo.png";
import PartnersCarousel from "../../components/PartnersCarousel";
import Calculator from "../../components/ReusableChartCalculator";
import ApplyNowForm from "../../components/ApplyNowForm";

const PersonalLoan = () => {
  const [activeSection, setActiveSection] = useState("");
  const [activeTab, setActiveTab] = useState("eligibility");

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

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

  const calculate = ({ loanAmount, loanTerm, interestRate }) => {
    const principal = loanAmount;
    const tenure = loanTerm * 12;
    const rate = interestRate / 1200;
    const emi =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);
    const total = emi * tenure;
    const interest = total - principal;

    return { emi, principal, interest, total };
  };

  const inputs = [
    {
      name: "loanAmount",
      label: "Loan Amount",
      min: 10000,
      max: 3000000,
      step: 1000,
      defaultValue: 500000,
      prefix: "₹",
    },
    {
      name: "interestRate",
      label: "Interest Rate (p.a.)",
      min: 8,
      max: 30,
      step: 0.1,
      defaultValue: 13.5,
      suffix: "%",
    },
    {
      name: "loanTerm",
      label: "Loan Term (in years)",
      min: 1,
      max: 8,
      step: 1,
      defaultValue: 3,
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-b from-blue-100 to-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Get Instant Personal Loans
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Apply for a personal loan online with minimal documentation and
              quick approval.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
            >
              Apply Now
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={loan1}
              alt="Loan illustration"
              className="max-w-full h-[500px]"
            />
          </div>
        </div>

        <ApplyNowForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          loanTypeLabel="Loan"
        />
      </div>

      <div className="bg-[#fbfbfb] pl-12 py-3">
        <nav className="text-gray-600 text-sm flex items-center space-x-2">
          <a href="/" className="hover:underline text-[#0282ba]">
            Home
          </a>
          <span className="text-gray-400">&gt;</span>
          <span>Personal Loan</span>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
        <section className="py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0282ba] mb-10">
              Explore Our Loan Options
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: Wedding,
                  title: "Wedding Loan",
                  desc: "Cover all your wedding expenses including venue, catering, and shopping. Make the biggest day of your life memorable with easy financing options.",
                },
                {
                  img: Home,
                  title: "Home Renovation",
                  desc: "Renovate or redecorate your home with ease. Whether it's repairs or upgrades, a home renovation loan can make it happen.",
                },
                {
                  img: Holiday,
                  title: "Holiday Loan",
                  desc: "Plan your dream vacation with easy EMI options and flexible terms. Enjoy stress-free travels with a holiday loan tailored to you.",
                },
                {
                  img: Nri,
                  title: "NRI Personal Loan",
                  desc: "For NRIs who need financial support back home, this loan provides flexible terms to cover expenses for family or property needs.",
                },
                {
                  img: TopUp,
                  title: "Top Up Loan",
                  desc: "Already have a loan? Need extra funds? Top up your existing loan with a flexible, low-interest option that suits your needs.",
                },
                {
                  img: Festival,
                  title: "Festival Loan",
                  desc: "Celebrate festivals, parties, and special occasions with a festival loan to manage your expenses easily without financial stress.",
                },
                {
                  img: Consumer,
                  title: "Consumer Durable Loan",
                  desc: "Buy home appliances or electronics with a consumer durable loan. Pay in easy EMIs and upgrade your living space hassle-free.",
                },
                {
                  img: Education,
                  title: "Education Loan",
                  desc: "Invest in your child’s future or your own academic growth. Education loans provide the support you need for tuition, fees, and more.",
                },
                {
                  img: Computer,
                  title: "Computers & Mobile Phones Loan",
                  desc: "Get the latest computers, laptops, or smartphones with a consumer-friendly loan offering easy EMIs and even insurance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  <h5 className="text-xl font-semibold text-[#0282ba] mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section>
          <div className="container max-w-7xl mx-auto">
            <div className="bg-white py-12">
              {/* Heading */}
              <h2 className="text-4xl font-extrabold mb-10 text-[#0282ba]">
                Features & Benefits of Personal Loan
              </h2>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  {
                    icon: <FaPercent />,
                    title: "Rate of Interest:",
                    desc: (
                      <>
                        The rate of interest on Personal Loans starts at{" "}
                        <span className="text-[#FF8800] font-semibold">10.25%</span>{" "}
                        depending on your credit score, income, and company listing.
                      </>
                    ),
                  },
                  {
                    icon: <FaWallet />,
                    title: "Loan Amount:",
                    desc: (
                      <>
                        You can get a loan from{" "}
                        <span className="text-[#FF8800] font-semibold">₹1 Lakh</span>{" "}
                        to as high as{" "}
                        <span className="text-[#FF8800] font-semibold">₹1 Crore</span>,
                        depending on your requirement and eligibility.
                      </>
                    ),
                  },
                  {
                    icon: <FaCalendar />,
                    title: "Loan Tenure:",
                    desc:
                      "Personal loans are available for periods as short as 12 months. The average tenure for a Personal Loan is between 12 and 96 months.",
                  },
                  {
                    icon: <FaLock />,
                    title: "Security:",
                    desc: "Due to its unsecured nature, collateral is not required.",
                  },
                  {
                    icon: <FaClock />,
                    title: "Loan Turnaround Time:",
                    desc: (
                      <>
                        Personal Loan typically has the fastest turnaround time in the
                        industry. Many banks offer online approval within{" "}
                        <span className="text-[#FF8800] font-semibold">24 hours</span>{" "}
                        after submission.
                      </>
                    ),
                  },
                  {
                    icon: <FaMoneyCheckAlt />,
                    title: "Processing Fees:",
                    desc: (
                      <>
                        Varies between banks, but generally up to{" "}
                        <span className="text-[#FF8800] font-semibold">2.5%</span> of
                        the loan amount.
                      </>
                    ),
                  },
                  {
                    icon: <FaExclamationCircle />,
                    title: "Prepayment Penalty:",
                    desc: (
                      <>
                        Waiver applicable if the loan is closed using the customer’s
                        own funds. Charges range from{" "}
                        <span className="text-[#FF8800] font-semibold">1% to 5%</span>{" "}
                        of the outstanding amount.
                      </>
                    ),
                  },
                  {
                    icon: <FaUndo />,
                    title: "Part Prepayment:",
                    desc: "Available; charges may vary between banks.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start space-x-5">
                    <div className="text-[#0282ba] text-3xl mt-1">{icon}</div>
                    <div className="text-gray-700 text-lg">
                      <strong>{title}</strong> {desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes and Image Section */}
              <h4 className="font-extrabold text-[#0282ba] text-3xl text-center mt-[30px]">Note:</h4>

              <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-12 max-w-7xl mx-auto">

                {/* Text Section */}
                <div className="w-full lg:w-1/2 space-y-8 mt-[40px]">

                  {/* Benefits List */}
                  <ul className="space-y-5 text-gray-800">
                    <li className="flex items-start gap-3">

                      <span>
                        Prepayment of the loan is possible at any time during the loan
                        tenure subject to payment of standard pre-closure charges up to
                        5% + GST.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">

                      <div>
                        <p className="flex items-start gap-3">
                          The waiver, if any, of the prepayment charges will be applicable
                          provided:
                        </p>
                        <p className="flex items-start gap-3">The customer has paid 12 or more EMIs.</p>
                        <p className="flex items-start gap-3"> The pre-payment waiver is applicable if the loan is closed
                          using the customer’s own funds</p>
                        <p> (Waiver not applicable in case of balance transfer).</p>

                      </div>
                    </li>
                  </ul>
                  <span>Facility of part pre-payment is available.</span>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p className="flex items-start gap-3">

                    </p>
                    <p>
                      The specific interest rate applicable to a customer would be
                      dependent on segment, asset category, and location. The Bank
                      reserves the right to revise the ROI and processing fee from time to
                      time, at its sole discretion. GST and other govt. taxes, levies, etc.
                      applicable as per the prevailing rate will be charged over and above
                      these charges at the discretion of the Banks.
                    </p>

                    <p>
                      The charges or fees given in the above table are subject to change
                      and the one recorded in agreement will be binding over this site.
                    </p>

                    <p className="font-semibold text-gray-800">
                      The amount will be debited from your Salary account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={Personal}
                    alt="How to apply for loan"
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>

                {/* Right Side - Steps */}
                <div className="w-full lg:w-1/2">
                  <h4 className="font-bold text-[#0282ba] text-3xl mb-6 text-left">
                    How to Apply for a Personal Loan?
                  </h4>

                  <ul className="list-decimal list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
                    <li>Click on the ‘Compare and Apply’ option.</li>
                    <li>Fill up registration details with the necessary information.</li>
                    <li>Get the latest personal loan offers and choose one.</li>
                    <li>Apply for the loan plan you have selected.</li>
                    <li>Fill up a simple online form.</li>
                    <li>Provide the necessary personal loan documents.</li>
                  </ul>

                  <p className="text-gray-600 mt-5">
                    Once the application is submitted, our bank representatives will contact you shortly.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section>
          <Calculator
            title="EMI Calculator"
            inputs={inputs}
            calculate={calculate}
            resultTitle="EMI Amount"
            buttonchange = "Calculate loan"
          />
        </section>

        <section className="py-12">
          <div className="container max-w-7xl mx-auto">
            <h1 className="mb-8 text-[#0282ba] text-3xl font-bold text-center">
              Factors Affecting Personal Loan Eligibility
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaStar className="text-2xl text-[#0282ba]" />,
                  title: "Credit Score",
                  description:
                    "The most crucial eligibility factor. A score of 650 or above is typically considered good for personal loans.",
                },
                {
                  icon: <FaWallet className="text-2xl text-[#0282ba]" />,
                  title: "Income",
                  description:
                    "Higher income increases eligibility for a higher loan amount compared to individuals with lower income.",
                },
                {
                  icon: <FaBriefcase className="text-2xl text-[#0282ba]" />,
                  title: "Employment",
                  description:
                    "Employees of listed companies, government bodies, and public sector undertakings are eligible for a higher loan amount.",
                },
                {
                  icon: <FaCalendarCheck className="text-2xl text-[#0282ba]" />,
                  title: "Work Continuity",
                  description:
                    "Long-term employment in your current organization or a consistent business history for self-employed individuals is critical.",
                },
                {
                  icon: <FaBirthdayCake className="text-2xl text-[#0282ba]" />,
                  title: "Age of the Borrower",
                  description:
                    "Typically, the minimum age is 21 years, with the maximum age limit being around 60 years at the time of loan repayment.",
                },
                {
                  icon: <FaCreditCard className="text-2xl text-[#0282ba]" />,
                  title: "Loan Amount",
                  description:
                    "Apply for a loan amount that you can comfortably repay, which increases your eligibility for approval.",
                },
              ].map((factor, index) => (
                <div
                  key={factor.title}
                  className="flex items-start space-x-4 p-5 bg-white border rounded-lg shadow-sm"
                >
                  <div>{factor.icon}</div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {index + 1}. {factor.title}
                    </h2>
                    <p className="text-gray-600">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container max-w-7xl mx-auto">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`py-2 px-4 rounded-md font-semibold ${activeTab === "eligibility"
                  ? "bg-[#0282ba] text-white"
                  : "bg-gray-100 text-[#0282ba]"
                  }`}
              >
                Eligibility Criteria
              </button>
              <button
                onClick={() => setActiveTab("documents")}
                className={`py-2 px-4 rounded-md font-semibold ${activeTab === "documents"
                  ? "bg-[#0282ba] text-white"
                  : "bg-gray-100 text-[#0282ba]"
                  }`}
              >
                Documents Required
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "eligibility" && (
              <>
                <div className="text-center mb-6">
                  <h2 className="font-bold text-3xl text-[#0282ba]">
                    Eligibility Required for Personal Loan
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-left shadow-sm">
                    <thead className="bg-[#f0f9ff]">
                      <tr>
                        <th className="text-[#0282ba] py-3 px-4 border">Eligibility Criteria</th>
                        <th className="text-[#0282ba] py-3 px-4 border">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Occupation", "Salaried employees, self-employed professionals, self-employed non-professionals, and business owners"],
                        ["Age", "Minimum 21 years at loan application and maximum 60 years at loan maturity"],
                        ["Monthly Income", "₹20,000"],
                        ["Total Years in Job/Profession", "1 year continuous job or 3 years continuity in business"],
                        ["Credit Score", "650 & above"],
                      ].map(([criteria, detail]) => (
                        <tr key={criteria} className="even:bg-gray-50">
                          <td className="font-semibold py-3 px-4 border">{criteria}</td>
                          <td className="py-3 px-4 border">{detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 italic text-center mt-3">
                  *Personal loan eligibility criteria may differ from bank to bank.
                </p>
              </>
            )}

            {activeTab === "documents" && (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-[#0282ba] font-bold text-3xl">
                    Documents Required for Personal Loan
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-left text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th
                          className="text-center font-semibold py-3 px-4 border"
                          colSpan="2"
                        >
                          Details / Requirement
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* KYC Documents */}
                      <tr className="bg-blue-50">
                        <td colSpan="2" className="text-center font-semibold py-2 border">KYC Documents</td>
                      </tr>
                      {[
                        ["PAN Card", "Required"],
                        ["Aadhar Card", "Required"],
                        ["Driving License", "Optional"],
                        ["Voter ID", "Optional"],
                        ["Passport", "Optional"],
                        ["Registered Rent Agreement", "Optional"],
                        ["Gas Bill, E-Bill, Water Bill", "Required (as address proof)"]
                      ].map(([item, status]) => (
                        <tr key={item}>
                          <td className="py-3 px-4 border">{item}</td>
                          <td className="py-3 px-4 border">{status}</td>
                        </tr>
                      ))}

                      {/* Salaried */}
                      <tr className="bg-blue-50">
                        <td colSpan="2" className="text-center font-semibold py-2 border">
                          Income Documents – Salaried
                        </td>
                      </tr>
                      {[
                        ["Salary Slips", "Last 3 months, and bonus slip if any"],
                        ["Form 16 or 26AS", "Past 2 years"],
                        ["Latest 3 months' Salary Credit Banking", "Required"],
                        ["Company ID Card", "Required"],
                        ["BT Documents", "Required if any"]
                      ].map(([item, status]) => (
                        <tr key={item}>
                          <td className="py-3 px-4 border">{item}</td>
                          <td className="py-3 px-4 border">{status}</td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </section>


        <section>
          <div className="container my-5 max-w-7xl mx-auto space-y-8">
            {/* Heading with icon */}
            <h1 className="text-[#0282ba] font-bold text-3xl mb-4">
              <i className="bi bi-lightbulb me-2"></i>Points to Keep in Mind
              Before Taking a Personal Loan
            </h1>

            <ul className="list-group space-y-3">
              <li className="list-group-item p-4 border-b border-gray-300">
                <strong>Keep your credit score high:</strong> A credit score
                represents your creditworthiness based on your past repayment
                history. Try to repay your existing debts on time and regularly.
                Clear your existing loan before applying for a new one. This will
                improve your credit score. To avail of a loan, you should have a
                good credit score.
              </li>
              <li className="list-group-item p-4 border-b border-gray-300">
                <strong>Compare all the offers before applying:</strong> Make sure
                you compare the interest rates, eligibility, and other features of
                all personal loan options available before applying for a loan.
                This will ensure you get the low-interest rate personal loan and
                the best available offers.
              </li>
              <li className="list-group-item p-4 border-b border-gray-300">
                <strong>
                  Assess the entire cost before availing of the offer:
                </strong>{" "}
                Make sure you have assessed the total cost of your loan, including
                interest rates, processing fees, prepayment charges, and other
                hidden charges if any.
              </li>
              <li className="list-group-item p-4 border-b border-gray-300">
                <strong>Analyze your needs:</strong> Don't take a personal loan to
                fulfill any of your fancy desires. Remember, you are the one who
                will repay the loan, and with added interest. Consider borrowing a
                personal loan to finance your needs, not your wants.
              </li>
              <li className="list-group-item p-4 border-b border-gray-300">
                <strong>Evaluate your repayment capacity:</strong> Before
                borrowing, evaluate how capable you are of its repayment. Make
                sure your income is enough to repay EMIs each month for a few
                years without creating any financial burden.
              </li>
              <li className="list-group-item p-4 border-b border-gray-300">
                <strong>Don't fall for fake offers:</strong> All that glitters is
                not gold. Someone may offer you a concession on the interest rate
                on online loans and cashback offers but can trick you with
                additional costs, making your instant loan a more expensive deal.
              </li>
            </ul>

            <div className="text-center p-4 sm:p-10 my-4">
              <button
                className="bg-[#0282ba] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md"
                onClick={() => setIsFormOpen(true)} // 👉 show the form on click
              >
                Apply Now
              </button>

              {/* Reusable Modal Form */}
              <ApplyNowForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                loanTypeLabel="Loan"
              />

              <p className="mt-4 text-sm sm:text-base text-gray-700">
                for instant approval and faster processing of your loan.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <PartnersCarousel partnerLogos={partnerLogos} />
      </section>



    </div>
  );
};

export default PersonalLoan;
