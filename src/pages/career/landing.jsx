import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CareerLandingView } from 'src/sections/_career/view/career-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CareerLandingView />
    </>
  );
}
