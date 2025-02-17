import TypeWriter from '@/components/TypeWriter';
import BackgroundCircles from '@/components/BackgroundCircles';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MrTrotid - Portfolio',
  description: 'Welcome to MrTrotid\'s portfolio website',
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundCircles />
      <div className="text-center text-white relative z-10">
        <h1 className="text-6xl font-bold mb-8">
          <TypeWriter />
        </h1>
        <div className="flex gap-4 justify-center">
          <Link href="/aboutme">
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-opacity-90 transition-all">
              About Me
            </button>
          </Link>
          <Link href="/mywork">
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all">
              My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
