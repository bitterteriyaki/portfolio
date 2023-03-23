import BubbleHover from '../components/BubbleHover';
import Invite from '../components/Invite';

export default function Hero() {
  const classes = [
    'h-screen',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
  ];

  return (
    <div className={classes.join(' ')}>
      <BubbleHover />
      <Invite />
    </div>
  );
}
