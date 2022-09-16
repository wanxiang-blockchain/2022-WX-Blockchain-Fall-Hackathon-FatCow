import { format } from 'date-fns';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  startTime: Date | string;
  endTime: Date | string;
  isSameDays: boolean;
  isSameMonths: boolean;
  onOpenPicker: VoidFunction;
}

export default function KanbanTaskDisplayTime({
  startTime,
  endTime,
  isSameDays,
  isSameMonths,
  onOpenPicker,
  sx,
}: Props) {
  const style = {
    typography: 'caption',
    cursor: 'pointer',
    '&:hover': { opacity: 0.72 },
  };

  if (isSameMonths) {
    return (
      <Box onClick={onOpenPicker} sx={{ ...style, ...sx }}>
        {isSameDays
          ? format(new Date(endTime), 'dd MMM')
          : `${format(new Date(startTime), 'dd')} - ${format(new Date(endTime), 'dd MMM')}`}
      </Box>
    );
  }
  return (
    <Box onClick={onOpenPicker} sx={{ ...style, ...sx }}>
      {format(new Date(startTime), 'dd MMM')} - {format(new Date(endTime), 'dd MMM')}
    </Box>
  );
}
