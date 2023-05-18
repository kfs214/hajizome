import { Dayjs } from "dayjs";

export type Article = {
  id: number;
  title: string;
  titleErrorMessage?: string;
  body: string;
  bodyErrorMessage?: string;
  date: Dayjs | null;
  dateErrorMessage?: string;
};
