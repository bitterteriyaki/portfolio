import AboutMe from './AboutMe';

export default function Info() {
  const classes = ['grid', 'place-items-center'];

  return (
    <div className={classes.join(' ')}>
      <AboutMe />
    </div>
  );
}
