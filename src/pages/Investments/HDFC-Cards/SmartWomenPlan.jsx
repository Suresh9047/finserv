import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const SmartWomenPlan = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Smart Woman Plan" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700">
                            As an independent woman you live life on your own terms. You carve a place for yourself, be it at your work or at your home. Your dreams and aspirations are unique and so are your financial needs. We understand this, and have created a special life insurance product for you. IN THIS POLICY, THE INVESTMENT RISK IN INVESTMENT PORTFOLIO IS BORNE BY THE POLICYHOLDER. Presenting HDFC Life Smart Woman , a unique insurance cum investment plan designed specifically for women. The plan offers benefits to take care of various stages of your life; be it on motherhood, fighting cancer or coping with the loss of a companion. This plan ensures that your savings continue, while you adjust to the new stages of your life, and you remain confident to live life your way.
                        </p>
                    </div>
                </div>

                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Sum Assured of up to 40 times your annualized premium
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Choice of 3 Benefit Options - Classic, Premier and Elite
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Premium Waiver Benefit - Waiver and funding of 3 annual premiums on Birth of child with congenital disorder or pregnancy complications Diagnosis of malignant cancer of female organs
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Additional periodic cash payouts under Premier and Elite Option
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Enhanced Allocation Rate from 11 year onwards
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                This plan is available with a Short Medical Questionnaire (SMQ) based underwriting#
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

export default SmartWomenPlan;