import React from 'react';

const AddIcon = ({size}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="58" stroke="black" strokeWidth="0" />
      <rect x="50" y="20" width="20" height="80" rx="6" fill="black" />
      <path
        d="M26 70C22.6863 70 20 67.3137 20 64L20 56C20 52.6863 22.6863 50 26 50L94 50C97.3137 50 100 52.6863 100 56V64C100 67.3137 97.3137 70 94 70L26 70Z"
        fill="black"
      />
    </svg>
  );
};

export default AddIcon;
