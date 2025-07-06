import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';


const SancharyFixedMaturityPlan = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Sanchay Fixed Maturity Plan" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700">
                            A Non-Linked, Non-Participating, Individual, Savings, Life Insurance Plan that ensures you and your loved ones are financially protected.
                        </p>
                    </div>
                </div>

                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Single/ Joint Life Cover - Option to choose cover on Single Life or Joint Life basis
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Guaranteed1 Savings – Stay assured of the returns
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Optional Riders – Enhance your protection coverage with rider options on payment of additional premium
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Flexibility of Premiums –Option of single premium/limited pay/regular pay premium payment option
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Choice of Policy Terms – Option to choose from a range of Policy Terms upto 40 years
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

export default SancharyFixedMaturityPlan;