import HdfcLifeQuote from '../../../components/HdfcLifeQuote';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';


const SancharyParAdvantage = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <HdfcLifeQuote title="HDFC Life Sanchay Par Advantage" />

                <div className="container">
                    <div className="flex flex-wrap">
                        <p className="w-full text-gray-700 mb-4 text-base md:text-lg lg:text-xl">
                            As you approach different stages in life, there are dreams and aspirations that you set out for yourself and your family. More often than not, you make tough choices, sacrificing one dream for the other. You also have to take care of day-to-day responsibilities like running the family, paying for health expenses, children’s school fees, etc. With rising life uncertainties, it is important to secure a source of income that takes care of these expenses, more so after your retirement or in case of an unfortunate demise. A Life Insurance plan offers financial protection against such unforeseen events.
                        </p>
                    </div>
                </div>

                <section className='my-10 '>
                    <div className="container-two">
                        <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5">Key Features</h2>
                        <ul className="feature-list space-y-4">
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Life cover with protection up to age 100 years
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Choose between Immediate Income or Deferred Income options as per your needs
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Flexibility to accrue* the survival benefit payouts
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Flexibility to choose survival benefit payout date
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Enhanced benefit for policies with Annual Premium more than or equal to INR 100,000
                            </li>
                            <li className="bg-blue-100 border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                Tax benefits** – You may be eligible for tax benefits as per prevailing tax laws
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="py-4">
                    <h1 className="text-3xl text-[#0282ba] text-center font-bold mb-6">Insurance Benefits</h1>

                    {/* Survival Benefit */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Survival Benefit</h2>

                        <div className="mb-4">
                            <h3 className="text-xl text-[#0282ba] font-semibold">Immediate Income Option</h3>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700">
                                <li>
                                    The policyholder would be eligible to receive Cash Bonus (if
                                    declared) at the end of each Policy Year.
                                </li>
                                <li>
                                    Payable from the 1st policy year until death or end of policy
                                    term, whichever is earlier.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl text-[#0282ba] font-semibold">Deferred Income Option</h3>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700">
                                <li>
                                    The policyholder will start receiving Guaranteed Income plus
                                    discretionary Cash Bonuses (if declared) in arrears one year after
                                    the end of Premium Payment Term.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Maturity Benefit */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Maturity Benefit</h2>

                        <div className="mb-4">
                            <h3 className="text-xl text-[#0282ba] font-semibold">Immediate Income Option</h3>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700">
                                <li>Sum Assured on Maturity plus accrued Cash Bonuses (if not paid earlier).</li>
                                <li>Plus interim Survival Benefit (if any).</li>
                                <li>Plus Terminal Bonus (if declared).</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl text-[#0282ba] font-semibold">Deferred Income Option</h3>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700">
                                <li>Sum Assured on Maturity plus accrued Guaranteed Income and Cash Bonuses (if not paid earlier).</li>
                                <li>Plus interim Survival Benefit (if any).</li>
                                <li>Plus Terminal Bonus (if declared).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Death Benefit */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">3. Death Benefit</h2>

                        <div>
                            <h3 className="text-xl text-[#0282ba] font-semibold">Immediate Income Option</h3>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700">
                                <li>Sum Assured on Death plus Accrued Cash Bonuses (if not paid earlier).</li>
                                <li>Plus Interim Survival Benefit (if any).</li>
                                <li>Plus Terminal Bonus (if declared).</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div >
    )
}

export default SancharyParAdvantage;