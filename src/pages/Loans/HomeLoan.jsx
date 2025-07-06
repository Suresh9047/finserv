import { useState } from "react";
import { FaMoneyBillWave, FaHome, FaLightbulb, FaUniversity, FaHeadset, FaWallet, FaPercent, FaRedoAlt, FaClock } from "react-icons/fa";
import homeloan1 from '../../assets/loan_section/homeloan1.png';
import Calculator from '../../components/ReusableChartCalculator';
import ApplyNowForm from '../../components/ApplyNowForm';


const SectionTabs = () => {
  const [activeSection, setActiveSection] = useState('');
  const [activeTab, setActiveTab] = useState("eligibility");

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? '' : section));
  };


  const [active, setActive] = useState("lowest-interest");

  const options = [
    { id: "lowest-interest", title: "LOWEST INTEREST RATES", Icon: FaMoneyBillWave },
    { id: "nri-home-loans", title: "NRI HOME LOANS", Icon: FaHome },
    { id: "key-features", title: "KEY FEATURES & BENEFITS", Icon: FaLightbulb },
    { id: "multiple-lenders", title: "CHOICE OF MULTIPLE LENDERS", Icon: FaUniversity },
    { id: "customer-service", title: "DEDICATED CUSTOMER SERVICE", Icon: FaHeadset },
  ];

  const content = {
    "lowest-interest": {
      heading: "Lowest Interest Rates",
      points: [
        "With the choice of multiple lenders, customers would be able to get higher sanction and best rate in the industry.",
        "Interest rate as per Cibil Score and sole discretion of lending partner.",
      ],
    },
    "nri-home-loans": {
      heading: "NRI Home Loans",
      points: [
        "Easy, Hassle-free and convenient",
        "Flexible Loan Tenure",
        "Doorstep Service",
        "Attractive Interest Rates",
      ],
    },
    "key-features": {
      heading: "Key Features & Benefits",
      points: [
        "Dedicated Home Loan Expert. Doorstep Service.",
        "Choice of multiple lenders",
        "Higher Sanction value",
        "Higher Approved rate",
      ],
    },
    "multiple-lenders": {
      heading: "Choice of Multiple Lenders",
      points: [
        "Dedicated Home Loan Expert.",
        "With the choice of 9 lenders, the approval and sanction ratio is high.",
      ],
    },
    "customer-service": {
      heading: "Dedicated Customer Service",
      points: [
        "Get in touch for your queries and service related complaints",
      ],
    },
  };

  const inputs = [
    {
      name: 'loanAmount',
      label: 'Loan Amount (₹)',
      min: 100000,
      max: 100000000,
      step: 10000,
      defaultValue: 3000000,
      prefix: '₹',
    },
    {
      name: 'interestRate',
      label: 'Interest Rate (p.a.)',
      min: 6,
      max: 15,
      step: 0.1,
      defaultValue: 8.5,
      suffix: '%',
    },
    {
      name: 'loanTerm',
      label: 'Loan Term (in years)',
      min: 1,
      max: 30,
      step: 1,
      defaultValue: 4,
    },
  ];

  const calculateHomeLoanEMI = ({ loanAmount, loanTerm, interestRate }) => {
    const principal = loanAmount;
    const tenure = loanTerm * 12;
    const rate = interestRate / 1200;

    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    const total = emi * tenure;
    const interest = total - principal;

    return { emi, principal, interest, total };
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: ' What is a Home Loan?',
      answer:
        ' A home loan is a secured loan offered by banks or financial institutions to help individuals purchase, build, or renovate a home.',
    },
    {
      question: 'Who can apply for a Home Loan?',
      answer:
        ' Salaried individuals, self-employed professionals, and NRIs with a stable income and good credit score are eligible to apply.',
    },
    {
      question: 'Can I prepay my Home Loan?',
      answer:
        ' Yes. Most lenders allow prepayment or foreclosure. However, check if any charges apply, especially for fixed-rate loans.',
    },
    {
      question: 'How is the loan eligibility amount calculated?',
      answer: ' Loan eligibility is calculated based on various factors such as your income, existing debts, credit score, age, employment status, and repayment capacity. Lenders use these criteria to determine the maximum loan amount you can borrow.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);






  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="bg-gradient-to-b from-blue-100 to-white py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Home Loan</h1>
              <p className="text-gray-600 text-lg mb-6">
                Build your dream home with flexible financing options. Secure your future and create lasting memories with our tailored home loan solutions.
              </p>
              <button
                className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                onClick={() => setIsFormOpen(true)}
              >
                Apply Now
              </button>

              {/* Modal Form */}
              <ApplyNowForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                loanTypeLabel="Loan"
              />
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img src={homeloan1} alt="Loan illustration" className="max-w-full h-[430px]" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#fbfbfb] pl-12 py-3">
        <nav className="text-gray-600 text-sm flex items-center space-x-2">
          <a href="/" className="hover:underline text-[#0282ba]">
            Home
          </a>
          <span className="text-gray-400">&gt;</span>
          <span>Home Loan</span>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
        <section>
          <div className="container py-8  max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-[#0282ba] font-bold text-2xl">INTRODUCTION</h2>
              <p>
                Buying a home is a dream for many individuals. A housing property is not only a high-value asset
                but also carries invaluable emotional significance and offers monetary assurance. It secures the
                financial future of you and your loved ones.
              </p>
              <p>
                ICICI Direct understands what owning a home means to every individual. Every individual should be
                able to experience the joy and pride of owning a home and hence, home loans are a great way to
                finance a house purchase.
              </p>
              <p>
                Applying for a Home Loan is the easiest way to realise your dream of buying a home. You can receive
                financing at reasonable interest rates and repay it as per your affordability in Equated Monthly
                Installments (EMI). You can apply for a Loan by visiting the nearest bank branch or online.
              </p>
            </div>

            <div className="container py-6">
              {/* Options Row */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {options.map(({ id, title, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active === id}
                    onClick={() => setActive(id)}
                    className={`flex flex-col items-center w-44 p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 focus:outline-none ${active === id
                      ? "bg-orange-50 border-b-4 border-orange-500"
                      : "bg-white hover:bg-gray-100"
                      }`}
                  >
                    <Icon className={`text-4xl mb-4 ${active === id ? "text-orange-500" : "text-[#0282ba]"}`} />
                    <div className={`text-center font-semibold ${active === id ? "text-orange-500" : "text-[#0282ba]"}`}>
                      {title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Content Section */}
              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">{content[active].heading}</h2>
                <ul className="text-left list-disc list-inside mb-6 space-y-2 text-gray-700">
                  {content[active].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold text-[#0282ba] mb-2">
                  MAKE YOUR DREAM HOME COME TRUE WITH A DREAM LOAN
                </h3>
                <p className="text-gray-600">
                  If you’re looking to buy that house of your choice or wish to build it from the ground up, it’s time to take action now...
                </p>
              </div>
            </div>



          </div>
        </section>

        <section>
          <div className="container py-8 max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0282ba] mb-8 ">
              HOME LOAN FEATURES
            </h1>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <FaWallet className="text-5xl sm:text-7xl text-[#0282ba] mb-4 sm:mb-0 p-2" />
                <div>
                  <h3 className="text-xl sm:text-2xl text-[#FF8800] font-semibold mb-2">Avail a Significant Amount</h3>
                  <p className="text-gray-600">
                    By applying for a Home Loan you avail a significant amount and finance your house purchase easily. The maximum loan amount offered varies for each bank. It is also influenced by your personal profile. Your repayment capacity, credit score, and property value are key deciders in your loan eligibility and its subsequent offering.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <FaPercent className="text-5xl sm:text-6xl text-[#0282ba] mb-4 sm:mb-0 p-2" />
                <div>
                  <h3 className="text-xl sm:text-2xl text-[#FF8800] font-semibold mb-2">Competitive Interest Rates</h3>
                  <p className="text-gray-600">
                    You can avail the loan amount at competitive interest rates. This ensures your dream of buying a house, does not lead you to be feeling burdened with high-interest liabilities. The interest rate again varies based on your profile. A solid financial profile and excellent credit score are a must to negotiate for the best interest rates.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <FaRedoAlt className="text-5xl sm:text-6xl text-[#0282ba] mb-4 sm:mb-0 p-2" />
                <div>
                  <h3 className="text-xl sm:text-2xl text-[#FF8800] font-semibold mb-2">Flexible Repayment Terms</h3>
                  <p className="text-gray-600">
                    You repay your loan amount in equal monthly instalments which makes it easier for you to plan your finances hassle-free. Choose a suitable tenure considering your affordability.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <FaClock className="text-5xl sm:text-6xl text-[#0282ba] mb-4 sm:mb-0 p-2" />
                <div>
                  <h3 className="text-xl sm:text-2xl text-[#FF8800] font-semibold mb-2">Quick Disbursal</h3>
                  <p className="text-gray-600">
                    You do not have to wait for several days to be able to start living in your dream home. Once you have completed the application process, met the eligibility criteria, and had your documents verified, your loan request is approved in no time. Furthermore, on approval, the loan amount is disbursed within the shortest possible time frame.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-12">
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-gray-300">
            <button
              onClick={() => setActiveTab("eligibility")}
              className={`px-4 py-2 font-semibold ${activeTab === "eligibility"
                ? "text-[#0282ba] border-b-2 border-[#0282ba]"
                : "text-gray-500"
                }`}
            >
              Eligibility Criteria
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-4 py-2 font-semibold ${activeTab === "documents"
                ? "text-[#0282ba] border-b-2 border-[#0282ba]"
                : "text-gray-500"
                }`}
            >
              Documents Required
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "eligibility" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0282ba]">Eligibility Criteria</h2>
              <table className="table-auto w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="text-[#0282ba] py-3 px-4 text-left border">Criteria</th>
                    <th className="text-[#0282ba] py-3 px-4 text-left border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold py-3 px-4 border">Age</td>
                    <td className="py-3 px-4 border">Applicant must be at least 21 years old and not more than 65 years at loan maturity.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 px-4 border">Income</td>
                    <td className="py-3 px-4 border">Stable source of income with proof of employment or business.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 px-4 border">Credit Score</td>
                    <td className="py-3 px-4 border">Good credit score (typically 750+ for best interest rates).</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 px-4 border">Property Approval</td>
                    <td className="py-3 px-4 border">Property must be approved by lending bank.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 px-4 border">Work Experience</td>
                    <td className="py-3 px-4 border">Minimum work experience of 2 years (for salaried individuals).</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 italic">
                *Eligibility criteria may vary between banks and loan providers.
              </p>
            </div>
          )}

          {activeTab === "documents" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0282ba]">Documents Required</h2>
              <p className="text-gray-700">
                To process your home loan application smoothly, please ensure you have the following documents ready:
              </p>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th colSpan="2" className="bg-blue-200 text-center font-bold py-3">
                        Document Type / Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Identity Proof */}
                    <tr><td colSpan="2" className="bg-blue-100 font-bold text-center py-2">Identity Proof</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Aadhar Card</td><td className="py-3 px-4 border-b">Required</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">PAN Card</td><td className="py-3 px-4 border-b">Required</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Voter ID</td><td className="py-3 px-4 border-b">Optional</td></tr>

                    {/* Address Proof */}
                    <tr><td colSpan="2" className="bg-blue-100 font-bold text-center py-2">Address Proof</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Utility Bills</td><td className="py-3 px-4 border-b">Optional</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Rental Agreement</td><td className="py-3 px-4 border-b">Optional</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Passport</td><td className="py-3 px-4 border-b">Optional</td></tr>

                    {/* Income Proof */}
                    <tr><td colSpan="2" className="bg-blue-100 font-bold text-center py-2">Income Proof</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Salary Slips</td><td className="py-3 px-4 border-b">Required</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Bank Statements</td><td className="py-3 px-4 border-b">Required</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Income Tax Returns</td><td className="py-3 px-4 border-b">Required</td></tr>

                    {/* Property Documents */}
                    <tr><td colSpan="2" className="bg-blue-100 font-bold text-center py-2">Property Documents</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Sale Agreement</td><td className="py-3 px-4 border-b">Required</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Title Deed</td><td className="py-3 px-4 border-b">Required</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Property Tax Receipts</td><td className="py-3 px-4 border-b">Required</td></tr>

                    {/* Others */}
                    <tr><td colSpan="2" className="bg-blue-100 font-bold text-center py-2">Others</td></tr>
                    <tr className="odd:bg-gray-100"><td className="py-3 px-4 border-b">Passport-size Photographs</td><td className="py-3 px-4 border-b">Required</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 italic text-center">
                Having these documents handy will speed up your loan processing and approval.
              </p>
            </div>
          )}
        </section>

        <section>
          <Calculator title="EMI Calculator" inputs={inputs} calculate={calculateHomeLoanEMI} resultTitle = "EMI Amount" buttonchange = "Calculate Loan"/>
        </section>

        <section className="container py-12 bg-white rounded-2xl shadow-lg mt-12 max-w-7xl mx-auto mb-3">
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

    </>
  );

}

const styles = {
  sectionBox: {
    background: '#f9f9f9',
    border: '1px solid #ddd',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
};

export default SectionTabs;
