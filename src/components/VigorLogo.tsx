import React from 'react';

type Props = {
  height: number,
  inverted?: boolean,
  primary?: boolean,
  horizontal?: boolean,
  textOnly?:boolean,
  badgeOnly?:boolean
};

const vigorLogoPrimaryHorizontalInverted = (height: number) =>
  <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 165 75.2">
    <path
      fill="#fff"
      d="M24 .5L9.5 22.8c-.5.9-.7 2-.4 3l15.5 45.8c0 .3.5.3.6 0l15.2-45.9c.3-1 .2-2-.3-2.9L25.8.5a1 1 0 00-1.8 0z"
    />
    <path
      fill="#4468cc"
      d="M41.8 28.1l-15.7 47 23.4-36.6c.2-.3.2-.6 0-.9L43.2 28a.8.8 0 00-1.4.2zM7.8 27.9l15.7 47L.1 38.3a.8.8 0 010-.8l6.3-9.7a.8.8 0 011.4.2z"
    />
    <g fill="#fff">
      <path d="M64.5 27.9h5.2l5.6 15 5.6-15h5l-8.6 21.5H73L64.5 28zM89.4 27.9h4.7v21.4h-4.7V27.9zM97.5 38.6c0-6.1 4.8-11 11.3-11 3.8 0 6.1 1 8.4 2.8l-3 3.6a7.9 7.9 0 00-5.6-2.1c-3.4 0-6.1 3-6.1 6.6 0 4 2.6 6.9 6.4 6.9 1.7 0 3.3-.4 4.5-1.3v-3h-4.8V37h9.3v9.3a13.9 13.9 0 01-9.1 3.4c-6.7 0-11.3-4.7-11.3-11zM120.5 38.6c0-6.1 4.8-11 11.4-11a11 11 0 0111.4 11c0 6-4.8 11-11.4 11a11 11 0 01-11.4-11zm17.8 0c0-3.7-2.6-6.8-6.4-6.8-3.8 0-6.5 3-6.5 6.7s2.7 6.8 6.5 6.8 6.4-3 6.4-6.7zM146.5 27.9h9.8c2.7 0 4.8.7 6.2 2.2a6.7 6.7 0 011.8 4.8v.1c0 3.5-1.8 5.6-4.6 6.6l5.3 7.7h-5.5l-4.6-6.9h-3.7v6.9h-4.7V27.9zm9.4 10.4c2.3 0 3.7-1.2 3.7-3v-.1c0-2-1.4-3-3.7-3h-4.7v6h4.8z" />
    </g>
  </svg>
;

const vigorLogoTextInverted = (height: number) =>
  <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="64 0 165 75.2">
    <g fill="#fff">
      <path d="M64.5 27.9h5.2l5.6 15 5.6-15h5l-8.6 21.5H73L64.5 28zM89.4 27.9h4.7v21.4h-4.7V27.9zM97.5 38.6c0-6.1 4.8-11 11.3-11 3.8 0 6.1 1 8.4 2.8l-3 3.6a7.9 7.9 0 00-5.6-2.1c-3.4 0-6.1 3-6.1 6.6 0 4 2.6 6.9 6.4 6.9 1.7 0 3.3-.4 4.5-1.3v-3h-4.8V37h9.3v9.3a13.9 13.9 0 01-9.1 3.4c-6.7 0-11.3-4.7-11.3-11zM120.5 38.6c0-6.1 4.8-11 11.4-11a11 11 0 0111.4 11c0 6-4.8 11-11.4 11a11 11 0 01-11.4-11zm17.8 0c0-3.7-2.6-6.8-6.4-6.8-3.8 0-6.5 3-6.5 6.7s2.7 6.8 6.5 6.8 6.4-3 6.4-6.7zM146.5 27.9h9.8c2.7 0 4.8.7 6.2 2.2a6.7 6.7 0 011.8 4.8v.1c0 3.5-1.8 5.6-4.6 6.6l5.3 7.7h-5.5l-4.6-6.9h-3.7v6.9h-4.7V27.9zm9.4 10.4c2.3 0 3.7-1.2 3.7-3v-.1c0-2-1.4-3-3.7-3h-4.7v6h4.8z" />
    </g>
  </svg>
;

const vigorLogoBadgeInverted = (height: number) =>
  <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 165 75.2">
    <path
      fill="#fff"
      d="M24 .5L9.5 22.8c-.5.9-.7 2-.4 3l15.5 45.8c0 .3.5.3.6 0l15.2-45.9c.3-1 .2-2-.3-2.9L25.8.5a1 1 0 00-1.8 0z"
    />
    <path
      fill="#4468cc"
      d="M41.8 28.1l-15.7 47 23.4-36.6c.2-.3.2-.6 0-.9L43.2 28a.8.8 0 00-1.4.2zM7.8 27.9l15.7 47L.1 38.3a.8.8 0 010-.8l6.3-9.7a.8.8 0 011.4.2z"
    />
  </svg>
;

const VigorLogo: React.FC<Props> = (props: Props) => {
  if (props.textOnly) {
    return vigorLogoTextInverted(props.height);
  }

  if (props.badgeOnly) {
    return vigorLogoBadgeInverted(props.height);
  }

  return vigorLogoPrimaryHorizontalInverted(props.height);

  // if (!props.inverted) {
  //   if (!props.horizontal) {
  //     if (props.primary) {
      // }
    // }
  // }
};

export default VigorLogo;
