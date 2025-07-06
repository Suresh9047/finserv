import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import ReusePlanOffersYou from '../../../components/ReusePlanOffersYou';
import { FaCheck } from 'react-icons/fa';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const FutureGeniusEducationPlan = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    const points = [
        "3 plan options to build your additional income stream - Choose between Early Income, Early Income with Guaranteed Money Back, or Deferred Income Plan with inbuilt guarantees and cash bonuses.",
        "Option to accrue survival benefits and take them as per need - Accumulate your survival benefit payouts and withdraw as much as you like, whenever you like.",
        "Choice of income period including Whole Life Income Option - Receive income and avail life cover till 100, 85, 75, 70, 65, or 60 years.",
        "Enhanced protection through optional riders and Policy Continuance Benefit (PCB) - Customize protection cover by opting for riders. PCB ensures survival and maturity benefits continue without premium payment in case of death.",
        "Tax Benefit - You may be eligible for tax benefits as per prevailing income tax laws.",
    ];

    return (
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Max Life Insurance<br />
                            <span className="text-[#ff8c00]">Max Life Future Genius Education Plan</span>
                        </h1>
                    </div>

                   </div>

            </div>


            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5">
                        What the Max Life Future Genius Education Plan has in store for you
                    </h1>
                    <p className="text-gray-700">
                        Every individual's financial needs are different and with a host of features available under Max Life Future Genius Education Plan, you can choose the ones you like and customize your Term Plan from the following options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <h3 className="text-[#ff8c00] text-2xl mb-3">
                            Max Life Future Genius Education Plan
                        </h3>
                        <ul className=" text-[19px] text-gray-800 space-y-2">
                            <li>Whole Life Cover* with Life Long income</li>
                            <li>Guaranteed~ Income and Bonuses paid out from 2nd Policy Year#</li>
                            <li>Flexibility to accrue Income and Cash Bonuses**</li>
                            <li>Choice of 3 plan variants</li>
                            <li>Optional Policy Continuance Benefit##</li>
                            <li>Enhanced protection through optional Riders</li>
                        </ul>
                    </div>

                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <div className="rounded-lg shadow-lg p-2 border border-blue-200">
                            <img
                                src={Lifeinsurance}
                                alt="Life Insurance"
                                className="w-60 h-40 rounded-md"
                            />
                            <p className="text-center text-sm font-medium text-[#0283BB] mt-2">Life Insurance</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="p-4 md:p-8">
                <div className="max-w-6xl mx-auto mb-8">
                    <h1 className="text-[#0282ba] text-3xl mb-5 text-center">
                        YOUR ABSENCE SHOULDN’T CHANGE YOUR CHILD’S FUTURE.
                    </h1>
                    <p className="font-semibold text-red-700 mb-6">
                        A PLAN THAT HELPS YOU SECURE YOUR CHILD'S FUTURE, DESPITE THE RISING EDUCATION COST. EVEN WHEN YOU ARE NOT THERE.
                    </p>
                    <h1 className="text-[#0282ba] text-3xl mb-5 text-center">
                        A GOAL WITHOUT A PLAN IS JUST A WISH
                    </h1>
                    <p className="text-gray-700">
                        The various uncertainties of life and the rising cost of education directly affect a child's future. Secure your child's dreams with Max Life Future Genius Education Plan and be worry-free.
                    </p>
                </div>

                <div className='rounded shadow-lg p-4'>
                    <h1 className="text-[#0282ba] text-3xl text-center mb-5">THIS PLAN OFFERS</h1>
                    <ul className=" max-w-5xl mx-auto list-disc list-inside space-y-2 text-gray-700">
                        <li>Complete financial security through immediate payout/s & future Moneybacks</li>
                        <li><strong>Death Benefit:</strong> Choice of lump sum payable immediately or monthly income for 135 months to the nominee.</li>
                        <li><strong>Policy Continuance Benefit:</strong> Waiver of all future premiums ensuring your child's future education is taken care of, even in your absence.</li>
                        <li>Living benefits to ensure your child's dreams turn into reality.</li>
                        <li><strong>Guaranteed Moneybacks:</strong> 4 annual guaranteed payouts in the last 4 policy years.</li>
                        <li><strong>Lump sum Maturity Benefit:</strong> Includes Accrued Paid Up Additions (if any) and Terminal Bonus (if any).</li>
                        <li><strong>Flexibility to customize the plan:</strong> Choose policy terms from 13 to 21 years.</li>
                        <li>Enhanced protection through Riders for added security.</li>
                        <li>Tax Benefits as per prevailing tax laws.</li>
                    </ul>
                    <p className="text font-semibold text-red-700 text-center mt-6">
                        Ensure your child's education is never compromised. Plan today for a secure tomorrow!
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-3xl text-center text-[#0282ba] mb-8">
                    Key Features of Max Life Smart Wealth Income Plan
                </h2>
                <div className="space-y-4">
                    {points.map((text, index) => (
                        <div key={text.slice(0, 30) + index} className="flex items-start bg-blue-100 p-4 rounded shadow">
                            <FaCheck className="text-[#0282ba] mt-1 mr-3" />
                            <p className="text-gray-800">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ReusePlanOffersYou />
            <InsuracePartners
                heading="Trusted Investment Partners"
                partners={partnersData}
            />
        </div>
    )
}

export default FutureGeniusEducationPlan;