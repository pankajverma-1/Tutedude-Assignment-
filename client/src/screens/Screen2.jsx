import React from 'react';
import Navbar from '../Components/Navbar';
import './Screen2.css';

const Screen2 = () => {
  const data = [
    {
      image: require('../image/pepole.png'),
      heading: 'Invite your Friends',
      par: 'Share the link tutedude.com  with your friends ',
    },
    {
      image: require('../image/badge.png'),
      heading: 'Friend purchases any course',
      par: 'Using your REFERRAL CODE in the payments page',
    },
    {
      image: require('../image/rupee.png'),
      heading: 'You get ₹ 200 as referral money',
      par: 'On total purchase the friend makes, into your wallet',
    },
    {
      image: require('../image/per.png'),
      heading: 'Your Friend gets ₹ 200 Off ',
      par: 'On his overall fee on successful purchase using your referral code ',
    },
    {
      image: require('../image/wallet.png'),
      heading: 'Transfer money from wallet',
      par: 'When the wallet balance reaches ₹200 or more, you can withdraw it',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-primary link-path">UI/UX &gt; Refer & Earn</div>
        <div className="walletAndRefContainer">
          <div className="RefContainer">
            <div className="RefEarning">
              <div className="text-primary" style={{ color: '#800080' }}>
                Referral Earning
              </div>
              <div className="refNum">&#8377;2500</div>
            </div>
            <div className="totalRef">
              <div className="text-primary" style={{ color: '#800080' }}>
                Total Referrals
              </div>
              <div className="refNum">7</div>
            </div>
            <div className="RefAmount">
              <div className="text-primary" style={{ color: '#800080' }}>
                Wallet Balance
              </div>
              <div className="refNum">&#8377;500</div>
            </div>
            <div className="">
              <div className="refButton">Withdraw Balance</div>
            </div>
          </div>

          <div className="RefCodeContainer">
            <span
              className="text-primary"
              style={{
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '36px',
                color: '#800080',
              }}
            >
              Your Referral Code
            </span>
            <div className="referralCodeBox" style={{ minWidth: '358px' }}>
              <span
                style={{
                  letterSpacing: '1.5rem',
                  fontWeight: 500,
                }}
              >
                EDCH54
              </span>
            </div>
          </div>
        </div>
        <div className="workHeading">How does it work ?</div>
        <div className="workContainer">
          {data.map((item, i) => (
            <div className="workItem" key={i}>
              <img src={item.image} alt="image1" />
              <div className="workText">
                <div className="textBold">{item.heading}</div>
                <div className="paragraph">{item.par}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="terms">Friends Who Enrolled</div>
        <div className="terms">Terms & Conditions</div>
      </div>
    </>
  );
};

export default Screen2;
