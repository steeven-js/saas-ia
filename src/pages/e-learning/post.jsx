import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ElearningPostView } from 'src/sections/_elearning/view/elearning-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningPostView />
    </>
  );
}
