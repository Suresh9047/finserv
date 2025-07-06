import { useState } from 'react';
import investment1 from '../../assets/sample/investment1.png';
import Realestate from '../../assets/Investment-cards/real-estate.png';
import Mortarboard from '../../assets/Investment-cards/mortarboard.png';
import Personal from '../../assets/Investment-cards/personal.png';
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
        main: "Protection Plans",
        title: "ICICI Pru iProtect Smart",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Realestate,
        knowMoreLink: "./ICICI-PruiProtectSmart",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Protection Plans",
        title: "ICICI PRU iPROTECT RETURN OF PREMIUM ",
        description: "A better Home starts with a better Loan!",
        iconUrl: Mortarboard,
        knowMoreLink: "./ICICI-PruiProtectReturnofPremium",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Protection Plans",
        title: "ICICI Pru Protect N Gain",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Personal,
        knowMoreLink: "./ICICI-PruProtectNGain",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Saving Plan",
        title: "ICICI Pru Guaranteed Income For Tomorrow (LUMPSUM) ",
        description: "Avail Loans against rent receivables.",
        iconUrl: Moneybag,
        knowMoreLink: "./ICICI-PruGuaranteedIncomeForTomorrow",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Saving Plan",
        title: "ICICI Pru GIFT Pro",
        description: "Get quick and easy personal Loans.",
        iconUrl: Unsecuredloan,
        knowMoreLink: "./ICICI-PruGiftPro",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "ICICI PRU SIGNATURE",
        description: "Enjoy Multiple-rewards & Benefits <br>with ICICI Bank Credit Card",
        iconUrl: Creditcard,
        knowMoreLink: "./ICICI-PruSignature",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "ICICI Pru Gold",
        description: "Start your dream home journey with ICICI Bank",
        iconUrl: Personal,
        knowMoreLink: "./ICICI-PruGold",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "ICICI Pru Life Time Classic",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Moneybag,
        knowMoreLink: "./ICICI-PruLifeTimeClassic",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "ULIP",
        title: "ICICI Pru Smart Life",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Unsecuredloan,
        knowMoreLink: "./ICICI-PruSmartLife",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Retirement Plans",
        title: "ICICI Pru Guaranteed Pension Plan ",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Creditcard,
        knowMoreLink: "./ICICI-PruGuaranteedPensionPlan",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
    {
        main: "Retirement Plans",
        title: "ICICI Pru Guaranteed Pension Plan Flexi",
        description: "Start your dream home journey with ICICI Bank.",
        iconUrl: Personal,
        knowMoreLink: "./ICICI-PruGuaranteedPensionPlanFlexi",
        knowMoreText: "know More",
        applyNowText: "Apply Now",
    },
];


const ICICIDirectPlans = () => {
    const items = [
        "ULIPs combine the benefits of insurance and investment, offering you a chance to invest in a wide range of asset classes such as equity balanced funds.",
        "These plans offer guaranteed returns along with the benefit of life cover. They are designed to help you save systematically for future milestones.",
        "Tailor your policy to suit your financial goals with varying premium options and coverage plans.",
        "Enjoy additional bonuses that add to your investment, enhancing the overall returns."
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
                <ApplyNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} loanTypeLabel="ICICI Card" />
            </div>


            {/* Breadcrumb */}
            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">›</span>
                    <span>ICICI Direct Plans</span>
                </nav>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <div className="container py-6">
                    <h1 className="text-3xl text-center text-[#0282ba] mb-4">INTRODUCTION</h1>
                    <p className="text-gray-700">
                        ICICIdirect offers a wide variety of loan products from ICICI Bank, catering to diverse financial needs. Whether
                        you are looking for funds to buy a home, expand your business, fulfill personal aspirations, or manage your
                        working capital, ICICI Bank provides tailored solutions with competitive interest rates, flexible repayment
                        options, and seamless digital processing.
                    </p>
                </div>

                <div className="container py-8">
                    <h2 className="text-center text-[#ff8c00] text-4xl mb-6">ICICI Life Investments</h2>

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
                    loanTypeLabel="Choose Inversement"
                    selectedPlan={selectedPlan}
                    
                />

                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    );
};

export default ICICIDirectPlans;
