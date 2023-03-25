function Tag(props: { children: React.ReactNode; color: string }) {
  const classes = [
    props.color,
    'border',
    'border-solid',
    'px-2',
    'py-1',
    'rounded-full',
    'text-xs',
  ];

  return <span className={classes.join(' ')}>{props.children}</span>;
}

export default Tag;
