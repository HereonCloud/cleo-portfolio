import { MailPlus } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '../../common/Button';
import Tile from '../../common/Tile';

const HeroSection = () => {
  const positions = [
    'Software Developer',
    'Fullstack developer',
    'Learning enthusiast',
  ];

  const [index, setIndex] = useState(0);

  const animationRef = useRef<HTMLSpanElement>(null);

  return (
    <Tile transparent>
      <div className='flex flex-col-reverse justify-center items-center w-[100%] gap-4 md:flex-row md:gap-10'>
        <div>
          <h1 className='mb-3'>I&apos;m Cleo Rubino</h1>
          <p className='mb-1'>
            <span
              ref={animationRef}
              onAnimationEnd={() => {
                if (animationRef && animationRef.current) {
                  setIndex((prevIndex) => (prevIndex + 1) % positions.length);
                  animationRef.current.classList.remove('animate-slideUp');
                  void animationRef.current.offsetWidth;
                  animationRef.current.classList.add('animate-slideUp');
                }
              }}
              className='inline-block w-[156px] animate-slideUp align-bottom overflow-hidden  text-ellipsis font-bold'
            >
              {positions[index]}
            </span>{' '}
            from the Philippines.
          </p>
          <p>Currently creating things at ZAP.</p>
          <Button variant='tertiary' className='mt-6'>
            <MailPlus />
            Send me an email
          </Button>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='p-4 bg-primary border-2 rounded-full border-secondary'>
            <img
              className='min-w-[200px] max-w-[200px] rounded-full bg-gray pb-4 px-2'
              src='https://notion-avatar.app/api/svg/eyJmYWNlIjo0LCJub3NlIjoxLCJtb3V0aCI6MiwiZXllcyI6MSwiZXllYnJvd3MiOjQsImdsYXNzZXMiOjAsImhhaXIiOjUxLCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoiI2JmYmZiZiIsInNoYXBlIjoibm9uZSJ9'
              alt='notion avatar'
            />
          </div>
        </div>
      </div>
    </Tile>
  );
};

export default HeroSection;
