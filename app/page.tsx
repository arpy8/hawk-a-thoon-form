import { CardWithForm } from './card';
import Particles from '@/components/particles';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      <div className="mb-5">
        <img
          src={`/untitled.png`}
          alt="test"
          className="rounded-md border-2 border-[#fff]-500/20 max-w-full sm:w-80"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
        <CardWithForm title="VIT Students" link="https://forms.gle/SbnGYzpEFyGXrVVC7" />
        <CardWithForm title="External Participants" link="https://forms.gle/jvTTsyrwFgxRahHm9" />
      </div>
    </div>
  );
}