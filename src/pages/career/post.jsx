import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CareerPostView } from 'src/sections/_career/view/career-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CareerPostView />
    </>
  );
}
