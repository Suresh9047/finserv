import icicicard1 from '../../../assets/sample/icicicard1.png';
import InsuranceCare from '../../../assets/investments/insurance-care.jpeg';
import { FaMoneyCheckAlt, FaCalendarAlt, FaMedkit, FaRandom, FaHeart, FaBolt, FaShoppingCart } from "react-icons/fa";
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const PruiProtectSmart = () => {
    const benefits = [
        { id: 'budget', icon: <FaMoneyCheckAlt className="text-[#0282ba] text-2xl" />, text: "It fits into your tight budget" },
        { id: 'longer-cover', icon: <FaCalendarAlt className="text-[#0282ba] text-2xl" />, text: "It gives you longer cover" },
        { id: 'critical-illness', icon: <FaMedkit className="text-[#0282ba] text-2xl" />, text: "It pays on diagnosis of any of the 34 Critical illnesses (optional)^" },
        { id: 'flexible-payout', icon: <FaRandom className="text-[#0282ba] text-2xl" />, text: "It gives you 4 flexible life cover payout options to choose from." },
        { id: 'terminal-illness', icon: <FaHeart className="text-[#0282ba] text-2xl" />, text: "It pays life cover on terminal illness1 (including AIDS)" },
        { id: 'accidental-benefit', icon: <FaBolt className="text-[#0282ba] text-2xl" />, text: "It gives you option to add accidental benefit (Optional)+ now, or later" },
        { id: 'buy-online', icon: <FaShoppingCart className="text-[#0282ba] text-2xl" />, text: "It gives you option to buy online with MWP Act4" },
    ];
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
                            ICICI Pru iProtect Smart Term Plan<br />
                            <span className="text-[#0282ba]">Protection Plans</span>
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={icicicard1}
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
                            Secure your loved ones with our term plan
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Since its launch, ICICI Pru iProtect Smart has become our top selling plan online (Source: Company BuyOnline
                            data - Sep 2021 to till date). This term plan offers financial protection for your family and a critical
                            illness cover for you (optional). Critical illness cover is a very popular benefit among consumers with 1 out
                            of 3 people selecting this benefit. This term plan also provides a flexible payout option to cover your
                            family’s needs even in your absence.
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={InsuranceCare} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container-two rounder-lg shadow-lg py-8 ">
                    <h2 className="text-[#0282ba] text-3xl text-center mb-6 py-5 border-b-2 border-grey-300">Here are 7 things you must know about our term plan</h2>
                    <ul className="feature-list mt-10 space-y-4">
                        {benefits.map((item) => (
                            <li key={item.id} className="flex bg-white border-l-4 border-[#0282ba] p-4 rounded-md shadow-lg hover:translate-x-2 transition-transform duration-300">
                                <div className="mr-4">{item.icon}</div>
                                <span className="text-gray-700 text-base">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default PruiProtectSmart;