import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { Map } from 'src/components/map';
import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';

// ----------------------------------------------------------------------

export function CareerJobDetailsSummary({ sx, content, skills, benefits, locationMap, ...other }) {
  return (
    <Box gap={5} display="flex" flexDirection="column" sx={sx} {...other}>
      <Markdown content={content} />

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 3 }}>
          Job skills
        </Typography>
        <Box gap={1} display="flex" flexWrap="wrap">
          {skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" variant="soft" onClick={() => {}} />
          ))}
        </Box>
      </div>

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 3 }}>
          Other benefits
        </Typography>
        <Box
          rowGap={2}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {benefits.map((benefit) => (
            <Box
              key={benefit}
              gap={1.5}
              display="flex"
              alignItems="center"
              sx={{ typography: 'body2' }}
            >
              <Iconify
                width={24}
                icon={
                  (benefit === 'Free parking' && 'carbon:car') ||
                  (benefit === 'Bonus commission' && 'solar:banknote-2-outline') ||
                  (benefit === 'Travel' && 'carbon:airport-01') ||
                  (benefit === 'Training' && 'solar:presentation-graph-outline') ||
                  (benefit === 'Device support' && 'solar:monitor-smartphone-outline') ||
                  (benefit === 'Health care' && 'solar:heart-outline') ||
                  (benefit === 'Retirement plans' && 'solar:shield-user-outline') ||
                  (benefit === 'Flexible work schedule' && 'solar:calendar-add-outline') ||
                  'carbon:direct-link'
                }
                sx={{ color: 'primary.main' }}
              />
              {benefit}
            </Box>
          ))}
        </Box>
      </div>

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 3 }}>
          Location
        </Typography>
        <Map locations={locationMap} sx={{ borderRadius: 2 }} />
      </div>
    </Box>
  );
}
