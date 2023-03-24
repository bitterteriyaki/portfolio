import { useEffect, useState } from 'react';

function ScrollIndicator() {
  const [offset, setOffset] = useState<number>(0);
  const style = { width: `${offset}%` };

  function handleScroll() {
    const height = document.body.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / height) * 100;

    setOffset(percentage);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return <div className="fixed h-0.5 bg-white" style={style}></div>;
}

export default ScrollIndicator;
