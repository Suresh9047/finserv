import { useState } from 'react';
import investment1 from '../../assets/sample/investment1.png';
import Realestate from '../../assets/Investment-cards/real-estate.png';
import Mortarboard from '../../assets/Investment-cards/mortarboard.png';
import Moneybag from '../../assets/Investment-cards/money-bag.png';
import Unsecuredloan from '../../assets/Investment-cards/unsecured-loan.png';
import Creditcard from '../../assets/Investment-cards/credit-card.png';
import ReusableSlider from "../../components/ReusableSlider";
import InsuracePartners from '../../components/InsurancePartners';
import ICICILogo from '../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../assets/investments/max-life-logo.png';
import ApplyNowForm from '../../components/ApplyNowForm';

const slides = [
    {
        main: "Protection Plan",
        title: "Smart Secure Plus Plan",
        description: "Start your dream home journey with HDFC Bank.",
        iconUrl: Realestate,
        knowMoreLink: "./MAX-SmartSecurePlusPlan",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Saving Plan",
        title: "Smart Wealth Plan Solution",
        description: "Avail Loans against rent receivables.",
        iconUrl: Mortarboard,
        knowMoreLink: "./MAX-SmartWealthPlanSolution",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Saving Plan",
        title: "Smart Wealth Advantage Guarantee Plan",
        description: "Get quick and easy personal Loans.",
        iconUrl: Moneybag,
        knowMoreLink: "./MAX-SmartWealthAdvantage",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Saving Plan",
        title: "Smart Wealth Income Plan Solution",
        description: "Get quick and easy personal Loans.",
        iconUrl: Unsecuredloan,
        knowMoreLink: "./MAX-SmartWealthIncomePlan",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Saving Plan",
        title: "Future Genius Education Plan",
        description: "Get quick and easy personal Loans.",
        iconUrl: Creditcard,
        knowMoreLink: "./MAX-FutureGeniusEducationPlan",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "Flexi Wealth Advantage Plan",
        description: "Enjoy Multiple-rewards & Benefits with ICICI Bank Credit Card",
        iconUrl: Realestate,
        knowMoreLink: "./MAX-FlexiWealthAdvantagePlan",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "Fast Track Super",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Mortarboard,
        knowMoreLink: "./MAX-FastTrackSuper",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "Platinum Wealth Plan Plus Solution",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Moneybag,
        knowMoreLink: "./MAX-PlatinumWealthPlanPlus",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Retirement Plans",
        title: "Guaranteed Life Time Income Plan",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Unsecuredloan,
        knowMoreLink: "./MAX-GuaranteedLifeTimeIncomePlan",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
];


const MAXLife = () => {
    const items = [
        "Ensure financial protection for your family with HDFC Life’s term insurance plans, offering financial support in case of unexpected events.",
        "Access affordable premiums that offer substantial life cover, making protection accessible for everyone.",
        "Benefit from guaranteed income during retirement, giving you the freedom to live comfortably without worrying about financial constraints.",
        "Ensure a bright future for your child’s education, marriage, or other significant milestones with HDFC Life's child plans.",
    ];

    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);

    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleApplyNowClick = (slide) => {
        setSelectedPlan(slide);
        setIsFormOpen(true);
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Securing Your Future, One Investment at a Time
                        </h1>

                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                        >
                            START
                        </button>
                    </div>

                    {/* Right Image or SVG Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={investment1}
                            alt="Loan illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* Apply Now Modal */}
                <ApplyNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} loanTypeLabel="MAX Card" />
            </div>



            {/* Breadcrumb */}
            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">›</span>
                    <span>MAX Life</span>
                </nav>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <div className="containerpy-6">
                    <h1 className="text-3xl text-center text-[#0282ba] mb-4">INTRODUCTION</h1>
                    <p className="text-gray-700">
                        At Max Life Insurance, we believe in securing your future while helping you grow your wealth. Our wide range of investment plans is designed to offer financial stability, wealth creation, and life protection, ensuring that your hard-earned money works for you in the best way possible.

                        Whether you are planning for your child’s education, your retirement, or simply looking for tax-saving investment options, Max Life offers customized solutions tailored to your financial goals.
                    </p>
                </div>

                <div className="container py-8">
                    <h2 className="text-center text-[#ff8c00] text-4xl mb-6">Max Life Investments</h2>

                    <ul className="list-none mt-5 space-y-4">
                        {items.map((item) => (
                            <li key={item} className="text-[17px] leading-relaxed pl-6 relative">
                                <span className="absolute left-0 top-0 text-[#1d5a99] text-[16px]">✔</span>
                                {item}
                            </li>
                        ))}
                    </ul>


                </div>
                <ReusableSlider slides={slides} onApplyNowClick={handleApplyNowClick} />
                <ApplyNowForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    loanTypeLabel="Choose Inversements"
                    selectedPlan={selectedPlan}
                />

                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default MAXLife;