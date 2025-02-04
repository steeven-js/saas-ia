import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AccountVouchersView } from 'src/sections/_account/view/account-vouchers-view';

// ----------------------------------------------------------------------

const metadata = { title: `Vouchers | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountVouchersView />
    </>
  );
}
