import { useState } from 'react';
import { isSameDay, isSameMonth } from 'date-fns';
//
import useToggle from './useToggle';

// ----------------------------------------------------------------------

type Props = [Date | null, Date | null];

export default function useDateRangePicker(date: Props) {
  const { toggle: openPicker, onOpen: onOpenPicker, onClose: onClosePicker } = useToggle();

  const [startTime, setStartTime] = useState<Date | null>(date[0]);

  const [endTime, setEndTime] = useState<Date | null>(date[1]);

  const isSameDays =
    startTime && endTime ? isSameDay(new Date(startTime), new Date(endTime)) : false;

  const isSameMonths =
    startTime && endTime ? isSameMonth(new Date(startTime), new Date(endTime)) : false;

  const handleChangeStartTime = (newValue: Date | null) => {
    setStartTime(newValue);
  };

  const handleChangeEndTime = (newValue: Date | null) => {
    setEndTime(newValue);
  };

  return {
    startTime,
    endTime,
    onChangeStartTime: handleChangeStartTime,
    onChangeEndTime: handleChangeEndTime,
    //
    openPicker,
    onOpenPicker,
    onClosePicker,
    //
    isSameDays,
    isSameMonths,
  };
}
