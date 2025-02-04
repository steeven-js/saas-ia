import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CareerContactView } from 'src/sections/_career/view/career-contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CareerContactView />
    </>
  );
}
