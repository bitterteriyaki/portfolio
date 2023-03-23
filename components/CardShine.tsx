type CardShineProps = {
  x: number;
  y: number;
};

export default function CardShine(props: CardShineProps) {
  const classes = [
    'w-72',
    'h-72',
    'bg-green-400',
    'rounded-full',
    'blur-[96px]',
    'mix-blend-soft-light',
    'opacity-0',
    'group-hover:opacity-90',
    'absolute',
    'top-0',
    'left-0',
    'transition-opacity',
  ];

  return (
    <div
      className={classes.join(' ')}
      style={{ transform: `translate(${props.x}px, ${props.y}px)` }}
    ></div>
  );
}
