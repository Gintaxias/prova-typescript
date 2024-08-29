export interface Student {
  id: number;
  name: string;
  BorrowedBooks: number;
}

export const alunos: Map<number, Student> = new Map([
  [
    1,
    {
      id: 1,
      name: "Gabriel",
      BorrowedBooks: 0,
      limit: false,
    },
  ],
  [
    2,
    {
      id: 2,
      name: "Gleyson",
      BorrowedBooks: 2,
      limit: false,
    },
  ],
  [
    3,
    {
      id: 3,
      name: "Sthefany",
      BorrowedBooks: 5,
      limit: true,
    },
  ],
  [
    4,
    {
      id: 4,
      name: "Paulo",
      BorrowedBooks: 1,
      limit: false,
    },
  ],
  [
    5,
    {
      id: 5,
      name: "Elias",
      BorrowedBooks: 4,
      limit: false,
    },
  ],
]);

export const FindStudentById = (StudentId: number): Student | undefined => {
  return alunos.get(StudentId);
};
