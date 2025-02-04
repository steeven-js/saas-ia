import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ElearningPostsView } from 'src/sections/_elearning/view/elearning-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningPostsView />
    </>
  );
}
