import { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement } from 'chart.js';
import GST from '../../assets/gst.jpg';


Chart.register(ArcElement);

function GSTCalculator() {
    const [amountWithGST, setAmountWithGST] = useState("1000000"); // store as string
    const [gstRate, setGstRate] = useState(5);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [cost, setCost] = useState(0);
    const [profitRatio, setProfitRatio] = useState(0);
    
    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-IN').format(num);
    };
    const updateChart = () => {
        const numericAmount = parseFloat(amountWithGST) || 0;
    
        let base, profit, gst;
    
        if (taxType === 'Exclusive') {
            base = cost;
            profit = (base * profitRatio) / 100;
            gst = ((base + profit) * gstRate) / 100;
        } else {
            const totalRate = gstRate + profitRatio;
            base = numericAmount / (1 + totalRate / 100);
            profit = (base * profitRatio) / 100;
            gst = (base * gstRate) / 100;
        }
    
        if (chartInstance.current) {
            chartInstance.current.data.datasets[0].data = [base, profit, gst];
            chartInstance.current.update();
        }
    };
    
    
    
    
    
    
    const [taxType, setTaxType] = useState('Exclusive'); // 'Exclusive' or 'Inclusive'
    useEffect(() => {
        const numericAmount = parseFloat(amountWithGST) || 0;
    
        if (taxType === 'Inclusive') {
            const totalRate = gstRate + profitRatio;
            const base = numericAmount / (1 + totalRate / 100);
            setCost(base);
        } else {
            setCost(numericAmount);
        }
    }, [amountWithGST, gstRate, profitRatio, taxType]);
    

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Base Amount', 'Profit', 'GST'],
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: ['#FF8800', '#FDBA74', '#0283BB'],
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
            },
        });
    
        return () => {
            chartInstance.current?.destroy();
        };
    }, []);

    

    useEffect(() => {
        updateChart();
    }, [cost, gstRate, profitRatio, taxType]);
    
    const handleAmountChange = (event) => {
        setAmountWithGST(event.target.value);
    };
    
    const handleGSTChange = (event) => {
        setGstRate(parseInt(event.target.value, 10));
    };
    

    const handleProfitChange = (event) => {
        setProfitRatio(parseInt(event.target.value, 10));
    };

    
    let baseAmount, profitAmount, gstAmount;

    if (taxType === 'Exclusive') {
        baseAmount = cost;
        profitAmount = (baseAmount * profitRatio) / 100;
    gstAmount = ((baseAmount + profitAmount) * gstRate) / 100;
    } else {
        baseAmount = cost;
        profitAmount = (baseAmount * profitRatio) / 100;
        gstAmount = (baseAmount * gstRate) / 100;
    }
    
    const gstProfitValue = (() => {
        if (taxType === 'Exclusive') {
            const profit = (cost * profitRatio) / 100;
            const gst = ((cost + profit) * gstRate) / 100;
            return gst + profit;
        } else {
            const totalRate = gstRate + profitRatio;
            const base = cost / (1 + totalRate / 100);
            const profit = base * profitRatio / 100;
            const gst = base * gstRate / 100;
            return gst + profit;
        }
    })();
    
    

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="row">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">GST Calculator</h1>
                        <p>The Goods and Services Tax (GST) is a crucial part of India's tax system. Our GST calculator provides a
                            convenient way to calculate GST amounts for various transactions, ensuring accuracy and compliance.Whether
                            you're a business owner or a consumer, our GST calculator helps you understand the impact of GST on your
                            transactions. Calculate GST inclusive and exclusive amounts, and stay informed.</p>
                    </div>
                    <div className="row">
                        <h1 className="text-4xl font-bold mb-4">What is GST in India?</h1>
                        <p>The Goods and Service Tax Act was passed in India in 2017. It was introduced as a measure to integrate
                            various indirect taxes in the country into one single taxation system. GST effectively made the tax
                            network of the country more streamlined by replacing various taxes like VAT, service tax, excise duty,
                            etc. GST in India can be defined as the tax that is levied on the supply of goods and services in the
                            country. </p>
                        <p>This is a multi-stage, comprehensive, destination-oriented tax system that is charged on every value
                            addition. This way, the government has virtually created a single indirect tax to replace all of the
                            indirect taxes in the country. Under the GST system, tax is applicable at every point of sale, beginning
                            at the manufacturer, upto the final point of sale. Now let us understand the definition of GST in detail:
                        </p>
                    </div>
                    <div className="row">
                        <h1 className="text-4xl font-bold mb-4">Multi-Stage</h1>
                        <p className="gst-description">
                            An item changes hands multiple times along the entire supply chain. It is a multi-stage taxation system
                            that starts at the manufacturer up until the point of final sale. Given below are the stages of the supply
                            chain where GST is applicable, making it multi-stage:
                        </p>
                        <ul className="list-disc list-inside text-gray-800">
                            <li>Purchase of raw materials meant for production</li>
                            <li>Manufacturing process</li>
                            <li>Storage and warehousing of finished products</li>
                            <li>Sale to wholesalers</li>
                            <li>Sale to retailers</li>
                            <li>End use sale</li>
                        </ul>
                    </div>
                </section>

                {/* calculator section */}
                <section className="">
                    <div className="container">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                                {/* Left Panel */}


<div className="calculator-section bg-white p-6 rounded-2xl shadow-md space-y-6 border border-gray-200">
    {/* Amount Input */}
    <div className="added-placeholder">
        <label htmlFor="amount" className="block text-gray-700 font-medium mb-1">Amount</label>
        <input
    type="number"
    inputMode="numeric"
    min="0"
    id="amount"
    value={amountWithGST}
    onChange={(e) => {
        setAmountWithGST(e.target.value);
    }}
    onBlur={() => {
        const value = parseFloat(amountWithGST);
        if (isNaN(value) || value < 0) {
            setAmountWithGST("0");
        } else {
            setAmountWithGST(String(value));
        }
    }}
    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-lg"
/>

    </div>

    {/* GST Rate Selector */}
    <div>
        <label className="block text-gray-700 font-medium mb-1">GST %</label>
        <select
            value={gstRate}
            onChange={(e) => setGstRate(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-lg"
        >
            {[5, 12, 18, 28].map((rate) => (
                <option key={rate} value={rate}>{rate}%</option>
            ))}
        </select>
    </div>

    {/* Tax Type */}
    <div>
        <label className="block text-gray-700 font-medium mb-1">Tax Type</label>
        <select
            value={taxType}
            onChange={(e) => setTaxType(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-lg"
        >
            <option value="Exclusive">Exclusive</option>
            <option value="Inclusive">Inclusive</option>
        </select>
    </div>

    {/* Result Display */}
    <div className="calculator-answer bg-gray-100 p-4 rounded-xl text-center space-y-3">
        <div>
            <div className="text-2xl font-bold text-gray-800" title={baseAmount.toFixed(2)}>
                ₹ {formatNumber(baseAmount.toFixed(2))}
            </div>
            <div className="text-sm text-gray-600">Actual Amount</div>
        </div>

        <div className="text-lg font-bold text-gray-500">+</div>

        <div>
            <div className="text-2xl font-bold text-gray-800" title={gstAmount.toFixed(2)}>
                ₹ {formatNumber(gstAmount.toFixed(2))}
            </div>
            <div className="text-sm text-gray-600">GST Amount</div>
        </div>

        <div className="text-lg font-bold text-gray-500">=</div>

        <div>
            <div className="text-2xl font-bold text-orange-600" title={(baseAmount + gstAmount).toFixed(2)}>
                ₹ {formatNumber((baseAmount + gstAmount).toFixed(2))}
            </div>
            <div className="text-sm text-gray-700">Total Amount</div>
        </div>
    </div>
</div>


                                {/* Right Panel */}
                                <div className="bg-[#FFF7ED] px-4 py-6 rounded-2xl shadow-md h-[625px]">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
    GST Calculation Breakdown
  </h2>

  <div className="bg-white rounded-xl shadow-inner p-6 flex flex-col items-center border border-gray-100">
    <div className="w-full max-w-[200px]">
      <canvas ref={chartRef} className="w-[180px] h-[180px]" />
    </div>

    <div className="mt-6 text-sm text-gray-700 space-y-3 text-center">
      <p>
        <strong>Cost of Goods/Services:</strong> ₹ {formatNumber(cost)}
      </p>
      <p>
        <strong>Total GST + Profit:</strong> ₹ {formatNumber(gstProfitValue.toFixed(2))}
      </p>
    </div>

    {/* Uncomment this if you want to add a CTA button */}
    {/* <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition">
      Calculate Loan
    </button> */}
  </div>
</div>

                            </div>

                        </div>
                    </div>
                </section>


                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h2 className="font-bold text-2xl mb-2">
                            What are the Different Taxes Under GST?
                        </h2>
                        <p className="text-gray-600">
                            The Goods and Services Tax is a multi-faceted system that is further divided into four different tax systems.
                            Given below are the different types of GST applicable on the supply of goods and services:
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Central Goods and Service Tax (CGST)</h2>
                        <p className="text-gray-600">
                            The CGST Act of 2017 makes a provision for the Central Government to collect taxes on the supply of goods and
                            services within the state itself. The provision is applicable to all the states of the country with the
                            exception of Jammu and Kashmir. The act is composed of 3 schedules, 21 chapters, and 174 sections. Given below
                            are the three schedules of the act:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li><strong>Schedule I:</strong> This schedule pertains to the treatment of activities as supply without any
                                consideration</li>
                            <li><strong>Schedule II:</strong> This schedule details all the activities that are to be considered as supply
                                of goods and services</li>
                            <li><strong>Schedule III:</strong> This schedule talks about all the activities that are not considered as
                                supply of goods or services</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">State Goods and Service Tax (SGST)</h2>
                        <p className="text-gray-600">
                            The SGST Act empowers the state government to levy taxes on the supply of goods and services from their states
                            while the Central Government refrains from doing so. All other state taxes like Luxury Tax, States Sales Tax,
                            Lottery Tax, Entertainment Tax, etc. that were applicable in the previous tax regime are now integrated into
                            the SGST Act of 2017.
                        </p>
                        <p className="text-gray-600">
                            In case of intra-state supply of goods and services, equal parts of CGST and SGST are applicable on the buyer.
                            While the CGST is received by the Central Government, the SGST is received by the respective State Government.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Integrated Goods and Service Tax (IGST)</h2>
                        <p className="text-gray-600">
                            IGST is charged from buyers in the case of inter-state supply of goods and services, that is when the supply
                            of goods and services occurs between two states or outside the state. Simply put, if the location of the buyer
                            and seller are in different states, IGST will be applicable on the buyer. This is also applicable in other
                            scenarios of inter-state transactions like import of goods and services where the transaction has been dealt
                            by an SEZ unit. The taxes collected are then shared between the Central and State Governments in the
                            pre-agreed proportions.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Union Territory Goods and Service Tax (UTGST)</h2>
                        <p className="text-gray-600">
                            Apart from the above mentioned three main types of GST, there is also something called UTGST. This tax is only
                            applicable in the Union Territories of the country which include Delhi, Chandigarh, Daman and Diu, Dadra and
                            Nagar Haveli, Lakhswapeed, and Puducherry. The characteristics of UTGST are similar to SGST and regulate the
                            collection of taxes for transactions happening in the Union Territories.
                        </p>
                    </div>
                </section>

                <section className="py-0">
                    <div className="container">
                        <div className="container py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-start">
                                <div className="w-full md:w-[100%]">
                                    <h2 className="font-bold text-2xl md:text-3xl text-gray-900">
                                        How to Use the GST Calculator?
                                    </h2>
                                    <div className="mt-2 inline-block">
                                        <span className="inline-block w-10 h-1 bg-orange-500 rounded-md"></span>
                                    </div>
                                    <p className="mt-3 text-gray-700">
                                        The OM Finserv GST Calculator is a powerful tool designed to
                                        simplify complex GST calculations for taxpayers. Whether you are a
                                        business owner, freelancer, or consumer, this calculator helps
                                        determine GST-inclusive and GST-exclusive prices with ease. By
                                        eliminating manual calculations, it reduces errors and saves
                                        valuable time, making it an essential resource for financial
                                        planning and tax compliance.
                                    </p>
                                    <p className="mt-3 text-gray-700">
                                        Using GST Calculator is straightforward. Users simply need to
                                        select whether they want to calculate a GST-inclusive or
                                        GST-exclusive amount, enter the total value, and choose the
                                        applicable GST rate from the available options. With just a click
                                        of the ‘Calculate’ button, the tool provides instant results,
                                        displaying both the GST amount and the final price after tax.
                                    </p>
                                </div>
                                <div className="w-full">
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="mb-4">
                                            <h5 className="font-bold text-lg text-gray-900">Step-1</h5>
                                            <p className="text-gray-700">
                                                Select GST Inclusive/GST Exclusive according to your
                                                requirement
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="font-bold text-lg text-gray-900">Step-2</h5>
                                            <p className="text-gray-700">Enter the amount</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="font-bold text-lg text-gray-900">Step-3</h5>
                                            <p className="text-gray-700">
                                                Select the appropriate GST rate from the drop down menu
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="font-bold text-lg text-gray-900">Step-4</h5>
                                            <p className="text-gray-700">
                                                Click on the ‘Calculate’ button to view the result. You will
                                                be able to see the amount before and after GST is applied as
                                                per your requirement.
                                            </p>
                                        </div>
                                        <a href="#cal">
                                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3 transition duration-300">
                                                Calculate GST Now →
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                            {/* Left Side: Text Content */}
                            <div className="w-full lg:w-[50%] text-center lg:text-left">
                                <h2 className="font-bold text-2xl text-gray-900">
                                    GST Calculation Formula
                                </h2>
                                <div className="w-12 h-1 bg-[#0282ba] rounded-md mx-auto lg:mx-0 mt-2"></div>
                                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                                    A taxpayer can calculate the GST amount based on whether it is
                                    included or excluded from the value of supply. If GST is excluded,
                                    the GST amount is calculated using the formula:{" "}
                                    <span className="font-semibold">(Value of Supply × GST%) / 100</span>,
                                    and the final price is determined by adding the GST amount to the
                                    value of supply. However, if GST is already included in the value of
                                    supply, the GST amount is calculated by subtracting the adjusted
                                    value from the total value using the formula:{" "}
                                    <span className="font-semibold">
                                        Value of Supply – [Value of Supply × &#123;100 / (100 + GST%)&#125;]
                                    </span>.These formulas help businesses, manufacturers, wholesalers, and
                                    retailers accurately determine the GST amount applicable to their
                                    transactions.
                                </p>
                            </div>

                            {/* Right Side: Formula Box */}
                            <div className="w-full lg:w-[55%] flex justify-center mt-6 lg:mt-0">
                                <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#0282ba] rounded-bl-full"></div>
                                    <h5 className="font-bold text-lg text-gray-900">
                                        To Add GST to Base Amount
                                    </h5>
                                    <p className="text-gray-700 mt-2">
                                        GST Amount = <br />
                                        <span className="font-semibold">
                                            (Original Cost of the Product * applicable GST %)/100
                                        </span>
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        Net Price = <br />
                                        <span className="font-semibold">
                                            Original Cost + GST Amount
                                        </span>
                                    </p>
                                    <h5 className="font-bold text-lg text-gray-900 mt-6">
                                        To Remove GST to Base Amount
                                    </h5>
                                    <p className="text-gray-700 mt-2">
                                        GST Amount = <br />
                                        <span className="font-semibold">
                                            Original Cost – (Original Cost * (100 / (100 + GST%)))
                                        </span>
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        Net Price = <br />
                                        <span className="font-semibold">
                                            Original Cost – GST Amount
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-0 pb-0">
                    <div className="container mx-auto mt-5">
                        <h2 className="pt-2 text-2xl font-semibold text-gray-900">
                            Understanding GST Calculation with Examples
                        </h2>
                        <p className="text-gray-700">
                            The applicable GST can be calculated by simply multiplying the taxable amount with the
                            appropriate GST rate. If SGST/UTGST/CGST is to be applied to the final transaction, then the amount is half of
                            the original GST amount.
                        </p>
                        <p className="text-gray-700">
                            GST = Taxable Amount × GST Rate
                        </p>

                        <h5 className="text-base font-medium text-gray-900">
                            If you know the net amount which is already inclusive of GST, then
                            you can remove the GST amount from the total amount by using the below given formula:
                        </h5>
                        <div className="flex flex-col md:flex-row items-center ml-3">
                            <div className="w-full md:w-[47%]">
                                <div className="bg-blue-100 rounded-lg shadow-md p-6">
                                    <h5 className="text-lg font-semibold text-gray-900">
                                        GST excluding amount = GST including amount/(1 + GST rate/100)
                                    </h5>
                                    <h5 className="text-base font-semibold text-gray-900 mt-2">
                                        <strong>Example: </strong>The original total amount inclusive of GST is INR 525 and the applicable
                                        GST is 5%
                                    </h5>
                                    <p className="text-gray-700 mt-1">GST excluding amount = 525/(1 + 5/100) = 525/1.05</p>
                                    <p className="text-gray-700 mt-1">= 500</p>
                                    <p className="text-gray-700 mt-2">
                                        <strong>Note:</strong> The GST is calculated on the transaction value and not the retail price.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-auto text-center mt-4 md:mt-0">
                                <img
                                    src={GST}
                                    alt="GST Illustration"
                                    className="img-fluid max-w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    );
}

export default GSTCalculator;
