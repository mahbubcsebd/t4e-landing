import Footer from '../components/Footer';
import Header from '../components/Header';
import BackgroundSwitcher from '../components/BackgroundSwitcher';

export const metadata = {
  title: 'Think 4 Ever',
  description: 'Next Gen Learning Platform',
};

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen w-full relative antialiased">
      <BackgroundSwitcher />
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
