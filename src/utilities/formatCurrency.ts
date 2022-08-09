const CRRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export function FormatCurrency(number: number) {
  return CRRENCY_FORMATTER.format(number);
}
