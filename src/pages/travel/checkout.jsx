import { Helmet } from 'react-helmet-async';

import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { TravelCheckoutView } from 'src/sections/_travel/view/travel-checkout-view';

// ----------------------------------------------------------------------

const metadata = { title: `Checkout | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelCheckoutView tour={_tours[0]} />
    </>
  );
}
