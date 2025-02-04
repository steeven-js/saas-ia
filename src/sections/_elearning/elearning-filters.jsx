import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

import { Iconify } from 'src/components/iconify';

const autocompleteProps = {
  root: {
    limitTags: 2,
    multiple: true,
    disableCloseOnSelect: true,
  },

  chip: {
    size: 'small',
    variant: 'soft',
  },

  paper: {
    sx: {
      [`& .${autocompleteClasses.option}`]: {
        [`& .${checkboxClasses.root}`]: {
          p: 0,
          mr: 1,
        },
      },
    },
  },
};

// ----------------------------------------------------------------------

export function ElearningFilters({ open, onClose, filters, options }) {
  const { state, setState } = filters;

  const renderContent = (
    <>
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        value={state.keyword}
        onChange={(event) => setState({ keyword: event.target.value })}
      />

      <Block title="Ratings">
        <Box display="flex" flexDirection="column">
          {options.ratings.map((option, index) => (
            <Box
              key={option}
              gap={1}
              display="flex"
              alignItems="center"
              onClick={() => setState({ rating: option })}
              sx={{
                py: 1,
                opacity: 0.48,
                cursor: 'pointer',
                typography: 'body2',
                '&:hover': { opacity: 1 },
                ...(state.rating === option && {
                  opacity: 1,
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              <Rating readOnly size="small" value={4 - index} />& Up
            </Box>
          ))}
        </Box>
      </Block>

      <Block title="Duration">
        <FilterSelect
          name="duration"
          label="All duration"
          filters={filters}
          options={options.durations}
        />
      </Block>

      <Block title="Category">
        <Autocomplete
          {...autocompleteProps.root}
          options={options.categories}
          value={state.categories}
          onChange={(event, newValue) => setState({ categories: newValue })}
          slotProps={{ paper: autocompleteProps.paper }}
          renderInput={(params) => (
            <TextField
              {...params}
              hiddenLabel={!state.categories.length}
              placeholder="All categories"
              InputProps={{ ...params.InputProps, autoComplete: 'search' }}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option}>
              <Checkbox key={option} size="small" disableRipple checked={selected} />
              {option}
            </li>
          )}
          renderTags={(selected, getTagProps) =>
            selected.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                {...autocompleteProps.chip}
                key={option}
                label={option}
              />
            ))
          }
        />
      </Block>

      <Block title="Level">
        <FilterSelect name="level" label="All levels" filters={filters} options={options.levels} />
      </Block>

      <Block title="Fee">
        <FilterSelect name="fee" label="All fees" filters={filters} options={options.fees} />
      </Block>

      <Block title="Language">
        <Autocomplete
          {...autocompleteProps.root}
          options={options.languages}
          value={state.language}
          onChange={(event, newValue) => setState({ language: newValue })}
          slotProps={{ paper: autocompleteProps.paper }}
          renderInput={(params) => (
            <TextField
              {...params}
              hiddenLabel={!state.language.length}
              placeholder="All language"
              InputProps={{ ...params.InputProps, autoComplete: 'search' }}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option}>
              <Checkbox key={option} size="small" disableRipple checked={selected} />
              {option}
            </li>
          )}
          renderTags={(selected, getTagProps) =>
            selected.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                {...autocompleteProps.chip}
                key={option}
                label={option}
              />
            ))
          }
        />
      </Block>
    </>
  );

  const renderDesktop = (
    <Stack
      spacing={2.5}
      sx={{
        width: 280,
        flexShrink: 0,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      {renderContent}
    </Stack>
  );

  const renderMobile = (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { p: 3, gap: 2.5, width: 280, display: 'flex', flexDirection: 'column' },
      }}
    >
      {renderContent}
    </Drawer>
  );

  return (
    <>
      {renderDesktop}
      {renderMobile}
    </>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <Typography variant="overline" sx={{ mb: 1, display: 'block', color: 'text.disabled' }}>
        {title}
      </Typography>

      {children}
    </div>
  );
}

// ----------------------------------------------------------------------

export function FilterSelect({ sx, name, label, options, filters }) {
  const { state, setField } = filters;

  const value = state[name];

  return (
    <FormControl fullWidth hiddenLabel sx={sx}>
      <Select
        multiple
        displayEmpty
        value={value}
        inputProps={{ id: `${name}-filter-select` }}
        onChange={(event) => {
          const newValue =
            typeof event.target.value === 'string'
              ? event.target.value.split(',')
              : event.target.value;

          setField(name, newValue);
        }}
        renderValue={(selected) => {
          if (Array.isArray(selected) && selected?.length) {
            return (
              <Typography variant="subtitle2" component="span">
                {selected.join(', ')}
              </Typography>
            );
          }
          return (
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              {label}
            </Typography>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox
              size="small"
              checked={state[name]?.includes(option)}
              sx={{ [`&.${checkboxClasses.root}`]: { p: 0, mr: 1 } }}
            />

            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
