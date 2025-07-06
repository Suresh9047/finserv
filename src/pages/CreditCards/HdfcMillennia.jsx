import Card7 from '../../assets/credit_cards/card7.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcMillennia = () => {
    const features = [
        '5% Cashback on Amazon, BookMyShow, Cult.fit, Flipkart, Myntra, Sony LIV, Swiggy, Tata CLiQ, Uber and Zomato',
        '1% cashback on all other spends (except Fuel) including EMI & Wallet transactions',
        '₹1000 worth gift vouchers on spends of ₹1,00,000 and above in each calendar quarter ',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 40 yrs',
        'Income: Gross Monthly Income> Rs 35,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 40 yrs',
        'Income: ITR > ₹6 Lakhs per annum',
    ];

    const fees = [
        'Joining/Renewal Membership Fee – ₹500/- + Applicable Taxes',
        'Spend ₹50,000 or more in a year, before your Credit Card renewal date and get your renewal fee waived off',
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="Millennia Credit Card"
                cardImage={Card7}
                content="The Best CashBack Credit Card..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>

    )
}

export default HdfcMillennia