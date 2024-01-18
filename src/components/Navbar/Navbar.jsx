import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
      <div className='container'>
        <div className='flex'>
          <div className='flex text-white'>
            <img src={logo} alt='logo' className='w-10'/>
            <span>Astro</span>
          </div>
          <div className='text-white'>
            <ul className='flex items-center gap-6 text-xl py-4'>
              <li>
                <a href='#home'>About</a>
              </li>
              <li>
                <a href='#about'>Technology</a>
              </li>
              <li>
                <a href='#services'>Galaxy</a>
              </li>
              <li>
                <a href='#contact'>Satellite</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
