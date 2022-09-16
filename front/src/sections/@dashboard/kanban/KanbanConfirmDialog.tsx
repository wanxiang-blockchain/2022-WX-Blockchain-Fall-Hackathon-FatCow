// @mui
import { Dialog, DialogTitle, DialogActions } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  title: React.ReactNode;
  subheader?: React.ReactNode;
  actions: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
};

export default function KanbanConfirmDialog({ title, subheader, actions, open, onClose }: Props) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        {subheader}
      </DialogTitle>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}
