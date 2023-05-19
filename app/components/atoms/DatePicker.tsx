import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

type Props = React.ComponentProps<typeof MUIDatePicker<Dayjs | null>>;

export default function DatePicker(props: Props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MUIDatePicker format="YYYY-MM-DD" {...props} />;
}
