import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr its cold!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({latitude}) => {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon ${iconName} massive`} />
      <h1 className="text-center">{text}</h1>
      <i className={`icon-right icon ${iconName} massive`} />
    </div>
  )
}

export default SeasonDisplay;