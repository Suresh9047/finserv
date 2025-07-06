import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const LifeWealth = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Click 2 Wealth" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700 mb-4 text-base md:text-lg lg:text-xl">
                            Planning for the future is one of the most important aspects of your life. May it be planning for your child’s future, financially securing your post-retirement years, or simply accumulating a corpus for a rainy day. You seek an opportunity that ensures your money works for you and, at the same time, helps you safeguard the wealth created so that your desired goals are met, in case you are not around. A Life Insurance plan offers financial protection against such unforeseen events. We understand this and therefore are glad to offer “HDFC Life Click 2 Wealth” – a Unit Linked Life Insurance Plan that offers market-linked returns and provides life protection for you and your family.
                        </p>
                    </div>
                </div>


                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Charges - Only Fund Management charge towards managing your funds and Mortality charge towards your life cover.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Special Addition: Get 1% of Annualised premium as special additions to your Fund Value for first 5 years1.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Return of Mortality Charges (ROMC) on Maturity. In case of Premium Waiver option, Mortality charges pertaining to only the Life Assured would be refunded.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                ROMC will not be available for the policies where the Waiver of premium benefit is triggered due to the death of the Proposer.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Three plan options to maximize the benefits.
                            </li>
                            <ul className="feature-list space-y-4 ml-10">
                                <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    Invest Plus Option for Insurance cum Investment

                                </li>
                                <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    Premium Waiver Option to protect milestones for dependents
                                </li>
                                <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    Golden Years Benefit Option for retirement planning with whole life cover.
                                </li>
                            </ul>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Premium waiber benefit that protects the future of your loved one in your absence
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Choice of 11 fund options with unlimited free switching Systematic Transfer Plan Strategy for advantage of Rupee Cost Averaging Premium payment options of Single Pay, Limited Pay and Regular Pay.
                            </li>
                        </ul>
                    </div>
                </section>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default LifeWealth;

