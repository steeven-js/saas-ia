import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/duotone/${name}`;

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'SEO',
    icon: iconPath('ic-seo.svg'),
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Email marketing',
    icon: iconPath('ic-marketing-mail.svg'),
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Search engine oprimization',
    icon: iconPath('ic-search-oprimization.svg'),
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Social marketing',
    icon: iconPath('ic-marketing-bullhorn.svg'),
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
];

// ----------------------------------------------------------------------

export function MarketingLandingServices({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Our services
          </Typography>

          <Typography variant="h2">We provide</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ alignItems: 'center' }}
        >
          {SERVICES.map((item, index) => (
            <ServiceItem key={item.name} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function ServiceItem({ item, index }) {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        px: 4,
        py: 5,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
        [theme.breakpoints.up('md')]: {
          boxShadow: 'none',
          ...(index === 1 && { py: 8 }),
          ...(index === 2 && { py: 10 }),
          ...([2, 3].includes(index) && {
            boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            [stylesMode.dark]: {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
            },
          }),
        },
      })}
    >
      <SvgColor
        src={item.icon}
        width={88}
        sx={{
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.vars.palette[COLORS[index]].light}, ${theme.vars.palette[COLORS[index]].main})`,
        }}
      />

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content}
        </Typography>
      </Box>

      <IconButton
        component={RouterLink}
        href={item.path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton>
    </Paper>
  );
}
