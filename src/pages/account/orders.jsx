import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AccountOrdersView } from 'src/sections/_account/view/account-orders-view';

// ----------------------------------------------------------------------

const metadata = { title: `Orders | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountOrdersView />
    </>
  );
}
