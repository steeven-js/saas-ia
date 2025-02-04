import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ElearningContactView } from 'src/sections/_elearning/view/elearning-contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningContactView />
    </>
  );
}
