import { Helmet } from 'react-helmet-async';

import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { TravelToursView } from 'src/sections/_travel/view/travel-tours-view';

// ----------------------------------------------------------------------

const metadata = { title: `Tour list | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelToursView tours={_tours} />
    </>
  );
}
