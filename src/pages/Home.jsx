import Layout from "../Layout";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

function Home() {
  return (
    <Layout>
      <Hero />
      <Video />
      <Testimonials />
      <Pricing />
    </Layout>
  );
}

export default Home;
