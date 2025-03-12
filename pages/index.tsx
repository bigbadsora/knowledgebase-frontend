import { useEffect, useState } from "react";
import { getNotes } from "../utils/api";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getNotes()
            .then(setNotes)
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            <h1>Notes</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <strong>{note.title}</strong>: {note.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
