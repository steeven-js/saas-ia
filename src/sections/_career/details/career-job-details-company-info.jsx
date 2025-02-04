import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function CareerJobDetailsCompanyInfo({ company, sx, ...other }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        gap: 2,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'transparent',
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt={company?.name}
        src={company?.logo}
        sx={{ width: 48, height: 48, borderRadius: 1 }}
      />

      <div>
        <Typography variant="h6">{company?.name}</Typography>
        <Link variant="body2" color="primary">
          Company profile
        </Link>
      </div>
    </Paper>
  );
}
