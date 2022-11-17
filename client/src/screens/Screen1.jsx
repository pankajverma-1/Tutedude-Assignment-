import React from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import './Screen1.css';
const Screen1 = () => {
  const cardsDetail = [
    {
      candidateName: 'Dhiraj Saxsena',
      candidateDate: '14 Sep, 2022',
      enrolled: 6,
      skill: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'Java'],
      amount: 185,
    },
    {
      candidateName: 'Subhash Mishra',
      candidateDate: '15 Sep, 2022',
      enrolled: 23,
      skill: [
        'UI/UX',
        'Photoshop',
        'Illustrator',
        'Python',
        'MERN',
        'Java',
        'C++',
      ],
      amount: 485,
    },
    {
      candidateName: 'Prafull Kumar',
      candidateDate: '1-12-2002',
      enrolled: 23,
      skill: [
        'UI/UX',
        'Photoshop',
        'Illustrator',
        'Python',
        'MERN',
        'Java',
        'C++',
      ],
      amount: 485,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-primary link-path">
          UI/UX &gt; Refer & Earn &gt; Friends Referred
        </div>
        <div className="walletContainer">
          <div className="">
            <span
              className="text-primary"
              style={{ color: '#800080', fontSize: '16px', lineHeight: '24px' }}
            >
              Your Referral Code
            </span>
            <div className="referralCodeBox">
              <span
                style={{
                  letterSpacing: '0.75rem',
                  fontWeight: 500,
                }}
              >
                EDCH54
              </span>
            </div>
          </div>
          <div className="wallet">
            <span className="text-primary" style={{ color: '#800080' }}>
              Wallet Balance
            </span>
            <div style={{ fontWeight: '500' }}>
              <span> &#8377;</span> 500
            </div>
          </div>
        </div>
        <div className="scrollable">
          <div className="scrollHeading">Friends who enrolled(3)</div>
          <div className="slider">
            {cardsDetail.map((item, i) => (
              <Card item={item} key={i} />
            ))}
            <div className="effect"></div>
          </div>
        </div>
        <div className="terms">Terms & Conditions</div>
      </div>
    </>
  );
};

export default Screen1;
