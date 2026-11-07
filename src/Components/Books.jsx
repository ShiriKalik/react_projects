import React from "react";

const Books = () => {
  const books = [
    {
      bookId: 1,
      name: "Istarak",
      auther: "maya",
      price: 80,
    },
    {
      bookId: 2,
      name: "Malalel",
      auther: "maya",
      price: 55,
    },
    {
      bookId: 3,
      name: "Yozavad",
      auther: "maya",
      price: 60,
    },
    {
      bookId: 4,
      name: "Fadael",
      auther: "maya",
      price: 70,
    },
  ];
  return (
    <table border="1">
      <thead>
        <tr>
          <th>bookId</th>
          <th>name</th>
          <th>auther</th>
          <th>price</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.bookId}>
            <td>{book.bookId}</td>
            <td>{book.name}</td>
            <td>{book.auther}</td>
            <td>{book.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Books;
