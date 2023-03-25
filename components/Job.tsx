function Job(props: { children: React.ReactNode }) {
  const classes = [
    'p-3',
    'border',
    'border-solid',
    'border-zinc-700',
    'rounded-lg',
    'bg-zinc-900',
    'hover:bg-zinc-800',
    'duration-150',
    'hover:drop-shadow-xl',
    'hover:translate-x-2',
    'ease-out',
    'w-11/12',
  ];

  return <div className={classes.join(' ')}>{props.children}</div>;
}

export default Job;
