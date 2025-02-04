import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { paths } from 'src/routes/paths';

import { Form } from 'src/components/hook-form';

import { FormHead } from './components/form-head';
import { SignUpSchema } from './components/schema';
import { SignUpForm } from './components/sign-up-form';
import { FormDivider } from './components/form-divider';
import { FormSocials } from './components/form-socials';
import { SignUpTerms } from './components/sign-up-terms';

// ----------------------------------------------------------------------

export function SignUpIllustrationView() {
  const defaultValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <FormHead
        variant="sign-up"
        title="Get started"
        href={paths.illustration.signIn}
        sx={{
          mb: 4,
          textAlign: { xs: 'center', md: 'left' },
        }}
      />

      <Form methods={methods} onSubmit={onSubmit}>
        <SignUpForm />
      </Form>

      <SignUpTerms />

      <FormDivider label="or continue with" />

      <FormSocials />
    </>
  );
}
