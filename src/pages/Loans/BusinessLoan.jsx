import { useState } from "react";
import {
  FaMoneyBillWave,
  FaClipboardList,
  FaRupeeSign,
  FaFileAlt,
  FaBuilding,
  FaGlobe,
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import businessloan1 from '../../assets/loan_section/businessloan1.png';
import Business from '../../assets/loan_section/business.jpg';
import Calculator from '../../components/ReusableChartCalculator';
import ApplyNowForm from '../../components/ApplyNowForm';

const cards = [
  {
    icon: <FaMoneyBillWave />,
    title: 'Term Loans',
    description: 'ICICI Bank offers Term Loans for long-term capital investments like expansion or asset purchase.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Working Capital Finance',
    description: 'Financing to manage daily operational expenses and cash flow needs effectively.',
  },
  {
    icon: <FaRupeeSign />,
    title: 'GST Returns',
    description: 'Loans to ease the burden of GST payments and maintain working capital efficiency.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Loans Without Financials',
    description: 'Hassle-free loans available without needing extensive financial documents.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Collateral Free Loans',
    description: 'Loans up to ₹2 crore available under CGTMSE, with no collateral required.',
  },
  {
    icon: <FaBuilding />,
    title: 'New Entities',
    description: 'Funding solutions for newly established businesses without long financial history.',
  },
  {
    icon: <FaGlobe />,
    title: 'Import Export Finance',
    description: 'Customized financing for export/import businesses to manage cross-border operations.',
  },
];


const calculateLoanEMI = ({ loanAmount, loanTerm, interestRate }) => {
  const principal = loanAmount;
  const tenure = loanTerm * 12;
  const rate = interestRate / 1200;
  const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
  const total = emi * tenure;
  const interest = total - principal;

  return { emi, principal, interest, total };
};

const loanInputs = [
  { name: 'loanAmount', label: 'Loan Amount', min: 10000, max: 1000000, step: 1000, defaultValue: 500000, prefix: '₹' },
  { name: 'interestRate', label: 'Interest Rate (p.a.)', min: 1, max: 20, step: 0.1, defaultValue: 8.5, suffix: '%' },
  { name: 'loanTerm', label: 'Loan Term (in years)', min: 1, max: 8, step: 1, defaultValue: 5 },
];

import PropTypes from 'prop-types';

const LoanCard = ({ icon, title, description }) => {
  const [showDesc, setShowDesc] = useState(false);

  const toggleDescription = () => {
    setShowDesc((prev) => !prev);
  };



  return (
    <div className="relative bg-white rounded-xl p-6 w-full min-h-[250px] shadow transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="text-orange-600 text-4xl">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {showDesc && <p className="text-sm text-gray-600">{description}</p>}
        <button
          type="button"
          onClick={toggleDescription}
          className="text-[#0282ba] font-medium mt-2 underline hover:text-orange-500 focus:outline-none transition"
          aria-label="Know More"
        >
          Know More
        </button>
      </div>
      <button
        onClick={toggleDescription}
        className="absolute bottom-4 right-4 text-white bg-orange-500 p-1.5 rounded-full hover:bg-orange-600 transition"
        aria-label="Toggle Description"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

LoanCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


const BusinessLoan = () => {
  const [activeTab, setActiveTab] = useState("eligibility");

  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: 'What is a business loan?',
      answer:
        'A business loan is a type of financing provided to entrepreneurs and enterprises to support business operations, expansion, equipment purchase, or working capital needs.',
    },
    {
      question: 'Who can apply for a business loan?',
      answer:
        'Business loans are available to self-employed individuals, proprietors, partnership firms, private limited companies, and MSMEs with a proven track record and income.',
    },
    {
      question: 'Is collateral required to get a business loan?',
      answer:
        'Many lenders offer unsecured business loans with no collateral requirement. However, secured loans may offer better interest rates and higher limits.',
    },
    {
      question: 'How can I apply for a business loan online?',
      answer: 'You can apply by filling out a simple online form, uploading required documents, and submitting for verification. A loan expert may contact you to complete the process.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);


  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-100 to-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Business Loan</h1>
            <p className="text-gray-600 text-lg mb-6">
              Get easy, collateral-free loans to boost your business plans. Boost your business quickly and stay ahead of the competition with our specially designed business loans.
            </p>
            <button
              className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
              onClick={() => setIsFormOpen(true)}
            >
              Apply Now
            </button>

            {/* Reusable Modal Form */}
            <ApplyNowForm
              isOpen={isFormOpen}
              onClose={() => setIsFormOpen(false)}
              loanTypeLabel="Loan"
            />

          </div>
          {/* Right Image or SVG Illustration */}
          <div className="flex justify-center">
            <img
              src={businessloan1}
              alt="Loan illustration"
              className="max-w-full h-[450px]"
            />
          </div>
        </div>
      </div>


      {/* Breadcrumb */}
      <div className="bg-[#fbfbfb] pl-12 py-3">
        <nav className="text-gray-600 text-sm flex items-center space-x-2">
          <a href="/" className="hover:underline text-[#0282ba]">Home</a>
          <span className="text-gray-400">&gt;</span>
          <span>Business Loan</span>
        </nav>
      </div>

      {/* Overview Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
        <section className="container bg-white py-8">
          <div className="row">
            <h2 className="text-4xl text-[#0282ba] font-bold mb-4">Introduction</h2>
            <p className="mb-4">Get easy, collateral-free loans to boost your business plans.</p>
            <p className="mb-4">Boost your business quickly and stay ahead of the competition with our specially designed business loans to upgrade or expand your company.</p>
            <p className="mb-4">If you’re looking to fund your business, you need the necessary capital to move forward. Build your infrastructure, upgrade inventory, enhance working capital, purchase equipment, expand operations or boost any area of your business with ICICI Bank’s business loan solutions from ICICI Direct.</p>
            <p>Upon eligibility, you can avail of various products under business installment loans [BIL] to repay in equal installments at fixed intervals. You can also benefit from flexible repayment options such as pre-closure or prepayment on the BIL after 12 EMIs by paying the applicable pre-closure charges.</p>
          </div>
        </section>

        {/* About Section */}
        <section className="container bg-white py-10">
          <div className="row">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src={Business} alt="About Business Loan" className="w-full rounded" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl text-[#0282ba] font-bold mb-4">ABOUT BUSINESS LOAN</h2>
                <p className="mb-4">When you have a personal financial requirement to meet, you turn to banks and apply for a loan to fulfill it. You can do the same to meet the financial requirements of your business. Whether it’s startup costs, working capital requirement, financing required for inventory purchase, marketing and advertising, or even debt consolidation, you can opt for a Business Loan to meet any requirement. It is one of the simplest ways to avail formal source of funds.</p>
                <p className="mb-4">Business Loan ensures inadequate finances do not come in the way of setting up and growing your business. The loan amount is offered at competitive interest rates and flexible repayment terms, allowing you to repay the loan without any worry and hassles.</p>
                <p>There are different types of Business Loans you can apply for like Term loans, Working Capital loans, Machinery loans, Overdraft facilities, and more. There are a number of Business Loans under Government schemes as well. You can choose to apply for any type of loan based on your eligibility and requirement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Options Section */}
        <section className="container bg-[#fff8f3] py-12">
          <div className="row">
            <h2 className="text-4xl font-bold text-[#007bba] mb-10">Loan Option</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card) => (
                <LoanCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container bg-white py-10">
          <div className="row">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0282ba]">
              Benefits of Applying <span className="font-bold">for a Business Loan</span>
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Flexibility of usage',
                  desc: 'In case you get an investor on board for financing, you need to dilute your ownership in the business and they get voting rights in your company. By applying for a loan, you enjoy maximum flexibility of usage. The bank does not hold any company voting rights or dictate its operations. They are simply concerned about receiving time repayments. This allows you to run your business the way you want to, without any interference diluting shareholding.',
                },
                {
                  title: 'No profit sharing',
                  desc: 'Adding to the point mentioned above, when you have an investor on board, you will likely have to share your profits with them. That’s not the case when you apply for a Business Loan. You just have to repay the principal sum and the interest incurred, and not a penny more.',
                },
                {
                  title: 'Quick disbursal',
                  desc: 'Are you racing to meet a big client order and need financing to buy the necessary inventory? Apply for a Business Loan right away. You can apply for the loan by visiting the nearest bank branch or online. On approval, the loan amount is directly credited to your bank account. This promises maximum security and instant accessibility to funds.',
                },
              ].map((benefit, idx) => (
                <div key={benefit.title.replace(/\s+/g, '-').toLowerCase()} className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-[#0282ba] w-10 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-semibold text-orange-500">{benefit.title}:</span>{' '}
                    {benefit.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <Calculator title="EMI Calculator" inputs={loanInputs} calculate={calculateLoanEMI} resultTitle = "EMI Amount" buttonchange = "Calculate Loan" />

        <section className="container bg-[#f0f7ff] py-6">
          <div className="row">
            <h2 className="text-4xl font-bold text-[#0282ba] mb-6">Eligibility & Documents</h2>

            {/* Loan Menu */}
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 font-semibold border rounded ${activeTab === "eligibility" ? "bg-[#0282ba] text-white" : "bg-white text-[#0282ba] border-[#0282ba]"
                  }`}
                onClick={() => setActiveTab("eligibility")}
              >
                Eligibility Criteria
              </button>
              <button
                className={`px-4 py-2 font-semibold border rounded ${activeTab === "documents" ? "bg-[#0282ba] text-white" : "bg-white text-[#0282ba] border-[#0282ba]"
                  }`}
                onClick={() => setActiveTab("documents")}
              >
                Required Documents
              </button>
            </div>

            {/* Eligibility Section */}
            {activeTab === "eligibility" && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr className="bg-[#0282ba] text-white">
                      <th className="px-4 py-2 text-left">Eligibility Criteria</th>
                      <th className="px-4 py-2 text-left">Self-Employed Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2">Age</td>
                      <td className="px-4 py-2">
                        28 years (self-employed individuals) and 25 years (for doctors); Maximum age - 65 years
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Minimum Turnover</td>
                      <td className="px-4 py-2">
                        Rs. 40 lakh for non-professionals; Rs. 15 lakh for professionals; as per audited financials
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Minimum Profit After Tax</td>
                      <td className="px-4 py-2">
                        Rs. 2 lakh for Proprietorship Firm/Self-employed Individuals and Rs. 1 lakh for non-professionals as per audited financials
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Business Stability</td>
                      <td className="px-4 py-2">
                        In current business for at least 5 years and minimum 3 years for doctors
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Bank Relationship</td>
                      <td className="px-4 py-2">
                        Minimum 1-year liability relationship (current or savings account) or Asset relationship (loan) either live or closed in the last 36 months; repayment track record required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Documents Section */}
            {activeTab === "documents" && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr className="bg-[#0282ba] text-white">
                      <th className="px-4 py-2 text-left">Document Type</th>
                      <th className="px-4 py-2 text-left">Required Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Financial Statements</td>
                      <td className="px-4 py-2">
                        Last 3 years Audited/Provisional Financials (Balance Sheet, Profit and Loss Account along with schedules and Notes to Accounts, Tax audit reports, Statutory Audit report).
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">VAT Returns</td>
                      <td className="px-4 py-2">Required for Provisional financials.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Business Performance</td>
                      <td className="px-4 py-2">Projected turnover on letterhead of the entity.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Income Tax Returns</td>
                      <td className="px-4 py-2">
                        Last 1 year Income Tax returns of the borrowing entity (along with Computation of Income and copy of acknowledgment).
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Business Entity Proof</td>
                      <td className="px-4 py-2">
                        Partnership deed/Certificate of Incorporation/Shops and Establishment certificate.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">PAN Card</td>
                      <td className="px-4 py-2">
                        Copy of PAN Card of Entity, Proprietors/Partners/Directors, Security providers, and guarantors.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Address Proof</td>
                      <td className="px-4 py-2">
                        Address Proof of Entity, Proprietors/Partners/Directors, Security providers, and guarantors.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Proof of Continuity of Business Income</td>
                      <td className="py-3 px-4 border-b">Bank Account Statements</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">GST Registration Certificate</td>
                      <td className="py-3 px-4 border-b">Required</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">UDAYM</td>
                      <td className="py-3 px-4 border-b">Required</td>
                    </tr>
                    {/* Self Employed */}
                    <tr className="bg-blue-50">
                      <td colSpan="2" className="text-center font-semibold py-2 border">
                        Income Documents – Self-Employed / Business Owners
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Business Registration Proof</td>
                      <td className="py-3 px-4 border-b">Required</td>
                    </tr>
                     <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">ITR with Computation</td>
                      <td className="py-3 px-4 border-b">Past 2 years</td>
                    </tr>
                     <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Profit & Loss Statement</td>
                      <td className="py-3 px-4 border-b">Latest FY or 6 months</td>
                    </tr>
                     <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Bank Statement of Business Account</td>
                      <td className="py-3 px-4 border-b">Latest 6 months</td>
                    </tr>
                     <tr className="border-t">
                      <td className="px-4 py-2 font-semibold">Office Address Proof</td>
                      <td className="py-3 px-4 border-b">Required</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            )}

            <h3 className="text-sm text-gray-700 mt-6">
              <span className="font-semibold">Disclaimer:</span> This is an indicative list only. Additional documents may be asked for on a case-to-case basis.
            </h3>
          </div>
        </section>

        <section className="container py-10 px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0282ba] mb-8">FAQ</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border rounded-lg">
                <button
                  className="w-full flex justify-between items-center px-4 py-6 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                  <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 text-gray-700 bg-white border-l-4 border-[#0282ba]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};



export default BusinessLoan;
