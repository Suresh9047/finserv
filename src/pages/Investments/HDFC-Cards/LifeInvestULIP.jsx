import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const LifeInvestULIP = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Click2Invest ULIP" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700 mb-4 text-base md:text-lg lg:text-xl">
                            HDFC Life Click 2 Invest – ULIP is a Unit Linked Non Participating Life Insurance Plan that offers you market linked returns along with valuable financial protection for your family. Along with financial protection, this plan also offers you a range of investment funds. You can choose from among 11 fund options to invest your money in.
                        </p>
                    </div>
                </div>

                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Premium payment options of Single Pay, 5 Pay, 6 Pay, 7 Pay, 8 Pay, 9 Pay, 10 Pay or Regular pay.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Choose from a range of 11 fund options.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Tax benefits may be available as per prevailing tax laws.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                This plan is available with limited underwriting norms with a Short Medical Questionnaire (SMQ) if the conditions are met. Otherwise, the plan will be offered through full underwriting.
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

export default LifeInvestULIP;