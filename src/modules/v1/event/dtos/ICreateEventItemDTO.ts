export default interface ICreateEventItemDTO {
  event_id: string;
  name: string;
  amount: number;
  has_beer?: boolean;
  paid?: boolean;
}
