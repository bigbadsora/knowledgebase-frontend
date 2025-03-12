const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export async function getNotes() {
    const response = await fetch(`${API_URL}/notes`);
    if (!response.ok) {
        throw new Error("Failed to fetch notes");
    }
    return response.json();
}
