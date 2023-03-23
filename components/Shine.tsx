function Shine(props: { x: number; y: number }) {
  const style = { transform: `translate(${props.x}px, ${props.y}px)` };
  const classes = [
    'w-96',
    'h-96',
    'bg-green-400',
    'absolute',
    'top-0',
    'left-0',
    'rounded-full',
    'blur-[96px]',
    'mix-blend-soft-light',
    'opacity-0',
    'group-hover:opacity-60',
    'transition-opacity',
  ];

  return <div className={classes.join(' ')} style={style}></div>;
}

export default Shine;
