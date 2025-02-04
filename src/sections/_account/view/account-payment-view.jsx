import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';

import { PaymentNewCardForm } from 'src/sections/payment/payment-new-card-form';

import { AccountPaymentCard } from '../account-payment-card';

// ----------------------------------------------------------------------

const CARD_OPTIONS = [
  {
    id: _mock.id(1),
    value: 'paypal',
    label: 'Paypal',
    number: '2904 1902 1802 1234',
    holder: _mock.fullName(1),
    expired: '08/24',
    isPrimary: false,
  },
  {
    id: _mock.id(2),
    value: 'mastercard',
    label: 'Mastercard',
    number: '2904 1902 1802 5678',
    holder: _mock.fullName(2),
    expired: '08/24',
    isPrimary: true,
  },
  {
    id: _mock.id(3),
    value: 'visa',
    label: 'Visa',
    number: '2904 1902 1802 7890',
    holder: _mock.fullName(3),
    expired: '08/24',
    isPrimary: false,
  },
];

// ----------------------------------------------------------------------

export function AccountPaymentView() {
  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h5">Payment method</Typography>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          {CARD_OPTIONS.map((card) => (
            <AccountPaymentCard key={card.id} card={card} />
          ))}
        </Box>
      </Stack>

      <Divider sx={{ my: 5, borderStyle: 'dashed' }} />

      <Stack spacing={3}>
        <Typography variant="h5">Add new card </Typography>
        <PaymentNewCardForm />
        <Button color="inherit" variant="contained" sx={{ alignSelf: 'flex-end' }}>
          Save changes
        </Button>
      </Stack>
    </>
  );
}
