import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ElearningAboutView } from 'src/sections/_elearning/view/elearning-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningAboutView />
    </>
  );
}
