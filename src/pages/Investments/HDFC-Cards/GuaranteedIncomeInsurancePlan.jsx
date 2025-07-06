import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const GuaranteedIncomeInsurancePlan = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Guaranteed Income Insurance Plan" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700 mb-4 text-base md:text-lg lg:text-xl">
                            HDFC Life Guaranteed Income Insurance Plan is a non-linked non-participating individual life insurance savings plan that provides guaranteed tax-free benefits after completion of premium payment term and Guaranteed Death benefit during the entire policy term. This is a savings oriented product.
                        </p>
                        <p className="w-full text-gray-700 mb-4 text-base md:text-lg lg:text-xl">
                            HDFC Life recognizes that we all have dreams for ourselves and our families. The dream may be about higher education of our children or may be to support our aged parents or for daughter's wedding or simply for a self-reliant retirement. We understand the sincere efforts that each of us takes towards the well-being of our families. With HDFC Life Guaranteed Income Insurance Plan, we aim to help you build these financial reserves for all expected and unexpected expenses in the future. HDFC Life Guaranteed Income Insurance Plan helps you achieve this.
                        </p>
                    </div>
                </div>


                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Guaranteed income of 11% to 13% per annum
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Guaranteed regular income with tax savings as per prevailing tax laws
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Guaranteed lump sum on maturity with tax savings as per prevailing tax laws
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Full guaranteed death benefits during income payout period
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

export default GuaranteedIncomeInsurancePlan;