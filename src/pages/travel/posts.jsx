import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { TravelPostsView } from 'src/sections/_travel/view/travel-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <TravelPostsView />
    </>
  );
}
