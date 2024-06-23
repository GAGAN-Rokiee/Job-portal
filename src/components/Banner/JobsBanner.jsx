import React from 'react';

const JobsBanner = ({ position, company }) => {
  return (
    <div className="job-box">
      <h2>{position}</h2>
      <p>Company: {company}</p>
      <p>Gagan</p>

    </div>
  );
};

export default JobsBanner;