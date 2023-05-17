import { Dayjs } from "dayjs";

export type Article = {
  title: string;
  titleErrorMessage?: string;
  body: string;
  bodyErrorMessage?: string;
  date: Dayjs | null;
  dateErrorMessage?: string;
};
