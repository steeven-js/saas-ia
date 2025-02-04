import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { EcommerceLandingView } from 'src/sections/_ecommerce/view/ecommerce-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceLandingView />
    </>
  );
}
