import {
  FindBookById,
  GetAvailableBooks,
  GetBookTitles,
  GetTotalBooksByAuthor,
  livros,
  SortBooksByYear,
} from "./@types/book.interface";
import { rentals } from "./@types/rental.interface";
import { FindStudentById } from "./@types/student.interface";

export const RentBook = (StudentId: number, books: Array<number>) => {
  const aluno = FindStudentById(StudentId);
  if (!aluno) {
    return "Aluno não encontrado";
  }

  if (aluno.BorrowedBooks + books.length > 5) {
    return `limite de livros emprestados do(a) aluno ${aluno.name} excedido`;
  }

  for (const BookId of books) {
    const book = FindBookById(BookId);
    if (!book) {
      return `livro com id ${BookId} não encontrado`;
    }
    if (!book.available || book.quantity == 0) {
      return `livro com id:${BookId}, não está disponivel`;
    }
  }

  for (const BookId of books) {
    const book = FindBookById(BookId)!;
    book.quantity--;
    if (book.quantity <= 0) {
      book.available === false;
    }
    rentals.push({
      StudentId: StudentId,
      BookId: BookId,
      date: new Date(Date.now()),
    });
  }

  aluno.BorrowedBooks += books.length;
  return "Aluguel criado com sucesso";
};

console.log("----------------------------------");
console.log("Aluguéis");
console.log(RentBook(1, [1, 4]), "\n", rentals);
console.log(RentBook(3, [3, 5]));
console.log("----------------------------------");
console.log("Livros com o id dado");
console.log(FindBookById(1));
console.log("----------------------------------");
console.log("Livros disponíveis");
console.log(GetAvailableBooks(livros));
console.log("----------------------------------");
console.log("Titulos");
console.log(GetBookTitles(livros));
console.log("----------------------------------");
console.log("Número de livros com o author dado");
console.log(GetTotalBooksByAuthor("joão", livros));
console.log("----------------------------------");
console.log("Livros por ano");
console.log(SortBooksByYear(livros));
console.log("----------------------------------");
