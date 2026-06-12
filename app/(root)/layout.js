import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Think 4 Ever',
  description: 'Next Gen Learning Platform',
};

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen w-full relative antialiased">
      {/* Animated Gradient Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg"
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
