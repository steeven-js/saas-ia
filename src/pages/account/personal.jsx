import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AccountPersonalView } from 'src/sections/_account/view/account-personal-view';

// ----------------------------------------------------------------------

const metadata = { title: `Personal | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountPersonalView />
    </>
  );
}
