import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TravelLandingView } from 'src/sections/_travel/view/travel-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelLandingView />
    </>
  );
}
