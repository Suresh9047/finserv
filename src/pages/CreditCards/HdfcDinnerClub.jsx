import Card1 from '../../assets/credit_cards/card1.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcDinnerClub = () => {
  const features = [
    'Metal Card',
    'Unlimited Airport Lounge Access',
    '6 Complimentary Golf games every quarter across the finest courses in the world',
    'Complimentary Annual memberships of Club Marriott, Amazon Prime, Swiggy One',
    '10,000 Bonus Reward Points on spends of ₹4 lakh every calendar quarter',
    '2X Reward Points on Weekend Dining',
    '5 Reward Points for every ₹150 spent',
    'Up to 10X Reward Points via SmartBuy',
  ];

  const eligibility = [
    'For Salaried Indian national:',
    'Age: Min 21 yrs & Max 60 yrs,',
    'Income: Net Monthly Income > ₹1.75 Lakhs per month',
    'For Self-Employed Indian national:',
    'Age: Min 21 yrs & Max 65 yrs,',
    'Income: ITR > ₹21 Lakhs per annum',
  ];

  const fees = [
    'Details about fees and charges can be checked on the official website.'
  ];


  return (
    <div className='mt-[160px] '>
      <Card
        title="  Smarter Spending Starts Here, Get Your Card Today"
        cardName=" Diners Club Black Metal Edition Credit Card"
        content="Global Belonging, Ready For You..."
        cardImage={Card1}
        features={features}
        eligibility={eligibility}
        fees={fees}
      />

      <HdfcSection />

    </div>


  );
};

export default HdfcDinnerClub;
