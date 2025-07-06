import icicicard2 from '../../../assets/sample/icicicard2.png';
import Family from '../../../assets/investments/family.jpeg';
import { FaBriefcase, FaSyncAlt, FaCalendarCheck, FaFileInvoiceDollar } from 'react-icons/fa';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const PruProtectNGain = () => {
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
                            ICICI Pru Protect N Gain<br />
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
                            Empower Your Family's Future with ICICI Pru Protect N Gain
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            India is undergoing a transformative economic growth in the past couple of decades. You, as a part of India’s rising new generation, want to participate in India’s growth story and aspire to realise the dreams you have for your loved ones. For the non-negotiable goals you have in mind for your family, you need the right plan. The plan should also be able to take care of your family’s financial wellbeing even in your absence. Presenting ICICI Pru Protect N Gain - a protection-oriented unit linked savings life insurance plan, designed to grow your wealth to fulfil your long-term goals and safeguard your family with an adequate life cover1. With ICICI Pru Protect N Gain, protect your life goals, and gain a stress-free life!
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Family} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <section className="bg-grey py-16">
                    <div className="py-4">
                        <p className="text-[25px] text-[#0283BB] text-center mb-8">
                            ICICI Pru Protect N Gain: A one stop solution for your Insurance and Investment needs
                        </p>
                        <div className="flex flex-col gap-8 mb-20 md:flex-row">
                            {/* Protect Card */}
                            <div className="w-full md:w-1/2 transform transition duration-300 ease-in-out hover:scale-105">
                                <div className="relative group perspective-1000 h-full">
                                    <div className="p-4 bg-[#0282ba] text-white shadow-lg rounded-lg hover:shadow-xl flex flex-col h-full">
                                        <p className="text-[35px] text-center font-semibold">Protect</p>
                                        <p className="note-line text-center mt-2">You and your family with Life Insurance cover</p>
                                        <h3 className="text-lg font-bold mb-2">Benefits</h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm">
                                            <li>Life Insurance cover: Life Cover1 for the entire policy term so that your family is financially secured even in your absence</li>
                                            <li>Accidental Death cover: Accidental Death cover5 paid as lump sum in case of death due to an accident</li>
                                            <li>Accidental Disability cover: Accidental Disability cover5 paid as lump sum in case of permanent disability due to an accident</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Gain Card */}
                            <div className="w-full md:w-1/2 transform transition duration-300 ease-in-out hover:scale-105">
                                <div className="relative group perspective-1000 h-full">
                                    <div className="p-4 bg-[#0282ba] text-white shadow-lg rounded-lg hover:shadow-xl flex flex-col h-full">
                                        <p className="text-[35px] text-center font-semibold">Gain</p>
                                        <p className="note-line text-center mt-2">By staying longer with market-linked returns</p>
                                        <h3 className="text-lg font-bold mb-2">Benefits</h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm">
                                            <li>Accidental Disability cover: Accidental Disability cover5 paid as lump sum in case of permanent disability due to an accident</li>
                                            <li>The above maturity benefit is inclusive of the following additions to your policy:</li>
                                            <li>Return of 2X premium allocation charges2 from 11th policy year</li>
                                            <li>Return of 2X/4X mortality charges2 from 11th policy year onwards</li>
                                            <li>Maturity booster3 to boost your fund value at maturity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-white mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
                        <span className="text-[#FF8800] border-b-2 border-[#0282ba]">GET ADDITIONAL FLEXIBILITIES</span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                            <FaBriefcase className="w-10 h-10 text-[#0282ba]" />
                            <h4 className="font-semibold text-lg text-gray-800">Portfolio Strategies</h4>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                            <FaSyncAlt className="w-10 h-10 text-[#0282ba]" />
                            <h4 className="font-semibold text-lg text-gray-800">Unlimited Free Switches</h4>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                            <FaCalendarCheck className="w-10 h-10 text-[#0282ba]" />
                            <h4 className="font-semibold text-lg text-gray-800">Systematic Withdrawals</h4>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                            <FaFileInvoiceDollar className="w-10 h-10 text-[#0282ba]" />
                            <h4 className="font-semibold text-lg text-gray-800">Tax Benefits</h4>
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

export default PruProtectNGain;