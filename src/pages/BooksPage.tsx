// src/pages/BooksPage.tsx
import React, { useState } from "react";
import BookPdfModal from "../components/BookPdfModal";
import "./BooksPage.css";

interface Book {
  title: string;
  cover: string;
  pdf: string;
}

const books: Book[] = [
  {
    title: "The Alchemist",
    cover: "/images/books/alchemist.jpeg",
    pdf: "/books/alchemist.pdf",
  },
  {
    title: "Eat That Frog",
    cover: "/images/books/eat-that-frog.jpeg",
    pdf: "/books/eat-that-frog.pdf",
  },
  {
    title: "Psychology of Money",
    cover: "/images/books/psychology-of-money.jpeg",
    pdf: "/books/pyschology-of-money.pdf",
  },
  {
    title: "Rich Dad Poor Dad",
    cover: "/images/books/rich-dad-poor-dad.jpeg",
    pdf: "/books/rich-dad-poor-dad.pdf",
  },
  {
    title: "Atomic Habits",
    cover: "/images/books/atomic-habits.jpeg",
    pdf: "/books/atomic-habits.pdf",
  },
  {
    title: "Bhagavad Gita",
    cover: "/images/books/bhagavad-gita.jpeg",
    pdf: "/books/bhagavad-gita.pdf",
  },
];

const BooksPage: React.FC = () => {
  const [openBook, setOpenBook] = useState<Book | null>(null);

  return (
    <div className="books-page">
      <h1 className="books-title">📚 Books that helped me shape my Mind</h1>
      <div className="books-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card"
            onClick={() => setOpenBook(book)}
          >
            <img src={book.cover} alt={book.title} className="book-cover" />
            <div className="book-title">{book.title}</div>
          </div>
        ))}
      </div>

      {openBook && (
        <BookPdfModal
          isOpen={!!openBook}
          onClose={() => setOpenBook(null)}
          pdfUrl={openBook.pdf}
          title={openBook.title}
        />
      )}
    </div>
  );
};

export default BooksPage;
