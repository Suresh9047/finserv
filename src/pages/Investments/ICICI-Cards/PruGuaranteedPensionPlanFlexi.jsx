import Prugold from '../../../assets/investments/Plan for Life Gold.jpeg';
import { FaPiggyBank, FaUsers, FaCoins } from 'react-icons/fa';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';

const PruGuaranteedPensionPlanFlexi = () => {
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
                            ICICI Pru Guaranteed Pension Plan Flexi<br />
                            <span className="text-white">Retirement Plans</span>
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
                            Guaranted income after retirement
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            India has undergone a transformative change in the past couple of decades, with better standard of living and improved healthcare facilities. Consequently, the life expectancy has also increased. A longer life means many more moments of happiness for you, but it also needs you to be better prepared financially to ensure that you enjoy a relaxed life after retirement. Presenting ICICI Pru Guaranteed^^ Pension Plan Flexi, a plan designed to help you gradually build a retirement savings and get a lifelong guaranteed^^ income post retirement. In addition to the regular income, the plan also offers options that give you access to lump sum payouts to address your healthcare and lifestyle needs. Plan for your retirement in the right way, and ensure that you retire from work and not from life!
                        </p>

                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Prugold} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container mb-12">
                    {/* First Row with 2 cards */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Card 1 */}
                        <div className="w-full sm:w-[48%] card bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50">
                            <div className="icon-container flex justify-center items-center text-4xl text-[#0282ba] mb-4 transition-colors duration-300 group-hover:text-[#FF8800]">
                                <FaPiggyBank className="transition-colors duration-300 group-hover:text-[#FF8800]" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Flexible Savings</h3>
                            <p className="text-gray-600 mb-4">
                                Choose your premium payment duration, annuity start date, and payment frequency (Monthly, Quarterly, Half-yearly, Yearly).
                            </p>
                            <div className="card-footer bg-gray-100 text-[#0282ba] py-2 rounded-b-lg">
                                Guaranteed Lifetime Income
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full sm:w-[48%] card bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50">
                            <div className="icon-container flex justify-center items-center text-4xl text-[#0282ba] mb-4 transition-colors duration-300">
                                <FaUsers className="transition-colors duration-300 group-hover:text-[#FF8800]" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Secure Your Loved Ones</h3>
                            <p className="text-gray-600 mb-4">
                                Joint Life annuity with Waiver of Premium to ensure financial security for your family even in your absence.
                            </p>
                            <div className="card-footer bg-gray-100 text-[#0282ba] py-2 rounded-b-lg">
                                Family Security Guaranteed
                            </div>
                        </div>
                    </div>

                    {/* Second Row with 1 centered card */}
                    <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[48%] card bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50">
                            <div className="icon-container flex justify-center items-center text-4xl text-[#0282ba] mb-4 transition-colors duration-300">
                                <FaCoins className="transition-colors duration-300 group-hover:text-[#FF8800]" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Top-Up Option</h3>
                            <p className="text-gray-600 mb-4">
                                Add additional funds to your plan anytime to maximize your annuity benefits and secure your financial future.
                            </p>
                            <div className="card-footer bg-gray-100 text-[#0282ba] py-2 rounded-b-lg">
                                Grow Your Retirement Fund
                            </div>
                        </div>
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

export default PruGuaranteedPensionPlanFlexi;