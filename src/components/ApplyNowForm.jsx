import { useState } from "react";
import PropTypes from "prop-types";

export default function ApplyNowForm({ isOpen, onClose, loanTypeLabel }) {
  const [selectedLoanType, setSelectedLoanType] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen && !showSuccess) return null;

  const handleLoanTypeChange = (e) => {
    setSelectedLoanType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1000);
  };

  let loanOptions = [];

  if (loanTypeLabel === "Insurance") {
    loanOptions = [
      { value: "health", label: "Health Insurance" },
      { value: "home", label: "Home Insurance" },
      { value: "car", label: "Car Insurance" },
      { value: "sme", label: "SME Insurance" },
    ];
  } else if (loanTypeLabel === "Loan") {
    loanOptions = [
      { value: "personal", label: "Personal Loan" },
      { value: "home", label: "Home Loan" },
      { value: "business", label: "Business Loan" },
      { value: "doctor", label: "Doctor Loan" },
      { value: "lrd", label: "LRD Loan" },
      { value: "lap", label: "LAP Loan" },
    ];
  } else if (loanTypeLabel === "Investments") {
    loanOptions = [
      { value: "icici", label: "ICICI direct life" },
      { value: "hdfc", label: "HDFC Life" },
      { value: "max", label: "MAX Life" },
    ];
  } else if (loanTypeLabel === "Choose Inversement") {
    loanOptions = [
      { value: "icici1", label: "ICICI Pru iProtect Smart" },
      { value: "icici2", label: "ICICI PRU iPROTECT RETURN OF PREMIUM" },
      { value: "icici3", label: "ICICI Pru Protect N Gain" },
      { value: "icici4", label: "ICICI Pru Guaranteed Income For Tomorrow (LUMPSUM)" },
      { value: "icici5", label: "ICICI Pru GIFT Pro" },
      { value: "icici6", label: "ICICI PRU SIGNATURE" },
      { value: "icici7", label: "ICICI Pru Gold" },
      { value: "icici8", label: "ICICI Pru Life Time Classic" },
      { value: "icici9", label: "ICICI Pru Smart Life" },
      { value: "icici10", label: "ICICI Pru Guaranteed Pension Plan" },
      { value: "icici11", label: "ICICI Pru Guaranteed Pension Plan Flexi" },
    ];
  } else if (loanTypeLabel === "Choose Inversements") {
    loanOptions = [
      { value: "max1", label: "Smart Secure Plus Plan" },
      { value: "max2", label: "Smart Wealth Plan Solution" },
      { value: "max3", label: "Smart Wealth Advantage Guarantee Plan" },
      { value: "max4", label: "Smart Wealth Income Plan Solution" },
      { value: "max5", label: "Future Genius Education Plan" },
      { value: "max6", label: "Flexi Wealth Advantage Plan" },
      { value: "max7", label: "Fast Track Super" },
      { value: "max8", label: "Platinum Wealth Plan Plus Solution" },
      { value: "max9", label: "Guaranteed Life Time Income Plan" },
    ];
  } else if (loanTypeLabel === "Choose Inversements") {
    loanOptions = [
      { value: "hdfc1", label: "HDFC Life Protect Life" },
      { value: "hdfc2", label: "HDFC Life Protect Super" },
      { value: "hdfc3", label: "HDFC Life Sanchay Plus" },
      { value: "hdfc4", label: "HDFC Life Sanchay Fixed Maturity Plan" },
      { value: "hdfc5", label: "HDFC Life Guaranteed Income Insurance Plan" },
      { value: "hdfc6", label: "HDFC Life Sanchay Par Advantage" },
      { value: "hdfc7", label: "HDFC Life Smart Protect Plan" },
      { value: "hdfc8", label: "HDFC Life Invest ULIP" },
      { value: "hdfc9", label: "HDFC Life Wealth" },
      { value: "hdfc10", label: "HDFC SL ProGrowth Flexi" },
      { value: "hdfc11", label: "HDFC Life Smart Woman Plan" },
      { value: "hdfc12", label: "HDFC Life Systematic Retirement Plan" },
      { value: "hdfc13", label: "HDFC Life Pension Guaranteed Plan" },
    ];
  } else if (loanTypeLabel === "Credit Card") {
    loanOptions = [
      { value: "creditcard1", label: "Diners Club Black Metal Edition Credit Card" },
      { value: "creditcard2", label: "Marriott Bonvoy HDFC Bank Credit Card" },
      { value: "creditcard3", label: "Swiggy HDFC Bank Credit Card" },
      { value: "creditcard4", label: "Regalia Gold Credit Card" },
      { value: "creditcard5", label: "HDFC Bank UPI RuPay Credit Card" },
      { value: "creditcard6", label: "MoneyBack+ Credit Card" },
      { value: "creditcard7", label: "Millennia Credit Card" },
      { value: "creditcard8", label: "Freedom Credit Card" },
      { value: "creditcard9", label: "IndianOil HDFC Bank Credit Card" },
      { value: "creditcard10", label: "Tata Neu Infinity HDFC Bank Credit Card" },
      { value: "creditcard11", label: "Tata Neu Plus HDFC Bank Credit Card" },
      { value: "creditcard12", label: "IRCTC HDFC Bank Credit Card" },
      { value: "creditcard13", label: "Shoppers Stop HDFC Bank Credit Card" },
      { value: "creditcard14", label: "HDFC Bank Times Card Credit" },
    ];
  } else if (loanTypeLabel === "Apply") {
    loanOptions = [
      { value: "apply1", label: "Loan" },
      { value: "apply2", label: "Credit Cards" },
      { value: "apply3", label: "Insurance" },
      { value: "apply4", label: "Investments" },
    ];
  }

  return (
    <>
      {(isOpen || showSuccess) && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          {showSuccess ? (
            <div className="bg-white rounded-lg shadow-xl px-8 py-6 max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Success!</h2>
              <p className="text-gray-700">Your application has been successfully submitted.</p>
            </div>
          ) : (
            <div className="bg-white mt-10 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden">
              <div className="relative p-6 sm:p-8 text-left">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  aria-label="Close form"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Apply Now</h2>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                >
                  <div>
                    <label htmlFor="firstName" className="block mb-1 font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="Enter your first name"
                      className="w-full border rounded-md px-4 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block mb-1 font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Enter your last name"
                      className="w-full border rounded-md px-4 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border rounded-md px-4 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="123-456-7890"
                      className="w-full border rounded-md px-4 py-2"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="loanTypeSelect" className="block mb-1 font-medium text-gray-700">
                      {loanTypeLabel} Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="loanTypeSelect"
                      required
                      
                      value={selectedLoanType}
                      onChange={handleLoanTypeChange}
                      className="w-full border rounded-md px-4 py-2 bg-white text-black"
                    >
<option value="" disabled>
  {loanTypeLabel === "Choose Inversement"
    ? "Select ICICI Pru Plan"
    : loanTypeLabel === "Choose Inversements"
    ? "Select MAX Pru Plan"
    : `Select ${loanTypeLabel}`}
</option>


                      {loanOptions.map((option) => (
                        <option key={option.label} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block mb-1 font-medium text-gray-700">
                      Description <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      placeholder="Additional details..."
                      className="w-full border rounded-md px-4 py-2 resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="flex items-start space-x-2 text-xs text-gray-700">
                      <input type="checkbox" required className="mt-1" />
                      <span>
                        I authorize <strong>OMFinserv</strong> and its representatives to Call, SMS
                        or communicate via WhatsApp on behalf of Banks, NBFC’s, HFC’s, and Insurance
                        companies. This consent overrides any registration for DNC / NDNC. I confirm I
                        am in India, I am a major and a resident of India and I have read, and I
                        accepted OMFinserv's{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Privacy Policy
                        </a>.</span>
                    </label>
                  </div>

                  <div className="sm:col-span-2 flex justify-end gap-x-4 mt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#0282ba] text-white font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

ApplyNowForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  loanTypeLabel: PropTypes.string.isRequired,
};
