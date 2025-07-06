import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const PlatinumWealthPlanPlus = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Max Life Insurance<br />
                            <span className="text-[#ff8c00]">Platinum Wealth Plan Plus Solution</span>
                        </h1>


                    </div>

                </div>

            </div>


            {/* Intro Section */}
            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5">
                        What the Max Life Platinum Wealth Plan Plus Solution has in store for you
                    </h1>
                    <p className="text-gray-700">
                        A plan which helps you achieve your goals by providing you with multiple investment options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <h3 className="text-[#ff8c00] text-2xl mb-3">
                            Presenting The All New and Exclusive Max Life Platinun Wealth plan
                        </h3>
                        <p className="text-[19px] text-gray-700">
                            <strong className="block text-gray-800">A Cut Above The Rest Just Like You</strong><br />
                            An exclusive plan that’s tailor-made to grow your fortune with more benefits than ever before.
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

            <section className="px-4 py-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-3xl mb-5 text-center">
                        Max Life Platinum Wealth plan Offers You
                    </h1>

                    <div className="space-y-6">
                        <div>
                            <strong className="block">Comprehensive Life Insurance Coverage For You</strong>
                            <p className="mt-2 text-gray-700">
                                Get a Life Insurance Cover of 10 times the Annualized Premium (for Limited and Regular Pay options) from base policy. You can also opt for an additional Life Cover, with Max Life Partner Care Rider (UIN: 104A023V02)
                            </p>
                        </div>

                        <div>
                            <strong className="block">Option To Choose Premium Payment Term And Policy Term As Per Your Convenience</strong>
                            <p className="mt-2 text-gray-700">
                                Pay premiums for a limited period (one year or five years) or entire Policy Term; with Policy Term options available from 10 years to 20 years (for Single Pay Policies, only 10 year Policy Term is available)
                            </p>
                        </div>

                        <div>
                            <strong className="block">Your Choice Of Funds And Investment Strategies</strong>
                            <p className="mt-2 text-gray-700">
                                Choice of 13 Funds for investors with different risk appetites. Alternatively, you may select one of the 2 Fund strategies of Systematic Transfer Plan and Dynamic Fund Allocation, to protect your investments against market volatilities
                            </p>
                        </div>

                        <div>
                            <strong className="block">Guaranteed Loyalty Additions And Guaranteed Wealth Boosters For You</strong>
                            <p className="mt-2 text-gray-700">
                                Enjoy Guaranteed Loyalty Additions and Guaranteed Wealth Boosters to further enhance your Policy Fund Value
                            </p>
                        </div>

                        <div>
                            <strong className="block">Low Charges To Boost Your Returns</strong>
                            <p className="mt-2 text-gray-700">
                                This product offers zero policy administration charge post 5 policy years (other charges may apply)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <InsuracePartners
                heading="Trusted Investment Partners"
                partners={partnersData}
            />
        </div>
    )
}

export default PlatinumWealthPlanPlus;