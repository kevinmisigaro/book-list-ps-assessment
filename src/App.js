import { useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";


function App() {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K Rowling" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
    },
  ];

  return (
    <div className="App">
      <div style={{ margin: "5rem 10rem" }}>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "2rem",
            fontSize: "1.5rem",
          }}
        >
          Book List
        </div>
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            style={{
              padding: "0.5rem 4rem",
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <DataTable columns={columns} data={filteredBooks} />
      </div>
    </div>
  );
}

export default App;
