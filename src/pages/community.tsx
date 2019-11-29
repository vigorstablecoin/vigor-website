import React, { useEffect } from 'react'
import RedirectMessage from '../components/Redirect';

const url = `https://vigor.ai`
const Community: React.FC<{}> = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.location.assign(url);
    }
  }, [])

  return (
      <RedirectMessage />
  );
}

export default Community;