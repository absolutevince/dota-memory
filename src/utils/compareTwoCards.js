import formatLetteredId from "./formatLetteredId";

export default function compareTwoCardsId(idOne, idTwo) {
  return formatLetteredId(idOne) === formatLetteredId(idTwo);
}
