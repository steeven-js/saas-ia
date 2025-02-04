import { Helmet } from 'react-helmet-async';

import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceProductView } from 'src/sections/_ecommerce/view/ecommerce-product-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product details | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceProductView product={_products[0]} />
    </>
  );
}
