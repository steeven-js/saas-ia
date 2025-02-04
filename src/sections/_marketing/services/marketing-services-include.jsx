import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const SERVICES = [
  {
    title: 'Search engine optimization',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: iconPath('ic-chart.svg'),
  },
  {
    title: 'Social media strategy',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: iconPath('ic-social-media.svg'),
  },
  {
    title: 'Real time and data',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: iconPath('ic-real-time.svg'),
  },
  {
    title: 'Online media management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: iconPath('ic-checklist.svg'),
  },
  {
    title: 'Reporting & analysis',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: iconPath('ic-report.svg'),
  },
  {
    title: 'Penalty recovery',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: iconPath('ic-file-sync.svg'),
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesInclude({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2">Services include</Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            maxWidth: 480,
            color: 'text.secondary',
            mb: { xs: 5, md: 10 },
          }}
        >
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>

        <Box
          rowGap={8}
          columnGap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {SERVICES.map((item) => (
            <div key={item.title}>
              <SvgColor
                src={item.icon}
                width={64}
                sx={{
                  background: (theme) =>
                    `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                }}
              />

              <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
                {item.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {item.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
