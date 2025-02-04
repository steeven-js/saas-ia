import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { IconsView } from 'src/sections/_examples/icons-view';

// ----------------------------------------------------------------------

const metadata = { title: `Icons | Components - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <IconsView />
    </>
  );
}
