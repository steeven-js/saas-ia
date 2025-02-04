import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';
import { AccountTemplate } from 'src/layouts/template/account';
import { EcommerceTemplate } from 'src/layouts/template/ecommerce';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const OrdersPage = lazy(() => import('src/pages/account/orders'));
const PaymentPage = lazy(() => import('src/pages/account/payment'));
const PersonalPage = lazy(() => import('src/pages/account/personal'));
const VouchersPage = lazy(() => import('src/pages/account/vouchers'));
const WishlistPage = lazy(() => import('src/pages/account/wishlist'));

// ----------------------------------------------------------------------

export const accountRoutes = [
  {
    path: 'account',
    element: (
      <MainLayout>
        <EcommerceTemplate>
          <AccountTemplate>
            <Suspense fallback={<LoadingScreen sx={{ height: 480 }} />}>
              <Outlet />
            </Suspense>
          </AccountTemplate>
        </EcommerceTemplate>
      </MainLayout>
    ),
    children: [
      { path: 'personal', element: <PersonalPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'vouchers', element: <VouchersPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
];
