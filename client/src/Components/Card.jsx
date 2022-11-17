import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="candidate-detail">
        <div className="name">{item.candidateName}</div>
        <div className="date">{item.candidateDate}</div>
      </div>
      <div className="enrolled">Courses Enrolled({item.enrolled})</div>
      <div className="skill">
        {item.skill.map((value, i) => (
          <span key={i}>{value}</span>
        ))}
      </div>
      <div className="amount">
        <span style={{ fontWeight: 400, fontSize: '24px', lineHeight: '24px' }}>
          Referral Amount
        </span>
        <span style={{ fontWeight: 600, fontSize: '24px', lineHeight: '36px' }}>
          <span style={{ marginLeft: '8px' }}>&#8377;</span> {item.amount}
        </span>
      </div>
    </div>
  );
};

export default Card;
