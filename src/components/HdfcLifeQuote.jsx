import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HdfcLifeQuote = ({
    brand = 'HDFC Life',
    title = 'HDFC Life Click 2 Protect Life',
    uin = '101N139V06',
    description = 'A Term Plan that adjusts to your needs and protects your family against uncertainties.',
}) => {
    const [nriStatus, setNriStatus] = useState('No');

    const handleNriClick = (value) => {
        setNriStatus(value);
    };

    return (

        <div className="flex flex-col md:flex-row gap-6 py-8 bg-white max-w-7xl mx-auto">
            {/* Left Section */}
            <div className="md:w-1/2 w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-[#0282ba]">HDFC LIFE</span> <br />
                    <span className="text-orange-500">{title}</span>
                </h1>
                <p className="text-sm text-gray-500 font-medium mb-2">UIN: {uin}</p>
                <p className="text-gray-700 mb-4">{description}</p>

                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <img
                            src="https://img.icons8.com/?size=512w&id=114406&format=png"
                            alt="Whole Life Cover"
                            className="w-10 h-10"
                        />
                        <p>Option to avail cover for Whole of Life*</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <img
                            src="https://img.icons8.com/?size=100&id=53863&format=png&color=000000"
                            alt="Income Payouts"
                            className="w-10 h-10"
                        />
                        <p>Income payouts for age 60 onwards**</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <img
                            src="https://img.icons8.com/?size=100&id=dDUBWodtrR78&format=png&color=000000"
                            alt="Plan Options"
                            className="w-10 h-10"
                        />
                        <p>Option to choose a cover which fits your needs from 3 plan options</p>
                    </div>
                </div>

                <hr className="mt-6 border-gray-300" />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-[#0282ba]">GET A FREE QUOTE</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="nri" className="block font-medium mb-2">Are you an NRI?</label>
                        <div className="flex gap-3">
                            {['Yes', 'No'].map((value) => (
                                <button
                                    type="button"
                                    key={value}
                                    onClick={() => handleNriClick(value)}
                                    className={`px-4 py-2 border rounded ${nriStatus === value
                                        ? 'bg-[#0282ba] text-white'
                                        : 'bg-white text-gray-700'
                                        }`}
                                >
                                    {value}
                                </button>
                            ))}
                            <input type="hidden" name="nri_status" value={nriStatus} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">Email Id</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email ID"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block font-medium mb-1">Mobile Number</label>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded">+91</span>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                pattern="[0-9]{10}"
                                placeholder="Enter Mobile number"
                                className="flex-1 border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            defaultChecked
                            className="mt-1"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                            I authorize HDFC Life and its representatives to contact me through Call, Email, SMS, or WhatsApp.
                            This consent overrides my registration under DNC / NDNC.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0282ba] text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                    >
                        PROCEED
                    </button>
                </form>
            </div>
        </div>

    );
};

HdfcLifeQuote.propTypes = {
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uin: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default HdfcLifeQuote;
