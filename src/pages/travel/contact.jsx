import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TravelContactView } from 'src/sections/_travel/view/travel-contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelContactView />
    </>
  );
}
