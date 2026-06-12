import Agents from '../components/Agents';
import Comparison from '../components/Comparison';
import Enterprise from '../components/Enterprise';
import Extras from '../components/Extras';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Hero from '../components/Hero';
import Layers from '../components/Layers';
import Motions from '../components/Motions';
import Portability from '../components/Portability';
import Pricing from '../components/Pricing';
import Problem from '../components/Problem';
import Proof from '../components/Proof';
import RevealObserver from '../components/RevealObserver';
import ReverseEngineering from '../components/ReverseEngineering';
import WorksWith from '../components/WorksWith';

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Hero />
      <WorksWith />
      <Problem />
      <Layers />
      <Motions />
      <Agents />
      <ReverseEngineering />
      <Portability />
      <Enterprise />
      <Extras />
      <Proof />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
