import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserShield,
    faBriefcaseMedical,
    faUserInjured,
    faShip,
    faWater,
} from '@fortawesome/free-solid-svg-icons';
import smeinsurance1 from '../../assets/sample/smeinsurance2.png';
import Chart from '../../components/InsuranceChartSection ';
import { FaAward, FaNetworkWired, FaBriefcase, FaLightbulb, FaShieldAlt, FaHeartbeat } from "react-icons/fa";
import img1 from "../../assets/insurence/img1.jpg";
import InsuracePartners from '../../components/InsurancePartners';
import ICICILOGO from '../../assets/insurence/icicilogo2.jpg';
import ApplyNowForm from "../../components/ApplyNowForm";


const SMEInsurance = () => {
    const [activeTab, setActiveTab] = useState('plans');
    const [activeTabs, setActiveTabs] = useState("claim");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const partnersData = [
        { name: 'ICICI Lombard', logo: ICICILOGO },
    ];
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <div>

            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Small and Medium Enterprises Insurance
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Securing your SME's future, today. Safeguard your SME from unexpected events. Our comprehensive insurance plans provide financial protection and peace of mind.
                        </p>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                        >
                            Apply Now
                        </button>


                    </div>

                    {/* Right Image or SVG Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={smeinsurance1}
                            alt="Loan illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* Apply Now Modal */}
                <ApplyNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} loanTypeLabel="Insurance" />
            </div>



            {/* Breadcrumb Section */}
            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">&gt;</span>
                    <span>SME Insurance</span>
                </nav>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <div className="mt-5">
                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 bg-[#f3f2e9] p-4">
                        {[
                            { key: 'plans', label: 'Employee Benefit' },
                            { key: 'marine', label: 'Marine Insurance' },
                            { key: 'property', label: 'Property Insurance' },
                            { key: 'liability', label: 'Liability Insurance' },
                            { key: 'engineering', label: 'Engineering Insurance' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                className={`px-4 py-2 text-sm font-medium focus:outline-none rounded-full transition-all ${activeTab === tab.key
                                    ? 'text-white bg-[#0283BB]'
                                    : 'text-gray-600 hover:text-gray-700'
                                    }`}
                                onClick={() => handleTabClick(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Plans Section */}
                    <div id="plans" className={`py-4 ${activeTab === 'plans' ? '' : 'hidden'}`}>
                        <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-6">Plans for Employee Benefit</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faUserShield} className="mr-2" />
                                Workmen’s Compensation Insurance
                            </div>
                            <div className="bg-[#0283BB] text-white rounded-md shadow-md p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faBriefcaseMedical} className="mr-2" />
                                Group Health Insurance
                            </div>
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faUserInjured} className="mr-2" />
                                Group Personal Accident Insurance
                            </div>
                        </div>
                    </div>

                    {/* Marine Section */}
                    <div id="marine" className={`py-4 ${activeTab === 'marine' ? '' : 'hidden'}`}>
                        <h2 className="text-center text-2xl font-semibold mb-4">Marine Insurance</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faShip} className="mr-2" />
                                Marine Transit Insurance
                            </div>
                            <div className="bg-[#0283BB] text-white rounded-md shadow-md p-4 flex items-center justify-center">
                                <FontAwesomeIcon icon={faWater} className="mr-2" />
                                Marine Open Insurance
                            </div>
                        </div>
                    </div>

                    {/* Property Section */}
                    <div id="property" className={`py-4 ${activeTab === 'property' ? '' : 'hidden'}`}>
                        <h2 className="text-center text-2xl font-semibold mb-4">Plans for Property Insurance</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">
                                ICICI Bharat Sookshma Udyam Suraksha Policy (Fire Insurance upto 5 crore)
                            </div>
                            <div className="bg-[#0283BB] text-white rounded-md shadow-md p-4">
                                ICICI Bharat Griha Raksha Policy (Housing Society)
                            </div>
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">
                                ICICI Bharat Laghu Udyam Suraksha Policy (Fire Insurance 5 crore to 50 crore)
                            </div>
                        </div>
                    </div>

                    {/* Liability Section */}
                    <div id="liability" className={`py-4 ${activeTab === 'liability' ? '' : 'hidden'}`}>
                        <h2 className="text-center text-2xl font-semibold mb-4">Plans for Liability Insurance</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">
                                Professional Indemnity for Medical Practitioners
                            </div>
                            <div className="bg-[#0283BB] text-white rounded-md shadow-md p-4">
                                Professional Indemnity Insurance for Chartered Accountants
                            </div>
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">
                                Corporate Cyber Insurance
                            </div>
                            <div className="bg-[#0283BB] text-white rounded-md shadow-md p-4">
                                Directors & Officers Insurance
                            </div>
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">
                                Comprehensive General Liability Insurance
                            </div>
                        </div>
                    </div>

                    {/* Engineering Section */}
                    <div id="engineering" className={`py-4 ${activeTab === 'engineering' ? '' : 'hidden'}`}>
                        <h2 className="text-center text-2xl font-semibold mb-4">Plans for Engineering Insurance</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">Contractor's All Risk Policy</div>
                            <div className="bg-[#0283BB] text-white rounded-md shadow-md p-4">Contractor's Plant and Machinery</div>
                            <div className="bg-[#FF8800] text-white rounded-md shadow-md p-4">Erection All Risk</div>
                        </div>
                    </div>
                </div>


                {/* Why choose ICICI Lombard section */}
                <Chart />

                <div className="bg-white py-12">
                    <div className="container text-center">
                        <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-6">Core differentiators that define our business</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                                <div className="text-4xl text-white bg-[#FF8800] rounded-full p-5 mb-4">
                                    <FaAward />
                                </div>
                                <p className="text-gray-700 font-medium">Strong Brand Equity</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                                <div className="text-4xl text-white bg-[#FF8800] rounded-full p-5 mb-4">
                                    <FaNetworkWired />
                                </div>
                                <p className="text-gray-700 font-medium">Extensive Service Network</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                                <div className="text-4xl text-white bg-[#FF8800] rounded-full p-5 mb-4">
                                    <FaBriefcase />
                                </div>
                                <p className="text-gray-700 font-medium">Comprehensive Product Portfolio</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                                <div className="text-4xl text-white bg-[#FF8800] rounded-full p-5 mb-4">
                                    <FaLightbulb />
                                </div>
                                <p className="text-gray-700 font-medium">Technology Differentiation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-10">
                    {/* Tabs */}
                    <ul className="flex flex-wrap md:flex-nowrap overflow-x-auto border-b justify-start md:justify-center gap-4 md:gap-6 pb-2">
                        {[
                            { key: "claim", label: "Claim Settlement" },
                            { key: "innovation", label: "Innovation" },
                            { key: "reinsurance", label: "Reinsurance Capacity" },
                        ].map(({ key, label }) => (
                            <li key={key}>
                                <button
                                    className={`whitespace-nowrap pb-2 border-b-2 transition-colors duration-200 ${activeTabs === key
                                        ? "border-[#0282ba] text-[#0282ba] font-semibold"
                                        : "border-transparent text-gray-600 hover:text-[#0282ba]"
                                        }`}
                                    onClick={() => setActiveTabs(key)}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-start">
                        {/* Image */}
                        <div className="flex justify-center">
                            <img
                                src={img1}
                                alt="Insurance"
                                className="rounded-lg shadow-lg w-full max-w-md md:max-w-full h-auto md:h-[400px] object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            {activeTabs === "claim" && (
                                <div className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-4">Claim Settlement</h3>
                                    <p className="mb-2">
                                        ICICI Lombard has a remarkable claim settlement ratio in India and leverages Artificial Intelligence (AI) and advanced analytics for automated processing of Insurance claims.
                                    </p>
                                    <p className="mb-2">
                                        It has pioneered the use of Artificial Intelligence and Machine Learning in health claim processing, reducing cashless claim request approval time to a few minutes.
                                    </p>
                                    <p>
                                        In segments such as frequency-driven marine cargo insurance claims portfolio, the company has introduced robotics to handle a large number of claims and reduce claim settlement turnaround time.
                                    </p>
                                </div>
                            )}

                            {activeTabs === "innovation" && (
                                <div className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-4">Innovation</h3>
                                    <p className="mb-2">
                                        We customize our insurance solutions based on customer needs and by harnessing our technological capabilities.
                                    </p>
                                    <p className="mb-2">
                                        We use the latest technology tools to help you at all stages of your relationship with us.
                                    </p>
                                    <p className="mb-2">
                                        Our All-in-One insurance solutions like Business Shield and Enterprise Secure comprehensively cover all your key business risks.
                                    </p>
                                    <p className="mb-2">
                                        Our value-added services like Marine loss control solutions and anti-hijacking solutions help in preventing and mitigating risk incidents.
                                    </p>
                                    <p>
                                        We leverage natural language processing and robotic process automation technology to provide a superior digital experience to our customers.
                                    </p>
                                </div>
                            )}

                            {activeTabs === "reinsurance" && (
                                <div className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-4">Reinsurance Capacity</h3>
                                    <p className="mb-2">
                                        We have built one of the most robust Reinsurance capacities and have expertise in structuring complex risks.
                                    </p>
                                    <p>
                                        We work with only stable and strong reinsurers which enables us with a strong risk framework.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="container mt-10 mb-10">
                    <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-6">Product Strength</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-center">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="text-green-500 mb-4">
                                <FaShieldAlt className="h-12 w-12 mx-auto" />
                            </div>
                            <h5 className="text-xl font-semibold mt-3">Workmen’s Compensation Insurance</h5>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="text-red-500 mb-4">
                                <FaHeartbeat className="h-12 w-12 mx-auto" />
                            </div>
                            <h5 className="text-xl font-semibold mt-3">Group Health Insurance</h5>
                        </div>
                    </div>
                </div>

                <InsuracePartners
                    heading="Trusted Insurance Partners"
                    partners={partnersData}
                />

            </div>
        </div>
    )
}

export default SMEInsurance;