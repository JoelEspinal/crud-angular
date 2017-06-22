export class Contact {
  id?: number;
  name: string;
  lastName: string;
  address: string;
  numbers?: [ {id?: number, number: string, category?: string} ];
  updateAt: Date;
}
