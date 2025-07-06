import Family1 from '../../../assets/investments/family1.jpeg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';

const PruGiftPro = () => {
    const bullet = (
        <span className="text-[#0283BB] text-xl mr-2 leading-none">&#8226;</span>
    );

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
                            ICICI Pru GIFT Pro<br />
                            <span className="text-[#0282ba]">Protection Plans</span>
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
                            Achieve Your Life Goals with ICICI Pru GIFT Pro
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Life is peaceful when you can plan your goals ahead of time. You need a plan that can take care of your family's financial security with a life insurance cover1 as well as secure your life goals like marriage, parenthood, children's education and retirement. Presenting ICICI Pru GIFT Pro, a protection and savings-oriented life insurance plan which helps you build a safety net to provide financial protection to your family along with guaranteed2 benefits. With ICICI Pru GIFT Pro, you can achieve your life goals like a PRO.
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Family1} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container1 mb-4">
                    <h3 className="text-[#97291e] text-2xl font-semibold mb-4">
                        What makes ICICI Pru GIFT Pro suitable for you?
                    </h3>

                    <ul className="space-y-2 ml-5">
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Life Insurance Cover1 for financial security of your family
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Flexibility of selecting duration of receiving Guaranteed Income2 as per your needs
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Option to receive Guaranteed income2 that either stays the same throughout the income duration or increases every year
                        </li>
                        <li className="text-[19px] flex items-start flex-col">
                            <div className="flex items-start">
                                <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>
                                <span>Flexibility to choose:</span>
                            </div>
                            <ul className="mt-2 space-y-2 ml-8">
                                <li className="text-[19px] flex items-start">
                                    <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Percentage of MoneyBack Benefit sum of annualized premiums paid: It can be any number from 0% to 100%
                                </li>
                                <li className="text-[19px] flex items-start">
                                    <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>When you want to receive MoneyBack Benefit – It can be paid at the maturity date or at the end
                                </li>
                            </ul>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Option to enhance your Guaranteed Income2 amount with Low Cover Income Booster4
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Option to receive income on the date of your choice through Save the Date5 option
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl mr-2">&#8226;</span>Tax benefits6 may be applicable on premiums paid and benefits received as per the prevailing tax laws
                        </li>
                    </ul>

                </div>

                <div className="container1 mb-4">
                    <h3 className="text-[#97291e] text-2xl font-semibold mb-4">
                        A GIFT with many flexibilities
                    </h3>
                    <p className="text-[19px] text-gray-700">
                        You pay premiums for a certain period of time (known as the premium payment term). After the completion of policy
                        term, you will receive Guaranteed Income2 (GI) at the end of every month/year for a certain period
                        (known as the Income Period). Please go through the details given below to know about the various flexibilities
                        available to you.
                    </p>
                </div>

                <div className="py-6">
                    {/* Section 1 */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mb-4">
                        1. Flexibility to choose Guaranteed Income option (Level Guaranteed Income7 or Increasing Guaranteed Income7)
                    </h3>
                    <p className="text-[19px] mt-2">
                        ICICI Pru GIFT Pro gives you the option to select whether you want to receive guaranteed income2 that either
                    </p>
                    <ul className="mt-2 space-y-1 ml-4">
                        <li className="text-[19px] flex items-start">{bullet} Life Insurance Cover1 for financial security of your family</li>
                        <li className="text-[19px] flex items-start">{bullet} remains at the same level throughout the Income Period, or</li>
                        <li className="text-[19px] flex items-start">{bullet} increases every year</li>
                    </ul>
                    <p className="text-[19px] mt-2">
                        If you choose to receive an income that increases every year, your guaranteed income2 will increase every year at a simple interest rate of 5% per annum
                    </p>
                    <p className="text-[19px] mt-2">
                        Let us take an example to understand this flexibility available under ICICI Pru GIFT Pro:
                    </p>
                    <p className="text-[19px] mt-2">
                        He decides to pay an annual premium of ₹1 lakh for 10 years in ICICI Pru GIFT Pro and receive 100% MoneyBack Benefit in the last year of the Income Period and gets a life cover of minimum ₹10.70 lakh for 11 years.
                    </p>

                    {/* Section 2 */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">
                        2. Flexibility to choose to receive a percentage of your total annualised premiums paid i.e., MoneyBack Benefit3
                    </h3>
                    <p className="text-[19px]">Let us take an example to understand this flexibility available under ICICI Pru GIFT Pro:</p>
                    <p className="text-[19px] mt-2">Bhavesh is a 35-year-old who wants to create a second income for himself so that he can plan for his future goals.</p>
                    <p className="text-[19px] mt-2">
                        He decides to pay an annual premium of ₹1 lakh for 10 years towards ICICI Pru GIFT Pro. He gets a life cover<sup>1</sup> of minimum ₹10.70 lakh for 11 years. He also decides to receive 100% MoneyBack Benefit3 in the last year of the Income Period.
                    </p>

                    {/* Section 3 */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">
                        3. Flexibility to choose when you want to receive MoneyBack Benefit3
                    </h3>
                    <p className="text-[19px]">
                        ICICI Pru GIFT Pro gives you the flexibility to choose any year, on or after the maturity date of the policy up to the last income year, to receive the MoneyBack Benefit3. The MoneyBack Benefit3 will be payable at the end of the year, as chosen by you.
                    </p>
                    <p className="text-[19px] mt-2">
                        Please also note: In case of death of the Life Assured during the Income Period, the Claimant continues to receive the Guaranteed Income2 and MoneyBack Benefit3 (if applicable and not paid earlier).
                    </p>

                    {/* Section 4 */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">
                        4. Flexibility to choose income on any date of your choice with Save the Date5
                    </h3>
                    <p className="text-[19px]">...if you have opted to take Guaranteed Income2 on an annual basis.</p>

                    {/* Section 5 */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">
                        5. Flexibility to receive all future benefits as a lump sum benefit at a discounted value
                    </h3>
                    <p className="text-[19px]">
                        For ease of access to the fund, you get the option to receive future benefits by converting them in the form of a lump sum at policy maturity or any time during the income period, at a discounted rate (if not already received). This flexibility is also available to the Claimant in case of unfortunate demise of the Life Assured during the Income Period.
                    </p>

                    {/* Section 6 */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">6. Low Cover Income Booster4</h3>
                    <p className="text-[19px]">
                        In the event the person whose life is covered by this policy (known as the Life Assured) passes away, during the term of the policy, the Death Benefit will be paid out as a lump sum to the person specified (known as the Claimant) in the policy.
                    </p>

                    {/* Death Benefit */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">Death Benefit</h3>
                    <p className="text-[19px]">At the inception of the policy, you can also choose to opt for “Low Cover Income Booster” wherein you will be able to enjoy increased income for opting a lower life cover.</p>
                    <p className="text-[19px] mt-2">Death Benefit is highest of:</p>
                    <ul className="mt-2 space-y-1 ml-4">
                        <li className="text-[19px] flex items-start">{bullet} a. Sum Assured on Death (defined as Death Benefit multiple × Annualised Premium8)</li>
                        <li className="text-[19px] flex items-start">{bullet} b. 105% of the Total premiums paid10 up to the date of death</li>
                        <li className="text-[19px] flex items-start">{bullet} c. Number of months for which premiums are paid up to date of death / (12 × Premium Payment Term)</li>
                        <li className="text-[19px] flex items-start">{bullet} d. Surrender value payable as on the date of death</li>
                    </ul>
                    <p className="text-[19px] mt-2">
                        On payment of Death Benefit to the claimant, the policy will terminate and all rights, benefits and interests under the policy will stand extinguished.
                    </p>

                    {/* Plan at a Glance */}
                    <h3 className="text-[#97291e] text-2xl font-semibold mt-6 mb-2">Plan at a glance</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center border border-gray-300">
                            <thead className="bg-[#0282ba] text-white">
                                <tr>
                                    <th className="p-3 border border-gray-300">Premium Payment Term (in years)</th>
                                    <th className="p-3 border border-gray-300">Policy Term (in years)</th>
                                    <th className="p-3 border border-gray-300">Income Period* (in years)</th>
                                    <th className="p-3 border border-gray-300">Min/Max Age at Entry (in years)</th>
                                    <th className="p-3 border border-gray-300">Min/Max Age at Maturity (in years)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['5', '8 to 10', '', '18 minus Policy Term / 60', '18/70'],
                                    ['6', '8 to 11', '', '18/71', ''],
                                    ['7', '8 to 12', '', '18/72', ''],
                                    ['8', '9 to 13', '5/7/10/12/15/20/25/30', '18/73', ''],
                                    ['9', '9 to 14', '', '18/74', ''],
                                    ['10', '10 to 15', '', '18/75', ''],
                                    ['11', '11 to 16', '', '18/75', ''],
                                    ['12', '12 to 17', '', '18/75', ''],
                                ].map(([ppt, pt, ip, entry, maturity]) => {
                                    const rowKey = `${ppt}-${pt}-${ip}-${entry}-${maturity}`;
                                    return (
                                        <tr key={rowKey} className="border-t hover:bg-gray-100">
                                            <td className="p-3 border border-gray-300">{ppt}</td>
                                            <td className="p-3 border border-gray-300">{pt}</td>
                                            <td className="p-3 border border-gray-300">{ip || ''}</td>
                                            <td className="p-3 border border-gray-300">{entry}</td>
                                            <td className="p-3 border border-gray-300">{maturity}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
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

export default PruGiftPro;