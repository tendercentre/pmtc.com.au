import * as React from 'react';

function FacebookIcon(props) {
  return (
    <svg
      aria-label="Facebook"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <rect width={512} height={512} rx="15%" />
      <path
        fill="#fff"
        d="M330 512V322h64l9-74h-73v-47c0-22 6-36 37-36h39V99c-7-1-30-3-57-3-57 0-95 34-95 98v54h-64v74h64v190z"
      />
    </svg>
  );
}

export { FacebookIcon };
