export interface Rental {
  StudentId: number;
  BookId: number;
  date: Date;
}
export const rentals: Array<Rental> = [
  { StudentId: 1, BookId: 3, date: new Date(Date.now()) },
  { StudentId: 2, BookId: 5, date: new Date(Date.now()) },
];
