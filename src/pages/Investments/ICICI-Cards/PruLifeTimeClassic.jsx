import Icicipic from '../../../assets/investments/icici pic.jpeg';
import Bargraph from '../../../assets/investments/bar-graph.png';
import Induxfund from '../../../assets/investments/index-fund.png';
import FinancialSecurity from '../../../assets/investments/financial-security.png';
import Deduction from '../../../assets/investments/deduction.png';
import Trophy from '../../../assets/investments/trophy.png';
import Conversion from '../../../assets/investments/conversion.png';
import Topup from '../../../assets/investments/top-up.png';
import Payment from '../../../assets/investments/payment.png';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';

const PruLifeTimeClassic = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            ICICI Pru Life Time Classic<br />
                            <span className="text-[#ffb21a]">ULIP</span>
                        </h1>
                    </div>
                    {/* Right Image or SVG Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={icicicard2}
                            alt="Loan illustration"
                            className="max-w-full h-[400px]"
                        />
                    </div>

                </div>

            </div>


            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8'>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="w-full">
                        <h3 className="text-[#97291e] text-2xl font-semibold">
                            A Comprehensive Plan for Financial Protection and Wealth Creation
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            ICICI Pru LifeTime Classic is our newly launched non-participating unit linked plan which provides complete financial protection for your loved ones through life cover and gives you the potential to create wealth and save for the future. The plan also offers 4 portfolio strategies that can be selected according to your personal investment needs.
                        </p>

                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Icicipic} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container my-10">
                    <div className="flex items-center justify-center mb-8">
                        <hr className="flex-grow border-t-2 border-gray-300" />
                        <h4 className="text-xl font-bold text-center px-4 whitespace-nowrap max-w-full sm:max-w-md md:max-w-lg">
                            BENEFITS OF ICICI PRU LIFETIME CLASSIC
                        </h4>
                        <hr className="flex-grow border-t-2 border-gray-300" />
                    </div>


                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "4 Portfolio Strategies",
                                description:
                                    "You can choose from 4 portfolio strategies according to your investment style to achieve your specific financial goals.",
                                img: Bargraph,
                            },
                            {
                                title: "Funds To Invest",
                                description:
                                    "Invest in your choice of funds – various choice of equity, balance and debts funds, you can switch between them anytime.",
                                img: Induxfund,
                            },
                            {
                                title: "Financial Protection",
                                description:
                                    "On death of policyholder, nominee gets life cover and prevailing fund value as a lump sum payout.",
                                img: FinancialSecurity,
                            },
                            {
                                title: "Tax Benefits",
                                description:
                                    "Get tax benefits on premiums you pay upto ₹46,800 under Section 80C of Income Tax Act, 1961.",
                                img: Deduction,
                            },
                            {
                                title: "Rewards",
                                description:
                                    "Loyalty Additions and Wealth Boosters^ get added to your investment, just pay premium regularly and stay invested.",
                                img: Trophy,
                            },
                            {
                                title: "Fund Switching",
                                description:
                                    "You can move your money between various fund options to get potentially better returns. 4 free switches in a policy year.",
                                img: Conversion,
                            },
                            {
                                title: "Top-Up Option",
                                description:
                                    "You can increase your investment in the plan anytime by using the online top–up facility.",
                                img: Topup,
                            },
                            {
                                title: "Flexible Payment Options",
                                description:
                                    "You can pay premium monthly, half yearly, yearly or make a one-time payment.",
                                img: Payment,
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white border border-gray-200 shadow-sm p-5 rounded-xl text-center hover:shadow-md transition"
                            >
                                <div className="flex justify-center mb-4">
                                    <img src={feature.img} alt={feature.title} className="w-12 h-12" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default PruLifeTimeClassic;