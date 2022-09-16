// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// next
import { useRouter } from 'next/router';
// react
import { useEffect } from 'react';

// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

// HomePage.getLayout = function getLayout(page: React.ReactElement) {
//   return <Layout variant="main">{page}</Layout>;
// };

// ----------------------------------------------------------------------

export default function HomePage() {
  const { pathname, push } = useRouter();
  useEffect(() => {
    push(pathname + 'dashboard/event');
  }, []);
  return (
    <></>
    // <Page title="The starting point for your next project">
    //   <HomeHero />

    //   <ContentStyle>
    //     <HomeMinimal />

    //     <HomeHugePackElements />

    //     <HomeDarkMode />

    //     <HomeColorPresets />

    //     <HomeCleanInterfaces />

    //     <HomePricingPlans />

    //     <HomeLookingFor />

    //     <HomeAdvertisement />
    //   </ContentStyle>
    // </Page>
  );
}
