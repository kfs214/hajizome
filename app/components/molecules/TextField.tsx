import Box from "@mui/material/Box";
import MUITextField from "@mui/material/TextField";

type Props = {
  // 入力欄のタイトル。「Title」「Body」等
  label: string;
  // 入力欄に設定されている値
  value?: string;
  // バリデーションメッセージ
  helperText?: string;
  // エラー状態か？
  error?: boolean;
  // 複数行を受け付けるか？
  multiline?: boolean;
  // 入力欄の値が更新された場合のハンドラ
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField(props: Props) {
  const { label, value, helperText, error, multiline, handleChange } = props;

  return (
    <Box component="form" autoComplete="off">
      <MUITextField
        variant="standard"
        label={label}
        value={value}
        helperText={helperText}
        error={error}
        multiline={multiline}
        onChange={handleChange}
      />
    </Box>
  );
}
