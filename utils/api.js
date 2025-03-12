const API_URL = "http://localhost:8000/api/v1/notes"; // Adjust if using a different port

export async function getNotes() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch notes");
    }
    return response.json();
}
