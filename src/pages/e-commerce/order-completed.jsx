import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { EcommerceOrderCompletedView } from 'src/sections/_ecommerce/view/ecommerce-order-completed-view';

// ----------------------------------------------------------------------

const metadata = { title: `Order completed | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceOrderCompletedView />
    </>
  );
}
