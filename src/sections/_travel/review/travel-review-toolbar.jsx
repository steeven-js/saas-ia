import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses } from '@mui/material/Select';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

export function TravelReviewToolbar({
  sort,
  totalReviews,
  onOpenReview,
  onChangeSort,
  sx,
  ...other
}) {
  return (
    <Box
      gap={5}
      display="flex"
      alignItems={{ md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{ mb: 5, ...sx }}
      {...other}
    >
      <Typography component="h6" variant="h4" sx={{ width: 1 }}>
        {totalReviews} reviews
      </Typography>

      <Box gap={2} display="flex" alignItems="center" flexShrink={0}>
        <FormControl
          hiddenLabel
          sx={{
            [`& .${selectClasses.select}`]: { py: 1.75 },
          }}
        >
          <Select value={sort} onChange={onChangeSort} inputProps={{ id: 'sort-select' }}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size="large" variant="contained" color="inherit" onClick={onOpenReview}>
          Write a review
        </Button>
      </Box>
    </Box>
  );
}
