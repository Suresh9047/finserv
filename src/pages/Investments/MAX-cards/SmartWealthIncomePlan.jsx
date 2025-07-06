import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import ReusePlanOffersYou from '../../../components/ReusePlanOffersYou';
import { FaCheck } from 'react-icons/fa';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const SmartWealthIncomePlan = () => {
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
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Max Life Insurance<br />
                            <span className="text-[#ff8c00]">Smart Wealth Income Plan Solution</span>
                        </h1>


                    </div>
                </div>

            </div>


            {/* Intro Section */}
            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5">
                        What the Max Life Smart Wealth Income Plan Solution has in store for you
                    </h1>
                    <p className="text-gray-700">
                        Every individual's financial needs are different and with a host of features available under Max Life Smart Wealth Income Plan Solution, you can choose the ones you like and customize your Term Plan from the following options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <h3 className="text-[#ff8c00] text-2xl mb-3">
                            Max Life Smart Wealth Income Plan Solution
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

            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-3xl text-center text-[#0282ba] mb-8">
                    Key Features of Max Life Smart Wealth Income Plan
                </h2>
                <div className="space-y-4">
                    {points.map((text) => (
                        <div key={text} className="flex items-start bg-blue-100 p-4 rounded shadow">
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


export default SmartWealthIncomePlan;