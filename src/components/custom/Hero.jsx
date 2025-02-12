
import { Button } from '../button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#b57602]'>Skip the Planning, Savor the Journey:</span>  
        <br></br>
        <span>Let AI Handle the Rest!</span>
      </h1>
      <p className='text-xl text-gray-500 text-center'>Effortlessly plan your next adventure with AI-generated itineraries tailored to your preferences, budget, and travel style.</p>
      <Link to={'/create-trip'}>
        <Button>Get Started, It&apos;s Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
