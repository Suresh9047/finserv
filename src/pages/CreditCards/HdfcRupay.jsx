import Card5 from '../../assets/credit_cards/card5.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcRupay = () => {
    const features = [
        '3% Cashpoints on Groceries, SuperMarket & Dining spends & all PayZapp transactions. (Maximum of 500 Points can be earned in a calendar month)',
        '2% Cashpoints on Utility spends (Maximum of 500 Points can be earned in a calendar month)',
        '1% Cashpoints on other spends (Excluding Rent, Wallet loads, EMI, Fuel & Government categories) (Maximum of 500 Points can be earned in a calendar month)',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income > ₹15,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > ₹6 Lakhs per annum',
    ];

    const fees = [
        'Joining/Renewal Membership Fee - ₹99/- + Applicable Taxes (Festive Season Offer!!!)',
        'Spend ₹25,000 or more in an annual year, before your Credit Card renewal date and get your renewal fee waived off from 2nd year onwards',
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="HDFC Bank UPI RuPay Credit Card"
                cardImage={Card5}
                content="Welcome to the new world of ‘Credit + Convenience’ with HDFC Bank UPI RuPay Credit Card, enabled for UPI payments..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    )
}

export default HdfcRupay