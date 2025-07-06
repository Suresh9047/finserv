import Card8 from '../../assets/credit_cards/card8.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcFreedom = () => {
    const features = [
        'Earn 10X CashPoints on your favourite merchants ( Big Basket, BookMyshow, OYO, Swiggy & Uber )',
        'Earn 5X CashPoints on EMI spends at merchant locations',
        'Earn 1 CashPoint per every Rs.150 on other spends ( Excluding fuel, Wallets loads )',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Gross Monthly Income> Rs 12,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
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
                cardName="Freedom Credit Card"
                cardImage={Card8}
                content="The Best Card for Your Everyday Spends & Big Purchases..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    )

}

export default HdfcFreedom