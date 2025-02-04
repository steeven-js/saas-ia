import { Helmet } from 'react-helmet-async';

import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceCheckoutView } from 'src/sections/_ecommerce/view/ecommerce-checkout-view';

// ----------------------------------------------------------------------

const metadata = { title: `Checkout | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceCheckoutView products={_products.slice(0, 3)} />
    </>
  );
}
