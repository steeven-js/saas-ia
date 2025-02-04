import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TravelPostView } from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelPostView />
    </>
  );
}
