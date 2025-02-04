import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CareerPostsView } from 'src/sections/_career/view/career-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CareerPostsView />
    </>
  );
}
