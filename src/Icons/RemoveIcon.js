import React from 'react';

const RemoveIcon = ({size}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="#f57676" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="58" transform="rotate(-90 60 60)" stroke="black" stroke-width="0"/>
    <rect x="24.6445" y="38.7866" width="20" height="80" rx="6" transform="rotate(-45 24.6445 38.7866)" fill="white"/>
    <path d="M43.0297 91.1128C40.6866 93.456 36.8876 93.456 34.5445 91.1128L28.8876 85.456C26.5445 83.1128 26.5445 79.3138 28.8876 76.9707L76.9709 28.8874C79.314 26.5443 83.113 26.5443 85.4562 28.8874L91.113 34.5443C93.4562 36.8874 93.4562 40.6864 91.113 43.0296L43.0297 91.1128Z" fill="white"/>
    </svg>
    
  );
};

export default RemoveIcon;
