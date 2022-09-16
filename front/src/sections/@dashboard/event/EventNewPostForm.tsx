import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Web3Storage } from 'web3.storage';
// next
import { useRouter } from 'next/router';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Card,
  Chip,
  Stack,
  Button,
  TextField,
  Typography,
  Autocomplete,
  Slider as MuiSlider,
  InputAdornment,
  MenuItem,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//components
import { CustomFile } from '../../../components/upload';
import {
  RHFSwitch,
  RHFEditor,
  RHFSelect,
  RHFSlider,
  FormProvider,
  RHFTextField,
  RHFUploadSingleFile,
} from '../../../components/hook-form';
// hooks
import useAuth from '../../../hooks/useAuth';
// utils
import { checkActiveAccount, clearActiveAccount } from '../../../utils/dAPPClient';
//
import EventNewPostPreview from './EventNewPostPreview';

// ----------------------------------------------------------------------

const TAGS_OPTION = [
  'Toy Story',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  'A Space Odyssey',
  '3 Idiots',
];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

export type FormValuesProps = {
  title: string;
  description: string;
  content: string;
  cover: CustomFile | string | null;
  group: string;
  fee: number;
  threshold: number;
  royalty: number;
  revenue: number;
  timeEnd: number;
  // comments: boolean;
  // metaTitle: string;
  // metaDescription: string;
  // metaKeywords: string[];
};

export default function EventNewPostForm() {
  const { push } = useRouter();

  const [open, setOpen] = useState(false);

  const [coverFile, setCoverFile] = useState<File | null>(null);

  const { enqueueSnackbar } = useSnackbar();

  const { login } = useAuth();

  const storageClient = new Web3Storage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNjNDhDZTE3RTA5NTBBREQwOThkQjU2YTUwZTQ2Y0FFNDE5NDNlMTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjMzMzE4NjI2NDcsIm5hbWUiOiJmYXRjb3dpbyJ9.s-smapTw_9S-4LhOl8n4GOxuztAX4EChIXx2npik0fs',
  });

  const handleOpenPreview = () => {
    setOpen(true);
  };

  const handleClosePreview = () => {
    setOpen(false);
  };

  const NewEventSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    content: Yup.string().required('Content is required'),
    cover: Yup.mixed().required('Cover is required'),
    // group: Yup.string().required('Group is required'),
    fee: Yup.number().required('Fee is required'),
    // threshold: Yup.number().required('Threshold is required'),
    // royalty: Yup.number().required('Royalty is required'),
    // revenue: Yup.number().required('Revenue is required'),
    // timeEnd: Yup.number().required('Endtime is required'),
  });

  const defaultValues = {
    title: '',
    description: '',
    content: '',
    cover: null,
    group: '',
    // tags: ['Logan'],
    fee: 3,
    threshold: 20,
    royalty: 10,
    revenue: 30,
    timeEnd: 7,
  };

  const percentMarks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  function percentValueText(value: number) {
    return `${value}%`;
  }

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewEventSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const onSubmit = async (data: FormValuesProps) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      handleClosePreview();
      await clearActiveAccount();
      const account = await checkActiveAccount();
      login();
      const rootCid = await storageClient.put([coverFile as File], {
        name: 'event-' + data.title + '-cover',
        maxRetries: 3,
      });
      enqueueSnackbar('Post success!');
      push(PATH_DASHBOARD.event.view('e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1'));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setCoverFile(file);
        setValue(
          'cover',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <RHFTextField name="title" label="Title" />

                <RHFTextField name="description" label="Description" multiline rows={3} />

                <div>
                  <LabelStyle>Content</LabelStyle>
                  <RHFEditor simple name="content" />
                </div>

                <div>
                  <LabelStyle>Cover</LabelStyle>
                  <RHFUploadSingleFile name="cover" maxSize={3145728} onDrop={handleDrop} />
                </div>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <section>
                  <LabelStyle>Group</LabelStyle>
                  <RHFTextField name="group" select helperText="Please select a group">
                    {TAGS_OPTION.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </RHFTextField>
                  {/* <Controller
                    name="group"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        freeSolo
                        onChange={(event, newValue) => field.onChange(newValue)}
                        options={TAGS_OPTION.map((option) => option)}
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              {...getTagProps({ index })}
                              key={option}
                              size="small"
                              label={option}
                            />
                          ))
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    )}
                  /> */}
                </section>

                <section>
                  <LabelStyle>Fee</LabelStyle>
                  <RHFSlider name="fee" marks={percentMarks} getAriaLabel={percentValueText} />
                </section>

                <section>
                  <LabelStyle>Threshold</LabelStyle>
                  <RHFTextField
                    name="threshold"
                    type="number"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">TEZ</InputAdornment>,
                    }}
                  />
                </section>

                <section>
                  <LabelStyle>Royalty</LabelStyle>
                  <RHFSlider name="royalty" marks={percentMarks} getAriaLabel={percentValueText} />
                </section>

                <section>
                  <LabelStyle>Revenue</LabelStyle>
                  <RHFSlider name="revenue" marks={percentMarks} getAriaLabel={percentValueText} />
                </section>

                <section>
                  <LabelStyle>Time End</LabelStyle>
                  <RHFTextField
                    name="timeEnd"
                    type="number"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                    }}
                  />
                </section>

                {/* <Controller
                  name="Fee"
                  control={control}
                  render={({ field }) => (
                    <MuiSlider
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={0}
                      max={100}
                      onChange={(event, newValue) => field.onChange(newValue)}
                    />
                  )} */}
                {/* /> */}
                {/* <Controller
                  name="fee"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      multiple
                      freeSolo
                      onChange={(event, newValue) => field.onChange(newValue)}
                      options={TAGS_OPTION.map((option) => option)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            {...getTagProps({ index })}
                            key={option}
                            size="small"
                            label={option}
                          />
                        ))
                      }
                      renderInput={(params) => <TextField label="Tags" {...params} />}
                    />
                  )}
                /> */}
              </Stack>
            </Card>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button
                fullWidth
                color="inherit"
                variant="outlined"
                size="large"
                onClick={handleOpenPreview}
              >
                Preview
              </Button>
              <LoadingButton
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                loading={isSubmitting}
              >
                Post
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>

      <EventNewPostPreview
        values={values}
        isOpen={open}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
}
