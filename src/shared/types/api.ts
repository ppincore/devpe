type ErrorData = Partial<{
  message: string;
}>;

export interface FetchBaseQueryErrorCustom {
  status: number;
  data?: ErrorData;
}
