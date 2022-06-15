import "./styles.css";
import { useState } from "react";

const people = [
  { name: "Alan Turing", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Barbara Liskov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
];

export default function App() {
  const [search, setSearch] = useState();
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    if (search == "") {
      setError(true);
    }
    setSearch(e.target.value);
  };
  const filtered = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <>
      <div>
        <div className="App">
          <div>
            <input placeholder="Enter Search Keyword" />
          </div>
          <div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="error">{error && <h5>Enter value</h5>}</div>
        {filtered.map((person) => {
          return (
            <p key={person.id}>
              {person.name} - {person.number}
            </p>
          );
        })}
      </div>
    </>
  );
}
