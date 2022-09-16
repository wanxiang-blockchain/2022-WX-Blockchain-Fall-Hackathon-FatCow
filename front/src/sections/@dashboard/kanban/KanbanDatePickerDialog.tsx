// @mui
import { Dialog, DialogTitle, TextField, DialogActions, Button, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  startTime: Date | null;
  endTime: Date | null;
  onClose: VoidFunction;
  onChangeStartTime: (newValue: Date | null) => void;
  onChangeEndTime: (newValue: Date | null) => void;
};

export default function KanbanDatePickerDialog({
  startTime,
  endTime,
  onChangeStartTime,
  onChangeEndTime,
  open,
  onClose,
}: Props) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle> Choose due date </DialogTitle>

      <Stack spacing={2} sx={{ px: 3, mt: 3 }}>
        <DatePicker
          label="Start date"
          value={startTime}
          onChange={onChangeStartTime}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="End date"
          value={endTime}
          onChange={onChangeEndTime}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>

      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
