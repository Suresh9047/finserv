import Prugold from '../../../assets/investments/Plan for Life Gold.jpeg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';
const PruGold = () => {

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
                            ICICI Pru Gold<br />
                            <span className="text-[#ffb21a]">ULIP</span>
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
                    {/* Text Section */}
                    <div className="w-full">
                        <h3 className="text-[#97291e] text-2xl font-semibold">
                            Plan that is designed just for preferred customers like you.
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Goals. Objectives. Life Dreams. Words and themes around which we spend most of our lives. We want to provide the best to our loved ones. In order to ensure that we are able to live a carefree life, a financial plan that provides protection of life cover becomes extremely important. This would become even more special if it comes combined with the benefits of a savings plan that can help you plan for various goals in life.
                        </p>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Presenting ICICI Pru Gold, a protection and savings oriented participating life insurance plan that provides the protection of life cover along with a regular income for whole of life that can be used to meet your long-term recurring financial needs through participation in bonus.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img
                            src={Prugold}
                            alt="Insurance Care"
                            className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0"
                        />
                    </div>
                </div>


                <div className="container mb-12">
                    {/* Section Heading with Horizontal Lines */}
                    <div className="flex items-center justify-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <h4 className="text-2xl font-bold text-center">
                            What makes ICICI Pru Gold suitable for you?
                        </h4>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-4 text-[19px]">
                        <p>Protection through life cover with policy term up to 99 years of age.</p>
                        <p>
                            Income up to 99 years of age, with option to start receiving income immediately or after a few years as per your needs. This income will be a combination of Guaranteed Income and income linked to bonus declaration.
                        </p>
                        <p>
                            Option to accumulate/withdraw income any time or adjust future premiums from the income thus accumulated.
                        </p>
                        <p>
                            Option to get Guaranteed boosters after every 5 years to boost your savings with Immediate Income with Booster plan variant.
                        </p>
                        <p>
                            Tax benefits may be applicable on premiums paid and benefits received as per prevailing tax laws.
                        </p>
                    </div>

                    {/* Table Section */}
                    <div className="mt-8 overflow-auto">
                        <table className="w-full text-center border border-gray-300">
                            <thead className="bg-[#0282ba] text-white text-sm font-semibold">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-4">Plan Variants</th>
                                    <th className="border border-gray-300 px-4 py-4">Premium Payment Term (PPT)</th>
                                    <th className="border border-gray-300 px-4 py-4">Min/Max Policy Term (PT)</th>
                                    <th className="border border-gray-300 px-4 py-4">Min/Max Age at Entry</th>
                                    <th className="border border-gray-300 px-4 py-4">Min/Max Age at Maturity</th>
                                    <th className="border border-gray-300 px-4 py-4">Min/Max Annualized Premium</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {/* Immediate Income Rows */}
                                <tr>
                                    <td className="border px-4 py-4" rowSpan="3">Immediate Income</td>
                                    <td className="border px-4 py-4">5</td>
                                    <td className="border px-4 py-4" rowSpan="9">Minimum: 25<br />Maximum: 99 minus age at entry</td>
                                    <td className="border px-4 py-4">0/50</td>
                                    <td className="border px-4 py-4" rowSpan="9">25 / 99</td>
                                    <td className="border px-4 py-4" rowSpan="9">₹50,000 p.a.*<br />Subject to Board Approved Underwriting Policy</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-4">6</td>
                                    <td className="border px-4 py-4">0/55</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-4">7 to 12</td>
                                    <td className="border px-4 py-4">0/60</td>
                                </tr>

                                {/* Immediate Income with Booster */}
                                <tr>
                                    <td className="border px-4 py-4" rowSpan="3">Immediate Income with Booster</td>
                                    <td className="border px-4 py-4">6</td>
                                    <td className="border px-4 py-4">0/50</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-4">7</td>
                                    <td className="border px-4 py-4">0/55</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-4">8 to 12</td>
                                    <td className="border px-4 py-4">0/60</td>
                                </tr>

                                {/* Deferred Income */}
                                <tr>
                                    <td className="border px-4 py-4" rowSpan="3">Deferred Income</td>
                                    <td className="border px-4 py-4">7</td>
                                    <td className="border px-4 py-4">0/50</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-4">8</td>
                                    <td className="border px-4 py-4">0/55</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-4">9 to 12</td>
                                    <td className="border px-4 py-4">0/60</td>
                                </tr>
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

export default PruGold;