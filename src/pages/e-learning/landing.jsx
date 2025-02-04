import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ElearningLandingView } from 'src/sections/_elearning/view/elearning-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
