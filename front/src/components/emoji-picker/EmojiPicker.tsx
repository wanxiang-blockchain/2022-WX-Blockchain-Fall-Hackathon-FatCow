import data from '@emoji-mart/data';
import { Picker, BaseEmoji, PickerProps, Data } from 'emoji-mart';
import { useEffect, useRef, useState } from 'react';
// @mui
import { useTheme, hexToRgb, Theme } from '@mui/material/styles';
import { SxProps, Box, IconButton, ClickAwayListener, Paper, GlobalStyles } from '@mui/material';
//
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

interface Props extends PickerProps {
  data?: Data;
  disabled?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onEmojiSelect?: (emoji: BaseEmoji) => void;
  ref?: React.MutableRefObject<HTMLInputElement>;
  sx?: SxProps<Theme>;
}

export default function EmojiPicker({ value, setValue, disabled, sx, ...other }: Props) {
  const theme = useTheme();

  const emojiRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    new Picker({
      ref: emojiRef,
      data,
      onEmojiSelect: (emoji: BaseEmoji) => setValue(value + emoji?.native),
      ...other,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const hexToRgbString = (hex: string) => hexToRgb(hex).replace('rgb(', '').replace(')', '');

  return (
    <>
      <GlobalStyles
        styles={{
          '#__next': {
            '--color-border': theme.palette.divider,
            '--rgb-accent': hexToRgbString(theme.palette.primary.main),
            '--rgb-background': hexToRgbString(theme.palette.background.paper),
            '--rgb-color': hexToRgbString(theme.palette.text.secondary), //
            '--rgb-input': 'transparent',
          },
        }}
      />

      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box sx={{ position: 'relative' }}>
          <IconButton disabled={disabled} size="small" onClick={() => setOpen(!open)}>
            <Iconify icon={'eva:smiling-face-fill'} width={20} height={20} />
          </IconButton>

          {open && (
            <Paper
              ref={emojiRef}
              sx={{
                bottom: 36,
                position: 'absolute',
                boxShadow: (theme) => theme.customShadows.dropdown,
                ...sx,
              }}
            />
          )}
        </Box>
      </ClickAwayListener>
    </>
  );
}
