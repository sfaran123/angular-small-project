
export class CarModel {
  id: number;
  type: string;
  brand: string;
  model: string;
  price: string;
  branch: string;
}

export enum CarBranches {
  QiryatShemona = 'Qiryat Shemona',
  Eilat = 'Eilat',
  BierSheva = 'Bier Sheva',
  telAviv = 'Tel-Aviv',
  Afula = 'Afula',
  Haifa = 'Haifa',
  nazareth = 'nazareth',
}
