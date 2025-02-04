import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { EcommerceCompareView } from 'src/sections/_ecommerce/view/ecommerce-compare-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product compare | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceCompareView />
    </>
  );
}
