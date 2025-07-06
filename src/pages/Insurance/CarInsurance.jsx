import { useState } from 'react';
import carinsurance1 from '../../assets/sample/carinsurance1.png';
import CarInsuranceImg from '../../assets/insurence/Car-Insurance1.jpg';
import CarInsuranceImg1 from '../../assets/insurence/Car-Insurance.jpg';
import Zero from '../../assets/insurence/zero.jpg';
import Consumable from '../../assets/insurence/consumable.jpg';
import Road from '../../assets/insurence/road.png';
import Noclaim from '../../assets/insurence/noclaim.jpg';
import Loss from '../../assets/insurence/loss.jpg';
import ThirdParty from '../../assets/insurence/thirdparty.png';
import Comprehensive from '../../assets/insurence/comprehensive.jpg';
import InsuracePartners from '../../components/InsurancePartners';
import ICICILOGO from '../../assets/insurence/icicilogo2.jpg';
import ApplyNowForm from "../../components/ApplyNowForm";


const CarInsurance = () => {
    const [activeTab, setActiveTab] = useState('covered');

    const partnersData = [
        { name: 'ICICI Lombard', logo: ICICILOGO },
    ];

    const coveredItems = [
        {
            title: 'Man-made damages',
            description: 'Damages caused to the vehicle due to riots, terrorist acts, strikes, etc. are covered.',
        },
        {
            title: 'Third-party coverage',
            description: 'Damages including third-party death and disability are covered.',
        },
        {
            title: 'Theft & Burglary',
            description: 'Damages caused due to theft, burglary, and housebreaking are covered.',
        },
        {
            title: 'Damage during transit',
            description: 'Damages caused while in transit via waterways, railways, or roads are covered.',
        },
    ];

    const notCoveredItems = [
        {
            title: 'Driving under influence',
            description: 'Damages caused when driving under the influence of alcohol or drugs are not covered.',
        },
        {
            title: 'No valid license',
            description: 'Damages caused when driving without a valid driving license are not covered.',
        },
        {
            title: 'Commercial use',
            description: 'Using a private vehicle for commercial purposes is not covered.',
        },
        {
            title: 'Lapsed policy',
            description: 'Driving with an expired insurance policy is not covered.',
        },
        {
            title: 'Mechanical failure',
            description: 'Electrical or mechanical failures of the vehicle are not covered.',
        },
        {
            title: 'Tyre, tube, or engine damage',
            description: 'Damages caused to the tyre, tube, or engine of the vehicle are not covered.',
        },
        {
            title: 'Contractual liability',
            description: 'Losses arising out of contractual liability of the owner/driver are not covered.',
        },
        {
            title: 'Geographical limits',
            description: 'Damages caused when driving out of geographical limits are not covered.',
        },
    ];

    const benefits = [
        {
            icon: '🛡️',
            title: 'Shield Against Accidents',
            description: 'Acts as a shield against accidents and damages.',
        },
        {
            icon: '⚖️',
            title: 'Legal Liabilities',
            description: 'Takes care of your legal liabilities.',
        },
        {
            icon: '🔧',
            title: 'Cashless Service',
            description: 'Cashless service at network garages.',
        },
        {
            icon: '➕',
            title: 'Add-On Coverage',
            description: 'Provides add-on coverage to your vehicle.',
        },
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <div>

            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Car Insurance
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Drive with confidence, knowing you're protected. Get the right car insurance coverage, quickly and easily. We offer flexible plans and hassle-free claims.
                        </p>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                        >
                            Apply Now
                        </button>


                    </div>

                    <div className="flex justify-center">
                        <img
                            src={carinsurance1}
                            alt="Loan illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                <ApplyNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} loanTypeLabel="Insurance" />
            </div>



            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">&gt;</span>
                    <span>Car Insurance</span>
                </nav>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <div className="bg-[#f5f9ff]">
                    <div className="bg-[#f5f9ff] rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-10">
                        <div className="w-full md:w-2/5 text-center">
                            <img
                                src={CarInsuranceImg}
                                alt="car"
                                className="w-full h-auto max-w-xs mx-auto md:mx-0"
                            />
                        </div>

                        <div className="w-full md:w-3/5 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Compare & <span className="text-black font-extrabold">save up to 91%</span> on Car Insurance
                            </h2>
                            <p className="mt-3 text-gray-700 text-lg">
                                Renew in <strong>2 minutes</strong>*
                            </p>

                            <input
                                type="text"
                                className="border border-gray-300 rounded px-4 py-3 mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                                placeholder="Enter car number (eg. DL-10-CB-1234)"
                            />

                            <button className="bg-[#ff5b00] text-white font-semibold py-3 mt-4 w-full rounded hover:bg-orange-600 transition">
                                View Prices →
                            </button>

                            <p className="mt-4 text-gray-700 text-sm">
                                Brand new car?{' '}
                                <button
                                    type="button"
                                    className="text-[#0282ba] underline bg-transparent border-none p-0 cursor-pointer"

                                >
                                    Click here
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <img
                                src={CarInsuranceImg1}
                                alt="Car Insurance"
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="text-orange-500 italic">What is</span>{' '}
                                <span className="text-[#0282ba]">Car Insurance?</span>
                            </h2>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Car insurance, also known as motor insurance, is a type of vehicle insurance that offers protection against
                                damages and risks caused due to an accident, natural disasters, or theft. Having a car insurance policy helps
                                you stay financially secured against third-party death, disability, and damages too.
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The government of India, as per the Motor Vehicles Act, has made it mandatory for all vehicle owners to own
                                third-party insurance cover. As a car owner, it is your responsibility to insure the car with a valid car
                                insurance policy. With a car policy, you can drive the car without having to worry about any financial and
                                legal liabilities.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                In case of theft too, you get protection up to the insured declared value mentioned in the policy. To get
                                policy benefits, it is important to buy or renew a car insurance policy on time.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="py-12">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-10">
                            <span className="text-[#0282ba]">Key Features of</span> <span className="text-[#0282ba]">Car Insurance Policy</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                               <h5 className="text-xl font-bold mb-2">Own Damage Cover</h5>
                                <p className="text-gray-600">Offers coverage against third parties and damages caused to your own car.</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                                <h5 className="text-xl font-bold mb-2">Third Party Cover</h5>
                                <p className="text-gray-600">Offers coverage against damages caused to third parties including person and property damages.</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                                <h5 className="text-xl font-bold mb-2">Car Insurance Add-ons</h5>
                                <p className="text-gray-600">Provides additional protection to the car at an extra premium.</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                                <h5 className="text-xl font-bold mb-2">Personal Accident Cover</h5>
                                <p className="text-gray-600">Vehicle owner or driver are covered up to Rs.15 lakh.</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                                <h5 className="text-xl font-bold mb-2">Cashless Network Garages</h5>
                                <p className="text-gray-600">Cashless repair services at 900+ garages.</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                                 <h5 className="text-xl font-bold mb-2">No Claim Bonus</h5>
                                <p className="text-gray-600">Up to 50% discount on car insurance premium for five consecutive claim-free years.</p>
                            </div>
                        </div>
                    </div>
                    <section className="adds">
                        <div className="container text-center py-10">
                            <h2 className="text-3xl font-bold text-center text-[#0282ba] mb-10">Car Insurance Add-ons</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {[
                                    { img: Zero, alt: "Zero Depreciation Cover", title: "Zero Depreciation Cover" },
                                    { img: Consumable, alt: "Consumables Cover", title: "Consumables Cover" },
                                    { img: Road, alt: "Roadside Assistance Cover", title: "Roadside Assistance Cover" },
                                    { img: Noclaim, alt: "No Claim Bonus Protection Add-on", title: "No Claim Bonus Protection Add-on" },
                                    { img: Loss, alt: "Loss of Personal Belongings", title: "Loss of Personal Belongings" },
                                ].map((addon) => (
                                    <div key={addon.title} className="addon-card text-center p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <img src={addon.img} alt={addon.alt} className="addon-img mb-4 mx-auto w-20 h-20 object-contain rounded-lg" />
                                        <h5 className="addon-title text-[#FF8800] font-semibold text-lg leading-snug">{addon.title}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    <section className="py-10">
                        <div className="container">
                            <h2 className="text-3xl font-bold text-center text-[#0282ba] mb-10">Types of Car Insurance Policy</h2>

                             <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 flex flex-col md:flex-row">
                                <img
                                    src={ThirdParty}
                                    alt="Third Party Car Insurance"
                                    className="w-full md:w-1/4 object-cover p-5"
                                />
                                <div className="p-6 flex flex-col justify-center md:w-full">
                                    <h5 className="text-2xl text-red-600 font-semibold mb-4">Third Party Car Insurance</h5>
                                    <p className="text-gray-600">
                                        This type of car insurance is mandatory as per the Motor Vehicles Act, 1988. It provides coverage against
                                        third party death, disability, and damages; it also covers property damages caused to third parties. The
                                        premium for this type of policy is decided by the IRDA and is revised on an annual basis.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
                                <img
                                    src={Comprehensive}
                                    alt="Comprehensive Car Insurance"
                                    className="w-full md:w-1/4 object-cover p-5"
                                />
                                <div className="p-6 flex flex-col justify-center md:w-full">
                                    <h5 className="text-2xl text-red-600 font-semibold mb-4">Comprehensive Car Insurance</h5>
                                    <p className="text-gray-600">
                                        Known as own damage insurance, comprehensive car insurance policy offers coverage against third party and
                                        damages caused to your own car. This type of insurance also protects the car against theft, natural and
                                        man-made calamities. The premium for own damage insurance is decided by the insurance company based on the
                                        cubic capacity, insured declared value, etc.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="py-10">
                        <div className="container">
                            <h2 className="text-3xl font-bold text-center text-[#0282ba] mb-8">Coverage Offered Under Car Insurance</h2>

                            {/* Tabs */}
                            <div className="flex justify-center mb-8">
                                <button
                                    onClick={() => setActiveTab('covered')}
                                    className={`px-6 py-2 font-semibold border-b-2 ${activeTab === 'covered' ? 'border-[#0282ba] text-[#0282ba]' : 'border-transparent text-gray-500'
                                        }`}
                                >
                                    Covered
                                </button>
                                <button
                                    onClick={() => setActiveTab('notCovered')}
                                    className={`px-6 py-2 font-semibold border-b-2 ${activeTab === 'notCovered' ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500'
                                        }`}
                                >
                                    Not Covered
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activeTab === 'covered' &&
                                    coveredItems.map((item) => (
                                        <div key={item.title} className="bg-white border border-green-400 rounded-lg shadow p-6">
                                            <h5 className="text-green-600 text-xl font-semibold mb-2">{item.title}</h5>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    ))}

                                {activeTab === 'notCovered' &&
                                    notCoveredItems.map((item) => (
                                        <div key={item.title} className="bg-white border border-red-400 rounded-lg shadow p-6">
                                            <h5 className="text-red-600 text-xl font-semibold mb-2">{item.title}</h5>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-10">
                        <div className="container">
                            <h2 className="text-3xl font-bold text-center mb-10 text-[#0282ba]">Benefits of Car Insurance</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit.title}
                                        className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
                                    >

                                        <div className="text-5xl mb-4">{benefit.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <InsuracePartners
                    heading="Trusted Insurance Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default CarInsurance;