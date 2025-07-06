import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import ReusePlanOffersYou from '../../../components/ReusePlanOffersYou';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const SmartWealthAdvantage = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
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
                            <span className="text-[#ff8c00]">Smart Wealth Advantage Guarantee Plan</span>
                        </h1>


                    </div>
                </div>

            </div>

            {/* Intro Section */}
            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5">
                        What the Max Life Smart Wealth Advantage Guarantee Plan has in store for you
                    </h1>
                    <p className="text-gray-700">
                        Every individual's financial needs are different and with a host of features available under Max Life Smart Secure Plus Plan, you can choose the ones you like and customize your Term Plan from the following options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <h3 className="text-[#ff8c00] text-2xl mb-3">
                            Max Life Smart Wealth Advantage Guarantee Plan
                        </h3>
                        <p className="text-[19px] text-gray-700">
                            As you grow, your needs and aspirations also keep growing, whether it is buying your dream house, your child’s education or your peaceful retirement. We understand the significance of your milestones in life and aim to help you protect them.
                            Presenting Max Life Smart Wealth Advantage Guarantee Plan, that gives you an unmatched flexibility to grow your wealth and protect your loved ones! It gives enhanced protection with guaranteed return on your savings and offers a highly customizable solution to fulfil the certain as well as uncertain needs of your family, assuring you and your loved ones a guaranteed smart life. Tax Benefits - You may be eligible for tax benefits as per prevailing tax laws.
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

            {/* Feature Cards */}
            <ReusePlanOffersYou />
            <InsuracePartners
                heading="Trusted Investment Partners"
                partners={partnersData}
            />
        </div>
    )
}

export default SmartWealthAdvantage;