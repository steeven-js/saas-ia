import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AccountWishlistView } from 'src/sections/_account/view/account-wishlist-view';

// ----------------------------------------------------------------------

const metadata = { title: `Wishlist | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountWishlistView />
    </>
  );
}
