import { Helmet } from 'react-helmet-async';

import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceCartView } from 'src/sections/_ecommerce/view/ecommerce-cart-view';

// ----------------------------------------------------------------------

const metadata = { title: `Cart | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceCartView products={_products.slice(0, 4)} />
    </>
  );
}
