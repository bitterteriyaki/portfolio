import Link from 'next/link';

function Invite() {
  const classes = [
    'grid',
    'grid-flow-col',
    'place-items-center',
    'gap-3',
    'border',
    'border-solid',
    'border-slate-400',
    'px-4',
    'py-3',
    'rounded-full',
    'bg-gradient-to-r',
    'from-stone-900',
    'hover:bg-zinc-900',
    'duration-200',
    'text-white',
    'group',
  ];

  return (
    <Link
      href="https://github.com/bitterteriyaki"
      target="_blank"
      className={classes.join(' ')}
    >
      <div className="rounded-full bg-green-800 p-2 opacity-90">
        <i className="nf nf-dev-git_pull_request text-[22px] text-green-400"></i>
      </div>
      <div>
        <h4 className="font-semibold leading-5">Do you want to see my work?</h4>
        <p className="text-slate-400">Click here to see my GitHub profile.</p>
      </div>
      <div className="duration-150 group-hover:translate-x-2">
        <i className="nf nf-fa-arrow_right"></i>
      </div>
    </Link>
  );
}

export default Invite;
