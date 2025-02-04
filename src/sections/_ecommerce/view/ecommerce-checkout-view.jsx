import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { Form } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';

import { PaymentNewCardForm } from 'src/sections/payment/payment-new-card-form';

import { EcommerceCheckoutOrderSummary } from '../checkout/ecommerce-checkout-order-summary';
import { EcommerceCheckoutPaymentMethod } from '../checkout/ecommerce-checkout-payment-method';
import { EcommerceCheckoutShippingMethod } from '../checkout/ecommerce-checkout-shipping-method';
import { EcommerceCheckoutShippingDetails } from '../checkout/ecommerce-checkout-shipping-details';
import { EcommerceCheckoutPersonalDetails } from '../checkout/ecommerce-checkout-personal-details';

// ----------------------------------------------------------------------

const SHIPPING_OPTIONS = [
  {
    label: 'Free',
    value: 'free',
    description: '5-7 days delivery',
    price: 0,
  },
  {
    label: 'Standard',
    value: 'standard',
    description: '3-5 days delivery',
    price: 10,
  },
  {
    label: 'Express',
    value: 'express',
    description: '2-3 days delivery',
    price: 20,
  },
];

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
    description: '**** **** **** 1234',
  },
  {
    label: 'Mastercard',
    value: 'mastercard',
    description: '**** **** **** 3456',
  },
  {
    label: 'Visa',
    value: 'visa',
    description: '**** **** **** 6789',
  },
];

// ----------------------------------------------------------------------

const PersonalDetailsSchema = zod.object({
  firstName: zod.string().min(1, { message: 'First name is required!' }),
  lastName: zod.string().min(1, { message: 'Last name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  phoneNumber: zod.string().min(1, { message: 'Phone number is required!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
  confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
});

const ShippingDetailsSchema = zod.object({
  streetAddress: zod.string().min(1, { message: 'Street address is required!' }),
  city: zod.string().min(1, { message: 'City is required!' }),
  country: zod.string().min(1, { message: 'Country is required!' }),
  zipCode: zod.string(),
});

const PaymentMethodsSchema = zod.object({
  methods: zod.string(),
  card: zod.object({
    number: zod.string(),
    holder: zod.string(),
    expired: zod.string(),
    ccv: zod.string(),
  }),
});

// ----------------------------------------------------------------------

export const EcommerceCheckoutSchema = zod.object({
  personalDetails: PersonalDetailsSchema,
  shippingDetails: ShippingDetailsSchema,
  shippingMethod: zod.string(),
  paymentMethods: PaymentMethodsSchema,
});

// ----------------------------------------------------------------------

export function EcommerceCheckoutView({ products }) {
  const router = useRouter();

  const openForm = useBoolean();

  const defaultValues = {
    personal: {
      firstName: 'Jayvion',
      lastName: 'Simon',
      emailAddress: 'nannie.abernathy70@yahoo.com',
      phoneNumber: '365-374-4961',
      password: '',
      confirmPassword: '',
    },
    shippingDetails: {
      streetAddress: '',
      city: '',
      country: 'United States',
      zipCode: '',
    },
    shippingMethod: 'free',
    paymentMethods: {
      methods: 'paypal',
      card: { number: '', holder: '', expired: '', ccv: '' },
    },
  };

  const methods = useForm({
    resolver: zodResolver(EcommerceCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      router.push(paths.eCommerce.orderCompleted);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container sx={{ pb: 10 }}>
      <Typography variant="h3" sx={{ my: { xs: 3, md: 5 } }}>
        Checkout
      </Typography>

      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container disableEqualOverflow spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={8}>
            <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
              <div>
                <StepLabel title="Personal details" step="1" />
                <EcommerceCheckoutPersonalDetails />
              </div>

              <div>
                <StepLabel title="Shipping details" step="2" />
                <EcommerceCheckoutShippingDetails />
              </div>

              <div>
                <StepLabel title="Shipping method" step="3" />
                <EcommerceCheckoutShippingMethod name="shippingMethod" options={SHIPPING_OPTIONS} />
              </div>

              <div>
                <StepLabel title="Payment method" step="4" />

                <EcommerceCheckoutPaymentMethod
                  name="paymentMethods.methods"
                  options={PAYMENT_OPTIONS}
                />

                <Divider sx={{ my: 3 }} />

                <Stack alignItems="flex-end">
                  <Button
                    color={openForm.value ? 'error' : 'inherit'}
                    startIcon={
                      openForm.value ? null : <Iconify width={24} icon="eva:plus-outline" />
                    }
                    onClick={openForm.onToggle}
                  >
                    {openForm.value ? 'Cancel' : 'Add new card'}
                  </Button>
                </Stack>

                <Collapse in={openForm.value} unmountOnExit>
                  <Box
                    gap={2.5}
                    display="flex"
                    alignItems="flex-end"
                    flexDirection="column"
                    sx={{ pt: 3 }}
                  >
                    <PaymentNewCardForm
                      isRHF
                      numberField={{ name: 'paymentMethods.card.number' }}
                      holderField={{ name: 'paymentMethods.card.holder' }}
                      dateField={{ name: 'paymentMethods.card.expired' }}
                      cvvField={{ name: 'paymentMethods.card.ccv' }}
                    />
                    <Button variant="contained">Apply</Button>
                  </Box>
                </Collapse>
              </div>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <EcommerceCheckoutOrderSummary
              tax={7}
              total={357.09}
              subtotal={89.09}
              shipping={55.47}
              discount={16.17}
              products={products}
              loading={isSubmitting}
            />
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}

function StepLabel({ step, title }) {
  return (
    <Box gap={1.5} display="flex" alignItems="center" sx={{ mb: 3, typography: 'h6' }}>
      <Box
        sx={{
          width: 28,
          height: 28,
          flexShrink: 0,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          typography: 'subtitle1',
          bgcolor: 'primary.main',
          justifyContent: 'center',
          color: 'primary.contrastText',
        }}
      >
        {step}
      </Box>
      {title}
    </Box>
  );
}
