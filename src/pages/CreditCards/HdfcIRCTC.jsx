import Card12 from '../../assets/credit_cards/card12.png';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcIRCTC = () => {
    const features = [
        '5 Reward Point for every INR 100 spent on IRCTC ticketing website and Rail Connect App.',
        '1 Reward Point for every INR 100 spent on all other spends*.',
        'Additional 5% cashback on train ticket bookings via HDFC Bank SmartBuy.',
        '8 complimentary access to select IRCTC Executive Lounge every year (2 per quarter)',
        'Gift voucher worth INR 500 on quarterly spends of INR 30,000.',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Gross Monthly Income> ₹25,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > Rs 6 Lakhs per annum',
    ];

    const fees = [
        'Joining/Renewal Membership Fee – ₹500/- + Applicable Taxes',
        'Spend ₹50,000 or more in a year, before your Credit Card renewal date and get your renewal fee waived off',
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="IRCTC HDFC Bank Credit Card"
                cardImage={Card12}
                content="There's a train ride in every swipe..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />
            
            <HdfcSection />
        </div>
    )
}

export default HdfcIRCTC