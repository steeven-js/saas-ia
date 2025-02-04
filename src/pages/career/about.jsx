import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CareerAboutView } from 'src/sections/_career/view/career-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CareerAboutView />
    </>
  );
}
