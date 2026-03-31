import AcademyNav from '@/components/AcademyNav';

export const metadata = {
  title: 'JDLO Academy | Operate Like an Operator',
  description:
    'Not a course. An operating system. Learn to build, sell, and move like someone who has done it, with real projects and real receipts behind every lesson.',
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="academy" className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <AcademyNav />
      {children}
    </div>
  );
}
