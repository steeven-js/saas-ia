import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AccountPaymentView } from 'src/sections/_account/view/account-payment-view';

// ----------------------------------------------------------------------

const metadata = { title: `Payment | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountPaymentView />
    </>
  );
}
