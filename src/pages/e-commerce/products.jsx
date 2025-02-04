import { Helmet } from 'react-helmet-async';

import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceProductsView } from 'src/sections/_ecommerce/view/ecommerce-products-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product list | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EcommerceProductsView
        products={_products.slice(0, 16)}
        bestSellers={_products.slice(0, 3)}
      />
    </>
  );
}
