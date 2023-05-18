import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Dayjs } from "dayjs";

import DatePicker from "../atoms/DatePicker";
import TextField from "../atoms/TextField";
import { Article } from "../types";

type Props = {
  article: Article;

  // TODO 親のハンドラ定義に応じて変更
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeBody: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (newValue: Dayjs | null) => void;
};

export default function InputArticleCard(props: Props) {
  const {
    article: {
      title,
      body,
      date,
      titleErrorMessage,
      bodyErrorMessage,
      dateErrorMessage,
    },
    handleChangeTitle,
    handleChangeBody,
    handleChangeDate,
  } = props;

  return (
    <Card sx={{ maxWidth: "lg" }}>
      <CardContent>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          helperText={titleErrorMessage}
          error={!!titleErrorMessage}
          onChange={handleChangeTitle}
        />
        <TextField
          label="Body"
          fullWidth
          margin="normal"
          multiline
          value={body}
          helperText={bodyErrorMessage}
          error={!!bodyErrorMessage}
          onChange={handleChangeBody}
        />
        <DatePicker
          label="Date"
          value={date}
          slotProps={{
            textField: {
              helperText: dateErrorMessage,
              error: !!dateErrorMessage,
              fullWidth: true,
              margin: "normal",
            },
          }}
          onChange={handleChangeDate}
        />
      </CardContent>
    </Card>
  );
}
