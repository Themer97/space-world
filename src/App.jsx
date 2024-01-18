import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import bgVideo from './assets/earth-bg.mp4';

const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>
        <video
          autoPlay
          loop
          muted
          className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'
        >
          <source src={bgVideo} type='video/mp4' />
        </video>
        <Navbar />
      </div>
      <Services />
    </div>
  );
};

export default App;
