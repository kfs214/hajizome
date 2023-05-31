import { Article } from "../components/types";

export default function generateTitle({ date }: Article) {
  if (!date) return "";

  const localizedDate = new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(
    date.toDate()
  );

  const [year, month] = localizedDate.split("/");

  return `ふんどし王子随筆集〜${year}.${month}〜`;
}
