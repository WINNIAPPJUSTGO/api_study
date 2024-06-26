import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import SearchNote from "./components/SearchNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  async function getNotes(params) {
    setLoading(true);

    let url = "http://localhost:8080/notes";
    if (params) {
      url += `?${new URLSearchParams({ term: params })}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setNotes(data);
    setLoading(false);
  }

  useEffect(() => {
    getNotes();
  }, []);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    getNotes(event.target.value);
  }

  async function handleAdd(note) {
    const res = await fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer SOMEJWTTOKEN",
      },
      body: JSON.stringify(note),
    });

    const data = await res.json();
    setNotes([...notes, data]);
  }

  return (
    <main className="container">
      <div>
        <h1>我的笔记本</h1>
        <SearchNote searchTerm={searchTerm} onChange={handleSearch} />
        {loading ? <div>loading...</div> : <NoteList notes={notes} />}
        <AddNote onSubmit={handleAdd} />
      </div>
    </main>
  );
}

export default App;
