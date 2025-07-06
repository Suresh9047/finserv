import icicicard2 from '../../../assets/sample/icicicard2.png';
import PlanTomorrow from '../../../assets/investments/plan_tomorrow.jpeg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const PruGuaranteedIncomeForTomorrow = () => {
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
                            ICICI Pru Guaranteed Income For Tomorrow<br />
                            <span className="text-[#0282ba]">Saving Plan</span>
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
                            Secure Your Future with ICICI Pru Guaranteed Income For Tomorrow
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Life is all about enjoying and creating moments of joy with your loved ones. To live these moments to the fullest you need to have assurance of a life cover to protect your loved ones in case of any uncertainties and also plan for various life goals like marriage, parenthood, children’s education or a peaceful retirement. These are sacrosanct goals, for which you would need a financial plan that gives you the reassurance of a guarantee. Keeping this in mind, we present ICICI Pru Guaranteed Income For Tomorrow. A protection and savings oriented life insurance plan with guaranteed benefits to help you achieve your life goals.
                        </p>
                    </div>
                    <div className=" w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={PlanTomorrow} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container mb-5">
                    <h3 className="text-[#97291e] text-2xl font-semibold mb-4">
                        What makes ICICI Pru Guaranteed Income For Tomorrow suitable for you?
                    </h3>
                    <ul className="space-y-4 ml-10">
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span><b>Guaranteed Benefits1 </b>in the form of a lump sum or regular income to match your needs</span>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span><b>Option to receive guaranteed income2 </b>from 2nd year onwards</span>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span><b>Higher </b>Benefits for women3</span>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span><b>Life Insurance Cover4 </b>for financial security of your family</span>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span>Get Guaranteed Income when you want it <b>with Save the Date5</b> feature</span>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span><b>Tax benefits6 </b>may be applicable on premiums paid and benefits received as per the prevailing tax laws</span>
                        </li>
                        <li className="text-[19px] flex items-start">
                            <span className="text-[#0283BB] text-2xl leading-none mr-3 mt-1">&#8226;</span>
                            <span><b>Option of taking Loan </b>against policy to help you in case of financial emergencies</span>
                        </li>
                    </ul>
                </div>

                <div className="container">
                    <h3 className="text-[#97291e] text-2xl font-semibold mb-4">
                        Early Income plan option
                    </h3>
                    <p className="text-[19px] mb-4">
                        Under this plan option, you can choose to pay premiums for 6, 7, 8, 10 or 12 years (PPT) and you will receive regular income from the 2nd year onwards.
                    </p>
                    <p className="text-[19px] mb-4">
                        The income that you receive from 2nd year onwards till the end of the policy term is known as Guaranteed Early Income. The income that you receive after the policy term is known as Guaranteed Income.
                    </p>
                    <p className="text-[19px] mb-4">
                        Saurav is a 35-year-old male, paying an annual premium of ₹1 lakh in ICICI Pru Guaranteed Income For Tomorrow. He wants to create an alternate source of income for himself so that he can plan to retire early. Moreover, he wants some income to start off from the very next year to take care of his son’s school fees.
                    </p>
                    <p className="text-[19px] mb-4">
                        The table below shows the regular income that Saurav will receive, for different combinations of premium payment term and policy term.
                    </p>
                </div>

                <div>
                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-[#245585] text-white text-center">
                                <th className="px-4 py-3 border-r">Pay for</th>
                                <th className="px-4 py-3 border-r">Income from 2nd year till 7th year</th>
                                <th className="px-4 py-3">Income from 7th year till 12th year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">6 years</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹15,000</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹1,05,752</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-[#245585] text-white text-center">
                                <th className="px-4 py-3 border-r">Pay for</th>
                                <th className="px-4 py-3 border-r">Income from 2nd year till 8th year</th>
                                <th className="px-4 py-3">Income from 8th year till 14th year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">7 years</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹20,000</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹1,06,812</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-[#245585] text-white text-center">
                                <th className="px-4 py-3 border-r">Pay for</th>
                                <th className="px-4 py-3 border-r">Income from 2nd year till 9th year</th>
                                <th className="px-4 py-3">Income from 9th year till 16th year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">8 years</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹20,000</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹1,11,522</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-[#245585] text-white text-center">
                                <th className="px-4 py-3 border-r">Pay for</th>
                                <th className="px-4 py-3 border-r">Income from 2nd year till 11th year</th>
                                <th className="px-4 py-3">Income from 11th year till 20th year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">10 years</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹25,000</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹1,17,856</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full border-collapse mb-6">
                        <thead>
                            <tr className="bg-[#245585] text-white text-center">
                                <th className="px-4 py-3 border-r">Pay for</th>
                                <th className="px-4 py-3 border-r">Income from 2nd year till 13th year</th>
                                <th className="px-4 py-3">Income from 13th year till 24th year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">12 years</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹25,000</td>
                                <td className="bg-gray-100 text-black px-4 py-3 border border-white">₹1,29,607</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default PruGuaranteedIncomeForTomorrow;