import Tile from '../../common/Tile';
import { CircleUser, FolderOpenDot, House, PhoneCall } from 'lucide-react';

const NavBar = () => {
  const buttonStyle =
    'text-tertiary rounded-full p-2 hover:text-tertiary hover:bg-gray';

  return (
    <Tile>
      <div className='inline-flex justify-between items-center w-[100%]'>
        <nav className='inline-flex gap-3'>
          <button className={buttonStyle}>
            <House />
          </button>
          <button className={buttonStyle}>
            <CircleUser />
          </button>
          <button className={buttonStyle}>
            <FolderOpenDot />
          </button>
          <button className={buttonStyle}>
            <PhoneCall />
          </button>
        </nav>
        <div className='inline-flex px-4 py-2 items-center justify-center gap-2 sm:bg-green-light rounded-full'>
          <div className='bg-green w-[10px] h-[10px] rounded-full' />
          <span className='hidden sm:flex text-green font-medium'>
            Available to work
          </span>
        </div>
      </div>
    </Tile>
  );
};

export default NavBar;
