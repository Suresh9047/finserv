import Vip from '../../../assets/investments/icici vip.jpeg';
import MoneyInsurance from '../../../assets/investments/money-insurance.png';
import Affordable from '../../../assets/investments/affordable.png';
import LoyaltyProgram from '../../../assets/investments/loyalty-program.png';
import Insurance from '../../../assets/investments/insurance.png';
import Abundance from '../../../assets/investments/abundance.png';
import Freeaccess from '../../../assets/investments/free-access.png';
import Withdraw from '../../../assets/investments/withdraw.png';
import Deduction from '../../../assets/investments/deduction.png';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';

const PruSignature = () => {
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
                            ICICI PRU SIGNATURE<br />
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
                    <div className="w-full">
                        <h3 className="text-[#97291e] text-2xl font-semibold">
                            Plan that is designed just for preferred customers like you.
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Introducing ICICI Pru Signature, our newest ULIP that offers life insurance and flexible investment options in one plan. This plan can give you better returns while it shields your loved ones with life cover
                        </p>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Your entire premium is allocated among the funds` of your choice without any deductions along with Return of Mortality and Policy Administration Charges at maturity (exclusively for customers buying online). With choice of 4 portfolio strategies and wide range of funds, this plan gives you abundant flexibility to invest as per your needs.
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Vip} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container1">
                    <div className="hr-container flex items-center my-6 flex-col sm:flex-row">
                        <hr className="flex-grow border-t-2 border-gray-300" />
                        <h4 className="mx-4 text-3xl text-center sm:text-left">8 BENEFITS OF ICICI PRU SIGNATURE</h4>
                        <hr className="flex-grow border-t-2 border-gray-300" />
                    </div>
                </div>

                <div className="container1 mb-12">
                    <section className="plan-container">
                        <div className="features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={MoneyInsurance} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Financial Protection</h3>
                                <p className="text-gray-600 mt-2">Life Cover for the entire policy term so that your family is financially secured even in your absence.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={Affordable} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Low Charges</h3>
                                <p className="text-gray-600 mt-2">Entire premium without any deductions is invested in the funds along with return of mortality and policy administration charges at maturity.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={LoyaltyProgram} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Loyalty Rewards</h3>
                                <p className="text-gray-600 mt-2">Get rewarded with Wealth Boosters at regular intervals by just staying invested in the plan.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={Insurance} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Whole Life Cover</h3>
                                <p className="text-gray-600 mt-2">Enjoy policy benefits till 99 years of age with Whole Life option.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={Abundance} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Abundant Flexibility</h3>
                                <p className="text-gray-600 mt-2">Choice of 4 portfolio strategies and a wide range of funds across equity, balanced, and debt to suit your investment needs.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={Freeaccess} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Unlimited Free Switches</h3>
                                <p className="text-gray-600 mt-2">Switch between the funds as many times as you like for the Fixed Portfolio Strategy, completely free of cost.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={Withdraw} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Systematic Withdrawals</h3>
                                <p className="text-gray-600 mt-2">Option to get regular money from your fund value with the Systematic Withdrawal Plan.</p>
                            </div>
                            <div className="feature bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                                <img src={Deduction} width="50" height="50" alt="" className="mx-auto" />
                                <h3 className="text-xl font-semibold mt-4">Tax Benefits</h3>
                                <p className="text-gray-600 mt-2">You may receive tax-free maturity amount under Sec 10(10D) and tax rebate on premium paid under Sec 80C.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default PruSignature;