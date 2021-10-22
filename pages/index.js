import Layout from "./../layout/Layout";
import Hero from "./../components/Hero/Hero";
import Projects from "./../components/Projects/Projects";
import Technologies from "./../components/Technologies/Technologies";
import TimeLine from "./../components/TimeLine/TimeLine";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <TimeLine />
    </Layout>
  );
}
