import Card6 from '../../assets/credit_cards/card6.png';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcMoneyBack = () => {
    const features = [
        '10X CashPoints on Amazon, BigBasket, Flipkart, Reliance Smart SuperStore & Swiggy',
        '5X CashPoints on EMI spends at merchant locations',
        '2 CashPoints on all other spends ( Excluding fuel, Wallets loads )',
        'Gift vouchers worth upto ₹2000 annually',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income> Rs 20,000',
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
                cardName="Money Back Plus Credit Card"
                cardImage={Card6}
                content="The Most Rewarding Card For Everyday Spends..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    )
}

export default HdfcMoneyBack;