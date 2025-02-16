'use client';
import CursorTracker from '@/components/CursorTracker';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorTracker />
      {children}
    </>
  );
}
