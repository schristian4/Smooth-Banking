
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}


const ViewLayout = ({ children }: any) => {

  const {  width, height} = useWindowDimensions();

  if(width > 400){
    return <div style={{ width: 400, height: '100%', position: "relative" }}>{children}</div>;
  }
  
  else{
    return <div style={{ width: width, height: '100%', position: "relative" }}>{children}</div>;
  }
  

};
export default ViewLayout;
