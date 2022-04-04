import { useEffect, useState } from 'react';

import styles from '../../styles/app/ScrollIndicator.module.css'

const ScrollIndicator: React.FC = () => {
  const [offset, setOffset] = useState<number>()
  const style = { width: `${offset}%` }

  const handleScroll = () => {
    const maxHeight = document.body.scrollHeight - window.innerHeight
    const percentage = (window.scrollY / maxHeight) * 100
    setOffset(percentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return <div className={styles.indicator} style={style}></div>
}

export default ScrollIndicator
