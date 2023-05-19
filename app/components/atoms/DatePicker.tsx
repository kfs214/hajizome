import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

type Props = React.ComponentProps<typeof MUIDatePicker<Dayjs | null>>;

// TODO 日付バリデーションのパターン
export default function DatePicker(props: Props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MUIDatePicker format="YYYY-MM-DD" {...props} />;
}
