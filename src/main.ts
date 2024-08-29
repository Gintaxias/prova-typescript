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

const MAX_BORROWED_BOOKS = 5;

const isBookAvailable = (bookId: number) => {
	const book = FindBookById(bookId);
	if (!book) {
		return `Livro com id ${bookId} não encontrado`;
	}
	if (!book.available || book.quantity === 0) {
		return `Livro com id ${bookId} não está disponível`;
	}
	return null;
};

const canStudentBorrowMoreBooks = (student: any, numberOfBooks: number) => {
	return student.BorrowedBooks + numberOfBooks <= MAX_BORROWED_BOOKS;
};

export const rentBooks = (studentId: number, bookIds: number[]) => {
	const student = FindStudentById(studentId);
	if (!student) {
		return "Aluno não encontrado";
	}

	if (!canStudentBorrowMoreBooks(student, bookIds.length)) {
		return `Limite de livros emprestados do(a) aluno ${student.name} excedido`;
	}

	for (const bookId of bookIds) {
		const errorMessage = isBookAvailable(bookId);
		if (errorMessage) {
			return errorMessage;
		}
	}

	bookIds.forEach((bookId) => {
		const book = FindBookById(bookId)!;
		book.quantity--;
		if (book.quantity <= 0) {
			book.available = false;
		}
		rentals.push({
			StudentId: studentId,
			BookId: bookId,
			date: new Date(),
		});
	});

	student.BorrowedBooks += bookIds.length;
	return "Aluguel criado com sucesso";
};

console.log("----------------------------------");
console.log("Aluguéis");
console.log(rentBooks(1, [1, 4]), "\n", rentals);
console.log(rentBooks(3, [3, 5]));
console.log("----------------------------------");
console.log("Livros com o id dado");
console.log(FindBookById(1));
console.log("----------------------------------");
console.log("Livros disponíveis");
console.log(GetAvailableBooks(livros));
console.log("----------------------------------");
console.log("Títulos");
console.log(GetBookTitles(livros));
console.log("----------------------------------");
console.log("Número de livros com o autor dado");
console.log(GetTotalBooksByAuthor("joão", livros));
console.log("----------------------------------");
console.log("Livros por ano");
console.log(SortBooksByYear(livros));
console.log("----------------------------------");
