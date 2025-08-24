import HeroSection from './components/features/Hero/HeroSection.tsx';
import NavBar from './components/features/NavBar/NavBar.tsx';

function App() {
  return (
    <main className='w-[100%] flex justify-center items-center px-8 flex-col'>
      <NavBar />
      <HeroSection />
    </main>
  );
}

export default App;
