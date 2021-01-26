import Head from 'next/head';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProjectScreen from '../screens/ProjectScreen';
import SkillScreen from '../screens/SkillScreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parminder Singh - Front End Developer</title>
      </Head>

      <HomeScreen />
      <AboutScreen />
      <SkillScreen />
      <ProjectScreen />
    </>
  );
}
