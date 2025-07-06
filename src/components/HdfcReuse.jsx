import { useState } from 'react';
import PropTypes from 'prop-types';
import ApplyNowForm from "../components/ApplyNowForm";

const HdfcReuse = ({ title, cardName, content, cardImage, features, eligibility, fees }) => {
    const [activeTab, setActiveTab] = useState('features');

    const getTabLabel = (tab) => {
        if (tab === 'features') return 'Features';
        if (tab === 'eligibility') return 'Eligibility';
        return 'Fees & Charges';
    };
    const [isFormOpen, setIsFormOpen] = useState(false);


    return (

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-12">
            <section className="herosection bg-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* <div className="hidden md:block md:w-1/12" /> */}

                    <div className="w-full md:w-8/12 text-center md:text-left">
                        <h1 style={{ color: '#0283BB', fontSize: '40px', marginBottom: '20px', fontWeight: 'bolder' }}>
                            {title}
                        </h1>
                        <h2 className="mb-4 fw-bold" style={{ color: '#FC8001' }}>{cardName}</h2>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2">{content}</h4>
                        <a
                            href="https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XSPG&SMCode=P23939&LGCode=DGPI&LCCode=XSPG&LC2=XSPG#nbb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-custom inline-block mt-4 px-6 py-3 bg-[#0282ba] text-white rounded-lg hover:bg-blue-700 transition"
                            >
                            Get Your Card
                            </a>

                    </div>

                    <div className="w-full md:w-3/12 flex justify-center md:justify-end">
                        <img
                            src={cardImage}
                            alt="Credit Card"
                            className="w-1/2 md:w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            <div className="rounded-md shadow-md max-w-7xl mx-auto p-8 mt-20">
                <div className="bg-[#0282ba] text-white py-7 px-7 rounded-md text-lg font-bold text-center">
                    {cardName}
                </div>

                <div className="flex gap-2 mt-4">
                    {['features', 'eligibility', 'fees'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 font-semibold rounded ${activeTab === tab
                                ? 'bg-[#0282ba] text-white'
                                : 'bg-orange-500 text-white hover:bg-orange-600'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {getTabLabel(tab)}
                        </button>
                    ))}
                </div>

                {/* Tab Content inside Card */}
                <div className="mx-4 sm:mx-6 mt-4">
                    <div className="bg-white rounded-lg shadow-md p-6 min-h-[300px]">
                        {activeTab === 'features' && (
                            <div role="tabpanel">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Key Features:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    {features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'eligibility' && (
                            <div role="tabpanel">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Eligibility:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    {eligibility.map((item) => {
                                        const isHeading = item.startsWith('For ');
                                        return (
                                            <li key={item} className={isHeading ? 'mt-2 list-none' : ''}>
                                                {isHeading ? <span className="font-semibold">{item}</span> : item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}


                        {activeTab === 'fees' && (
                            <div role="tabpanel">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Fees & Charges:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    {fees.map((fee) => (
                                        <li key={fee}>{fee}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center p-3 sm:p-4">
                <button
                    className="bg-[#0282ba] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md"
                    onClick={() => {
                        window.open(
                        'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XSPG&SMCode=P23939&LGCode=DGPI&LCCode=XSPG&LC2=XSPG#nbb',
                        '_blank'
                        );
                    }}
                    >
                    Apply Now
                    </button>


                    {/* Reusable Modal Form */}
                    <ApplyNowForm
                        isOpen={isFormOpen}
                        onClose={() => setIsFormOpen(false)}
                        loanTypeLabel="Credit Card"
                    />
                </div>
            </div>
        </div>

    );
};

HdfcReuse.propTypes = {
    title: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    eligibility: PropTypes.arrayOf(PropTypes.string).isRequired,
    fees: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HdfcReuse;
