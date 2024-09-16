import Layout from "../Layout";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <Layout>
      <Hero />
      <Video />
      <Testimonials />
      <Pricing />
      <FAQ />
    </Layout>
  );
}

export default Home;
