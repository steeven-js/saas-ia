import { Helmet } from 'react-helmet-async';

import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { TravelTourView } from 'src/sections/_travel/view/travel-tour-view';

// ----------------------------------------------------------------------

const metadata = { title: `Tour details | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelTourView tour={_tours[0]} relatedTours={_tours.slice(-4)} />
    </>
  );
}
