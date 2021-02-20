import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // meta = touched property (user 'clicked')
  return (
    <div>
      <label>{label}</label>
      <input atyle={{ marginBottom: "5px" }} { ...input } />
      <div className="red-text" style={{ marginBottom: "20px" }}>
      { touched && error }
      </div>
    </div>
  )
}

export default SurveyField;
