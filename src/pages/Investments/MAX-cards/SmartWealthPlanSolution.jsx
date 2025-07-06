import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import {
    FaPiggyBank,
    FaCoins,
    FaSlidersH,
    FaUserFriends,
    FaShieldAlt,
    FaFileInvoiceDollar,
    FaPlusCircle
} from 'react-icons/fa';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

export const SmartWealthPlanSolution = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    const features = [
        {
            icon: <FaPiggyBank />,
            title: "Guaranteed Returns",
            desc: "Fully guaranteed benefits to help you save for your milestones."
        },
        {
            icon: <FaCoins />,
            title: "Guaranteed Additions",
            desc: "Guaranteed additions that boost your maturity corpus under lump sum option."
        },
        {
            icon: <FaSlidersH />,
            title: "Flexibility",
            desc: "Flexibility to choose plan option as per your need - lump sum, short-term income, long-term income and whole life income."
        },
        {
            icon: <FaUserFriends />,
            title: "Joint Life Coverage",
            desc: "Flexibility to cover life of spouse under the same Policy with whole life income option."
        },
        {
            icon: <FaShieldAlt />,
            title: "Financial Security",
            desc: "Comprehensive death benefit in case of death of Life Insured during the Policy Term, provided the Policy is in force."
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: "Tax Benefit",
            desc: "You may be eligible for tax benefits as per prevailing tax laws subject to changes in tax laws."
        },
        {
            icon: <FaPlusCircle />,
            title: "Enhanced Protection",
            desc: "Additional rider(s) can be taken with the Policy to provide for additional protection as per your need."
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Max Life Insurance<br />
                            <span className="text-[#ff8c00]">Smart Wealth Plan Solution</span>
                        </h1>


                    </div>
                </div>

            </div>

            {/* Intro Section */}
            <div className="container mx-auto px-4 py-4">
                <h3 className="text-[#0282ba] text-3xl mb-3 text-center">
                    Smart Wealth Plan Solution- Joint life - Protection Policies
                </h3>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <p className="text-[19px] text-gray-700">
                            Life is all about fulfilling your dreams for your loved ones. You plan to save for your milestones like your children’s education, marriage and your peaceful retirement. However, in an environment, which is full of uncertainty and volatility, you need guaranteed assurance, that surmounts all such risks. We understand the significance of such milestones and secure your financial future by helping you pursue your dreams towards the accomplishment of these milestones with certainty.
                        </p>
                        <p className="text-[19px] text-gray-700">
                            Presenting Max Life Smart Wealth Plan, which combines protection and savings into a simple and flexible solution to fulfill the certain as well as uncertain needs of your family and assures you and your loved ones a guaranteed smart life.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <div className="rounded-lg shadow-lg p-2 border border-blue-200">
                            <img
                                src={Lifeinsurance}
                                alt="Life Insurance"
                                className="w-60 h-40 rounded-md"
                            />
                            <p className="text-center text-sm font-medium text-[#0283BB] mt-2">Life Insurance</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mb-5">
                <div className="container max-w-5xl mx-auto mt-5">
                    <h1 className="text-center text-[#0282ba] text-3xl mb-6">What this plan offers you</h1>
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
                                        <p className="text-gray-600 transition-all duration-300 group-hover:text-white">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <InsuracePartners
                heading="Trusted Investment Partners"
                partners={partnersData}
            />
        </div>
    );
};
