import { Helmet } from 'react-helmet-async';

import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { TravelOrderCompletedView } from 'src/sections/_travel/view/travel-order-completed-view';

// ----------------------------------------------------------------------

const metadata = { title: `Order completed | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelOrderCompletedView tour={_tours[8]} />
    </>
  );
}
