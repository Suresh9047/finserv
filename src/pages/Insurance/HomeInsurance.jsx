import { useState } from "react";
import homeinsurance1 from '../../assets/sample/homeinsurance2.png';
import HomeIcon1 from '../../assets/insurence/home-icon1.png';
import HomeIcon2 from '../../assets/insurence/home-icon-2.png';
import HomeIcon3 from '../../assets/insurence/home-icon-3.png';
import HomeIcon4 from '../../assets/insurence/home-icon-4.png';
import HomeIcon5 from '../../assets/insurence/home-icon-5.png';
import HomeIcon6 from '../../assets/insurence/home-icon-6.png';
import HomeInsuranceImg from '../../assets/insurence/not-covered.jpg';
import InsuracePartners from '../../components/InsurancePartners';
import ICICILOGO from '../../assets/insurence/icicilogo2.jpg';
import ApplyNowForm from "../../components/ApplyNowForm";

const HomeInsurance = () => {
    const partnersData = [
        { name: 'ICICI Lombard', logo: ICICILOGO },
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <div>

            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Home Insurance
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Your home, our priority. Your home is more than just a house; it's where life happens. Secure it with our reliable home insurance coverage.
                        </p>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                        >
                            Apply Now
                        </button>


                    </div>

                    {/* Right Image or SVG Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={homeinsurance1}
                            alt="Loan illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* Apply Now Modal */}
                <ApplyNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} loanTypeLabel="Insurance" />
            </div>

            {/* Breadcrumb Section */}
            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">&gt;</span>
                    <span>Home Insurance</span>
                </nav>
            </div>


            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <section className="container my-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Benefits Section */}
                        <div className="lg:w-7/12 w-full">
                            <h2 className="text-center text-[35px] text-[#FF8800] font-semibold leading-tight mb-10">
                                Benefits of <span className="text-[#0282ba] font-bold">Home Insurance</span> powered by <br />
                                ICICI Lombard
                            </h2>

                            {/* Icons Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-10">
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={HomeIcon1} alt="Shield" className="w-16 h-16" />
                                    <p className="text-gray-700 text-sm">Protect your wealth in case of fire accidents in your home</p>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={HomeIcon2} alt="Water Damage" className="w-16 h-16" />
                                    <p className="text-gray-700 text-sm">Get peace of mind by securing your home against loss due to water damages</p>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={HomeIcon3} alt="Calamities" className="w-16 h-16" />
                                    <p className="text-gray-700 text-sm">Secures you against unexpected calamities</p>
                                </div>
                            </div>

                            {/* Icons Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={HomeIcon4} alt="Gadgets" className="w-16 h-16" />
                                    <p className="text-gray-700 text-sm">Secure your household equipment and gadgets from fire and theft</p>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={HomeIcon5} alt="Lock" className="w-16 h-16" />
                                    <p className="text-gray-700 text-sm">Protects your possessions from theft</p>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={HomeIcon6} alt="Jewellery" className="w-16 h-16" />
                                    <p className="text-gray-700 text-sm">Gives financial protection for jewellery in case of fire and theft</p>
                                </div>
                            </div>
                        </div>

                        {/* Survey Section */}
                        <div className="lg:w-5/12 w-full bg-white border-[3px] border-[#FE6C0B] rounded-xl shadow-md p-6 mt-4 lg:mt-10">
                            <h4 className="text-xl font-semibold text-center text-[#0282ba] mb-6">
                                Take a <strong className="font-bold">Quick Survey</strong>
                            </h4>
                            <form className="space-y-5 text-sm text-gray-700">
                                <div>
                                    <label className="block mb-2" htmlFor="homeLoanYes">Q1. Have you taken a Home Loan?</label>
                                    <div className="space-x-4">
                                        <label htmlFor="homeLoanYes"><input id="homeLoanYes" type="radio" name="homeLoan" value="Yes" className="mr-1" /> Yes</label>
                                        <label htmlFor="homeLoanNo"><input id="homeLoanNo" type="radio" name="homeLoan" value="No" className="mr-1" /> No</label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2" htmlFor="houses-q2">Q2. How many houses do you own?</label>
                                    <div className="flex flex-wrap gap-4">
                                        {["0", "1", "2", "3", "4"].map((val) => (
                                            <label key={val} htmlFor={`houses-q2-${val}`}>
                                                <input id={`houses-q2-${val}`} type="radio" name="houses" value={val} className="mr-1" /> {val}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block mb-1" htmlFor="propertyType">Property Type</label>
                                        <select id="propertyType" className="w-full border border-gray-300 rounded p-2">
                                            <option value="BUNGALOW">BUNGALOW</option>
                                            <option value="APARTMENT">APARTMENT</option>
                                            <option value="VILLA">VILLA</option>
                                            <option value="ROW HOUSE">ROW HOUSE</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-1" htmlFor="city">City</label>
                                        <input id="city" type="text" className="w-full border border-gray-300 rounded p-2" defaultValue="Mumbai" />
                                    </div>
                                    <div>
                                        <label className="block mb-1" htmlFor="location">Location</label>
                                        <input id="location" type="text" className="w-full border border-gray-300 rounded p-2" defaultValue="Thane" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2" htmlFor="haveHomeInsurance">Have you taken Home Insurance?</label>
                                    <select id="haveHomeInsurance" className="w-full border border-gray-300 rounded p-2">
                                        <option>Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2" htmlFor="protectedHomeContentsYes">Q3. Have you protected your home contents like electronic devices, cash, jewellery?</label>
                                    <div className="space-x-4">
                                        <label htmlFor="protectedHomeContentsYes">
                                            <input id="protectedHomeContentsYes" type="radio" name="protectedHomeContents" value="Yes" className="mr-1" /> Yes
                                        </label>
                                        <label htmlFor="protectedHomeContentsNo">
                                            <input id="protectedHomeContentsNo" type="radio" name="protectedHomeContents" value="No" className="mr-1" /> No
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2" htmlFor="financiallyEquippedYes">Q4. If in case of an event in your home, are you financially equipped to manage the losses?</label>
                                    <div className="space-x-4">
                                        <label htmlFor="financiallyEquippedYes">
                                            <input id="financiallyEquippedYes" type="radio" name="financiallyEquipped" value="Yes" className="mr-1" /> Yes
                                        </label>
                                        <label htmlFor="financiallyEquippedNo">
                                            <input id="financiallyEquippedNo" type="radio" name="financiallyEquipped" value="No" className="mr-1" /> No
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2" htmlFor="intentionToBuyYes">Q5. Intention to buy home insurance after reading benefits of home insurance?</label>
                                    <div className="space-x-4">
                                        <label htmlFor="intentionToBuyYes">
                                            <input id="intentionToBuyYes" type="radio" name="intentionToBuy" value="Yes" className="mr-1" /> Yes
                                        </label>
                                        <label htmlFor="intentionToBuyNo">
                                            <input id="intentionToBuyNo" type="radio" name="intentionToBuy" value="No" className="mr-1" /> No
                                        </label>
                                    </div>
                                </div>

                                <div className="text-center pt-2">
                                    <button type="submit" className="bg-[#FE6C0B] w-full hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <div className="container text-center">
                        <h2 className="font-bold text-[35px] text-orange-500">Home Insurance</h2>
                        <p className="mt-4 text-gray-600">
                            This is a product that helps you cover your own home or rented apartment, and your personal belongings within.
                            This is a property insurance (also called homeowner’s insurance) from unforeseen circumstances such as
                            burglaries, fires, floods, storms, and explosions.
                        </p>
                        <h4 className="font-bold mt-8 text-[#0282ba] text-xl">Types of Home Insurance:</h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {/* Card 1 */}
                            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center relative">
                                <div className="text-orange-500 text-2xl font-bold border-4 border-[#FE6C0B] rounded-full w-14 h-14 flex items-center justify-center absolute -top-0 left-1/2 transform -translate-x-1/2">
                                    1
                                </div>
                                <h5 className="font-bold mt-8 text-lg text-center">Home structure insurance</h5>
                                <p className="mt-2 text-gray-600 text-center">
                                    This product covers the permanent structure of the house, including kitchen, bathroom fittings and roof, from any kinds of dangers and risks.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center relative">
                                <div className="text-orange-500 text-2xl font-bold border-4 border-[#FE6C0B] rounded-full w-14 h-14 flex items-center justify-center absolute -top-0 left-1/2 transform -translate-x-1/2">
                                    2
                                </div>
                                <h5 className="font-bold mt-8 text-lg text-center">Contents insurance</h5>
                                <p className="mt-2 text-gray-600 text-center">
                                    This product covers the contents within the house, such as documents, electronics, and jewellery, from damages and losses owing to theft, fire, flood, etc.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center relative">
                                <div className="text-orange-500 text-2xl font-bold border-4 border-[#FE6C0B] rounded-full w-14 h-14 flex items-center justify-center absolute -top-0 left-1/2 transform -translate-x-1/2">
                                    3
                                </div>
                                <h5 className="font-bold mt-8 text-lg text-center">Fire insurance</h5>
                                <p className="mt-2 text-gray-600 text-center">
                                    This product provides comprehensive coverage against fire that covers both the structure and the contents within the structure. Incidents like natural calamities and accidents are covered under a fire insurance policy.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {/* Card 4 */}
                            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center relative">
                                <div className="text-orange-500 text-2xl font-bold border-4 border-[#FE6C0B] rounded-full w-14 h-14 flex items-center justify-center absolute -top-0 left-1/2 transform -translate-x-1/2">
                                    4
                                </div>
                                <h5 className="font-bold mt-8 text-lg text-center">Theft insurance</h5>
                                <p className="mt-2 text-gray-600 text-center">
                                    Theft insurance covers any damages you might incur because of robbery. It compensates you for stolen goods and valuables, as far as the insurer can ascertain their value.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center relative">
                                <div className="text-orange-500 text-2xl font-bold border-4 border-[#FE6C0B] rounded-full w-14 h-14 flex items-center justify-center absolute -top-0 left-1/2 transform -translate-x-1/2">
                                    5
                                </div>
                                <h5 className="font-bold mt-8 text-lg text-center">Landlord’s insurance</h5>
                                <p className="mt-2 text-gray-600 text-center">
                                    Landlord’s insurance is a unique type of home insurance policy. It covers homeowners against financial losses they might incur with rental properties.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-12">
                    <div className="container">
                        <div className="text">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-[#0283BB] text-3xl font-extrabold mb-6 text-center"
                                    style={{ fontSize: '2rem' }}>
                                    Benefits of Home Insurance powered by ICICI Lombard
                                </h3>
                                <ul className="ml-6 space-y-2 text-lg text-gray-700 list-none"
                                    style={{ marginLeft: '0' }}>
                                    <li><strong>Protect your wealth</strong> in case of Fire accidents in your home</li>
                                    <li><strong>Get peace of mind</strong> by securing your home against loss due to water damages</li>
                                    <li><strong>Secures</strong> you against unexpected calamities</li>
                                    <li><strong>Secure your household</strong> equipment and gadgets from fire and theft</li>
                                    <li><strong>Protects</strong> your possessions from theft</li>
                                    <li><strong>Gives financial</strong> protection for jewellery in case of fire and theft</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-5">
                    <div className="container">
                        <h1 className="text-center text-3xl text-[#0282ba] font-semibold mb-4"
                            style={{ fontSize: '2rem' }}>
                            What is Not Covered by Home Insurance?
                        </h1>
                        <p className="text-center text-lg text-gray-600 mb-6"
                            style={{ fontSize: '1rem' }}>
                            Our home insurance plans provide all-round protection for your home. While we have thought of
                            everything – even damage caused due to the impact of an aircraft is covered! However, there are
                            some things that escape the coverage of home insurance in general. These include, but are not
                            limited to:
                        </p>

                        <div className="flex flex-col lg:flex-row items-center rounded-lg shadow-lg">
                            {/* Image Section */}
                            <div className="lg:w-1/2 w-full text-center mb-4 lg:mb-0">
                                <img
                                    src={HomeInsuranceImg}
                                    alt="Home Insurance Illustration"
                                    className="img-fluid rounded"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="lg:w-1/2 w-full" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                                <ul className="list-none space-y-4 text-lg text-gray-700">
                                    <li>
                                        <span className="font-semibold text-red-600">Pre-existing damages:</span> Any existing
                                        damage, injury, disease, or illness occurring before the cover commences.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-red-600">War:</span> Damage due to war, invasion,
                                        foreign enemies, hostilities, civil war, rebellion, revolution, etc.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-red-600">Legal confiscation:</span> Damage due to
                                        confiscation, commandeering, requisition, or destruction by government authorities.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-red-600">Nuclear damage:</span> Any damage caused by
                                        ionizing radiation or contamination by radioactivity.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-red-600">Wear and tear:</span> Damage due to general
                                        wear and tear or gradual deterioration.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-1">
                    <div className="container">
                        <h1 className="text-center text-3xl font-bold text-[#0282ba] mb-4">
                            What is the need of Home Insurance in India?
                        </h1>
                        <p className="text-gray-700 text-lg mb-6">
                            You always need to protect your valuable assets from damage. The same goes for our home, which
                            is probably one of the most valuable assets. There’s a lot you can do to protect your home — locks
                            to keep out invaders, a sprinkler system to put out fires, CCTV cameras to deter untoward
                            activities and so much more. However, the ultimate back-up plan is a home insurance plan. Here
                            are some reasons why you need to invest in a good home insurance to keep your home safe.
                        </p>
                        <ul className="list-[square] list-inside marker:text-red-600 text-lg text-gray-800 space-y-3">
                            <li>Protection from Natural Calamities</li>
                            <li>Protection from Man-Made Calamities</li>
                            <li>Protecting the contents of your home</li>
                            <li>Protect you against Personal Accidents</li>
                        </ul>
                    </div>
                </section>

                <InsuracePartners
                    heading="Trusted Insurance Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default HomeInsurance;