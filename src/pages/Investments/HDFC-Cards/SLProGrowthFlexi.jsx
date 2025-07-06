import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const SLProGrowthFlexi = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC SL ProGrowth Flexi" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700">
                            Nothing should hold you back in life. Uncertainties of life can throw best laid plans and aspiration off gear. It's prudent to be prepared and life insurance solutions enable you to build your savings and enjoy life cover. With HDFC SL ProGrowth Flexi, you have a smart savings-cum-insurance plan that will enable you to simply provide the finest for your loved ones. In this plan you also enjoy life insurance coverage so that your loved ones financial future is secured even in your absence.
                        </p>
                    </div>
                </div>

                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Valuable financial protection to your family in case you are not around.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Flexible additional benefit options.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Opportunity to invest in a choice of funds.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                In this plan you can choose your premium and the investment fund(s). We will then invest your premium, net of premium allocation charges in your chosen fund(s) in the proportion you specify. At the end of the policy term, you will receive the accumulated value of your fund(s).
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                In case of your unfortunate death during the policy term, your nominee will receive the greater of Sum Assured (less withdrawals ) or fund value.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                $Please see Death benefits for details. The level of premium chosen by you cannot be altered anytime during the policy term.
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

export default SLProGrowthFlexi;