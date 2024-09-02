export interface Books {
  id: number;
  title: string;
  author: string;
  year: number;
  available: boolean;
  quantity: number;
}
export const livros: Array<Books> = [
  {
    id: 1,
    title: "livro 1",
    author: "joão",
    year: 2006,
    available: true,
    quantity: 1,
  },
  {
    id: 2,
    title: "livro 2",
    author: "joão",
    year: 2007,
    available: false,
    quantity: 0,
  },
  {
    id: 3,
    title: "livro 3",
    author: "sofia",
    year: 2008,
    available: true,
    quantity: 4,
  },
  {
    id: 4,
    title: "livro 4",
    author: "alessandro",
    year: 2002,
    available: true,
    quantity: 2,
  },
  {
    id: 5,
    title: "livro 5",
    author: "daniela",
    year: 2009,
    available: true,
    quantity: 4,
  },
];

export const FindBookById = (BookId: number): Books | undefined => {
  return livros.find((books) => books.id === BookId);
};

export const GetAvailableBooks = (livros: Array<Books>) => {
  return livros.filter((books) => books.available);
};
//console.log(GetAvailableBooks(livros));

export const GetBookTitles = (livros: Array<Books>) => {
  return livros.map((books) => books.title);
};
//console.log(GetBookTitles(livros));

export const GetTotalBooksByAuthor = (author: string, livros: Array<Books>) => {
  return livros.reduce((count, book) => {
    if (book.author === author) {
      return count + 1;
    }
    return count;
  }, 0);
};
//console.log(GetTotalBooksByAuthor("joao", livros));

export const SortBooksByYear = (livros: Array<Books>) => {
  return livros.slice().sort((a, b) => b.year - a.year);
};
//console.log(SortBooksByYear(livros));
