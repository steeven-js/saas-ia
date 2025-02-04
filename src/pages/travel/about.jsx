import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TravelAboutView } from 'src/sections/_travel/view/travel-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelAboutView />
    </>
  );
}
