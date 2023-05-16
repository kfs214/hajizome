import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

type Props = {
  label: string;
  value: Dayjs | null;
  handleChange: (newValue: Dayjs | null) => void;
};

export default function DatePicker(props: Props) {
  const { label, value, handleChange } = props;

  return (
    <MUIDatePicker
      format="YYYY-MM-DD"
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
}
