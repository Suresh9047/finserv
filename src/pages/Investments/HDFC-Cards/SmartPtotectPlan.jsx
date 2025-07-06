import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const SmartPtotectPlan = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Smart Protect Plan" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700 mb-4 text-base md:text-lg lg:text-xl">
                            You strive hard for years to save for your retirement from the day you start working. Smart pension plus is a traditional non-participating individual/group annuity saving plan that ensures you have your financial independence with a secure and regular stream of income in the golden years just the way you want. The product offers flexibility in terms of annuity payouts for all plan options with an option to choose from immediate or deferred payouts. The mode of receiving the annuity pay can also be selected from Monthly, Quarterly, Half yearly or Yearly modes and the regular income will be paid out as per the options selected.
                        </p>
                    </div>
                </div>


                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Guaranteed* Annuity Income for whole of life by paying premiums for a Single or Limited payment term
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                One plan catering to both Single and Joint Life
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Single plan offering both Immediate Annuity and Deferred Annuity
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Flexible payout options to receive your Annuity amount– Monthly, Quarterly, Half-yearly or Yearly.
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                4 Annuity options to choose from:
                            </li>
                            <ul className="feature-list space-y-4 ml-10">
                                <li className="bg-blue-100 border-l-2 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    A. Life Annuity
                                </li>
                                <li className="bg-blue-100 border-l-2 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    B. Life Annuity with Return of % of Total Premiums Paid
                                </li>
                                <li className="bg-blue-100 border-l-2 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    C. Life Annuity with Early Return
                                </li>
                                <li className="bg-blue-100 border-l-2 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                    D. Increasing Annuity
                                </li>
                            </ul>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Option to defer Annuity payouts by choosing the deferment period.
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

export default SmartPtotectPlan;