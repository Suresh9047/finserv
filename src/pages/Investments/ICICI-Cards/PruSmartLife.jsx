import Prugold from '../../../assets/investments/Plan for Life Gold.jpeg';
import Sales from '../../../assets/investments/sales.png';
import Settings from '../../../assets/investments/settings.png';
import Insurance from '../../../assets/investments/insurance.png';
import Giftbox from '../../../assets/investments/gift-box.png';
import EconomicGrowth from '../../../assets/investments/economic-growth.png';
import Market from '../../../assets/investments/market.png';
import Deduction from '../../../assets/investments/deduction.png';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';

const benefitsData = [
    {
        icon: Sales,
        title: "Growth of Your Money",
        description:
            "You can enjoy the opportunity to get potentially better returns and grow your money by investing in equity and debt funds for the long term. This combination helps you beat inflation while protecting your investments.",
    },
    {
        icon: Settings,
        title: "Choose an Investment Strategy That Suits Your Needs",
        description:
            "You may want to manage your investments yourself, or want an expert to do it for you. ICICI Pru Smart Life brings the best of both worlds. With the Fixed Portfolio Strategy, you can manage your money by investing it according to your risk appetite in equity and debt funds. On the other hand, with the Lifecycle-based Portfolio Strategy, we carefully manage your investments to create an ideal balance between equity and debt funds depending on your age.",
    },
    {
        icon: Insurance,
        title: "Secure Your Loved Ones Even in Your Absence",
        description:
            "ICICI Pru Smart Life provides a life cover for you and your family’s all-round protection. In case of an unfortunate event during the policy term, your family receives a lump sum amount. This amount will help your loved ones live the life you planned for them.",
    },
    {
        icon: Giftbox,
        title: "Get Rewarded for Staying Invested for a Longer Duration",
        description:
            "To reward you for being a loyal customer, the company adds to your savings further with Loyalty Additions, which helps your wealth grow without the need for you to invest more money.",
    },
    {
        icon: EconomicGrowth,
        title: "Wealth Boosters Increase Your Savings Further",
        description:
            "The company also adds Wealth Boosters to your savings. This helps you grow your money without having to make any additional investments.",
    },
    {
        icon: Market,
        title: "Easy Access to Your Money",
        description:
            "Starting from the sixth policy year, you can withdraw a part of your money as per your need. This ensures that you have easy access to your money while at the same time, the rest of your invested money keeps growing.",
    },
    {
        icon: Deduction,
        title: "Get Tax Benefits",
        description:
            "With this plan, you can reduce your taxable income by investing up to ₹1.5 lakh under Section 80C. This will help you save tax. What’s more, even shifting your money from equity to debt or debt to equity is completely tax-free*. The money you get at the time of maturity is also tax-free*.",
    },
];

const PruSmartLife = () => {
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
                            ICICI Pru Smart Life<br />
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
                            Why is ICICI Pru Smart Life special?
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            ICICI Pru LifeTime Classic is our newly launched non-participating unit linked plan which provides complete financial protection for your loved ones through life cover and gives you the potential to create wealth and save for the future. The plan also offers 4 portfolio strategies that can be selected according to your personal investment needs.
                        </p>

                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Prugold} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container py-8">
                    <div className="flex items-center justify-center my-8">
                        <hr className="flex-grow border-t border-gray-300 mr-4" />
                        <h4 className="text-3xl uppercase whitespace-nowrap">
                            Benefits of ICICI Pru Lifetime Classic
                        </h4>
                        <hr className="flex-grow border-t border-gray-300 ml-4" />
                    </div>


                    <div className="space-y-6">
                        {benefitsData.map((benefit) => (
                            <div key={benefit.title} className="flex items-start gap-4 bg-white shadow p-4 rounded-lg">
                                <img src={benefit.icon} alt="" className="w-12 h-12 object-contain" />
                                <div className="text-gray-700">
                                    <div className="font-semibold text-lg mb-1">{benefit.title}</div>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default PruSmartLife;