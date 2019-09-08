export interface IPerson {
    id: Number;
    name: string;
    dt: Date;
}

export interface IPersonDat {
  dat: IPerson[];
  bgColor?: string;
}

export interface IFiltered {
  id: number;
  bgColor: string;
}

export interface ISymbol {
  name: string;
  price: number;
}