import { useEffect, useState } from 'react';
import Tile from '../../common/Tile';
import Button from '../../common/Button';
import { MailPlus } from 'lucide-react';

const HeroSection = () => {
  const positions = [
    'Software Developer',
    'Fullstack developer',
    'Learning enthusiast',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % positions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tile transparent>
      <section className='flex justify-center items-center  w-[100%] gap-10'>
        <div>
          <h1 className='mb-3'>I&apos;m Cleo Rubino</h1>
          <p className='mb-1'>
            <span className='inline-block w-[156px] animate-slideUp delay-2000 align-bottom overflow-hidden  text-ellipsis font-bold'>
              {positions[index]}
            </span>{' '}
            from the Philippines.
          </p>
          <p>Currently creating things at ZAP.</p>
          <Button variant='tertiary' className='mt-8'>
            <MailPlus />
            Send me an email
          </Button>
        </div>
        <img
          className='min-w-[00px] max-w-[200px]'
          src='https://notion-avatar.app/api/svg/eyJmYWNlIjo0LCJub3NlIjoxLCJtb3V0aCI6MiwiZXllcyI6MSwiZXllYnJvd3MiOjQsImdsYXNzZXMiOjAsImhhaXIiOjUxLCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoiI2JmYmZiZiIsInNoYXBlIjoibm9uZSJ9'
          alt='notion avatar'
        />
      </section>
    </Tile>
  );
};

export default HeroSection;
