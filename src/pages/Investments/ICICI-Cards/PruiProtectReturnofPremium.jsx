import icicicard2 from '../../../assets/sample/icicicard2.png';
import InsurancePlant from '../../../assets/investments/insurance-plant.jpeg';
import { FaList, FaCheckCircle, FaShieldAlt, FaUserShield, FaHeartbeat, FaCarCrash, FaMoneyBillWave, FaCoins, FaUndoAlt, FaFileInvoiceDollar } from "react-icons/fa";
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const PruiProtectReturnofPremium = () => {
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
                            ICICI PRU iPROTECT RETURN OF PREMIUM<br />
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
                            Securing Your Future Amidst Uncertainty
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Life has a new constant - uncertainty. These uncertainties may pose a hurdle to your plan for a perfect future for yourself and your loved ones. Only the right precaution and the right preparation to deal with these uncertain situations can help you win over them Our ICICI Pru iProtect Return of Premium plan provides 360º security to you and your loved ones against all such eventualities, safeguards your future planning while simultaneously also ensuring that you get a survival/maturity benefit Here’s a plan which understands that change is the only constant and changes with your changing needs
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={InsurancePlant} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="bg-white py-8">
                    <div>
                        <h2 className="text-3xl text-center font-bold mb-6">4. BENEFITS OF ICICI PRU iPROTECT RETURN OF PREMIUM</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold flex items-center mb-2 border-b border-[#0282ba] p-3">
                                <FaList className="mr-2 text-[#0282ba]" />
                                Choice of 4 Plan Options Customized for Your Protection Needs
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li className="flex items-center"><FaCheckCircle className="text-[#0282ba] mr-2" /> Return of Premium</li>
                                <li className="flex items-center"><FaCheckCircle className="text-[#0282ba] mr-2" /> Income Benefit</li>
                                <li className="flex items-center"><FaCheckCircle className="text-[#0282ba] mr-2" /> Return of Premium with Life-stage Cover</li>
                                <li className="flex items-center"><FaCheckCircle className="text-[#0282ba] mr-2" /> Early Return of Premium with Life-stage Cover</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold flex items-center mb-2 border-b border-[#0282ba] p-3">
                                <FaShieldAlt className="mr-2 text-[#0282ba]" />
                                360° Protection
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li className="flex items-center"><FaUserShield className="text-[#0282ba] mr-2" /> Smart Protection with Life-stage Cover</li>
                                <li className="flex items-center"><FaHeartbeat className="text-[#0282ba] mr-2" /> Safeguard Against 64 Critical Illnesses</li>
                                <li className="flex items-center"><FaCarCrash className="text-[#0282ba] mr-2" /> Enhanced Protection Against Accidental Death</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold flex items-center mb-2 border-b border-[#0282ba] p-3">
                                <FaMoneyBillWave className="mr-2 text-[#0282ba]" />
                                Survival Benefits
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li className="flex items-center"><FaCoins className="text-[#0282ba] mr-2" /> Regular Income</li>
                                <li className="flex items-center"><FaUndoAlt className="text-[#0282ba] mr-2" /> Return of Premiums</li>
                                <li className="flex items-center"><FaUndoAlt className="text-[#0282ba] mr-2" /> Early Return of Premiums</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold flex items-center mb-2 border-b border-[#0282ba] p-3">
                                <FaFileInvoiceDollar className="mr-2 text-[#0282ba]" />
                                Tax Benefits
                            </h3>
                            <p className="text-gray-700 ml-4">
                                Tax benefits may be applicable on premiums paid and benefits received as per prevailing tax laws.
                            </p>
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

export default PruiProtectReturnofPremium;