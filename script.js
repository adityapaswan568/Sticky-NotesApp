const addNoteBtn = document.getElementById('add-note-btn');
const app = document.getElementById('app');

const COLORS = [
    '#ffeb3b', // Yellow
    '#a7ffeb', // Teal
    '#ffcdd2', // Red/Pink
    '#e1bee7', // Purple
    '#ffe0b2', // Orange
    '#bbdefb', // Light Blue
    '#ffffff'  // White
];

let notes = JSON.parse(localStorage.getItem('sticky-notes') || '[]');

function saveNotes() {
    localStorage.setItem('sticky-notes', JSON.stringify(notes));
}

function createNoteElement(id, content, color) {
    const element = document.createElement('div');
    element.classList.add('note');
    element.style.backgroundColor = color;
    element.dataset.id = id;

    const textarea = document.createElement('textarea');
    textarea.value = content;
    textarea.placeholder = "Type your note here...";
    textarea.addEventListener('input', () => {
        updateNote(id, textarea.value);
    });

    const footer = document.createElement('div');
    footer.classList.add('note-footer');

    // Color Picker
    const colorPicker = document.createElement('div');
    colorPicker.classList.add('color-picker');

    COLORS.forEach(c => {
        const colorOption = document.createElement('div');
        colorOption.classList.add('color-option');
        colorOption.style.backgroundColor = c;
        colorOption.addEventListener('click', () => {
            updateNoteColor(id, c);
        });
        colorPicker.appendChild(colorOption);
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('note-btn');
    deleteBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    `;
    deleteBtn.addEventListener('click', () => {
        deleteNote(id);
    });

    footer.appendChild(colorPicker);
    footer.appendChild(deleteBtn);

    element.appendChild(textarea);
    element.appendChild(footer);

    return element;
}

function addNote() {
    const note = {
        id: Date.now(),
        content: "",
        color: COLORS[0]
    };
    notes.unshift(note); // Add to beginning
    saveNotes();
    renderNotes();
}

function updateNote(id, newContent) {
    const note = notes.find(n => n.id === id);
    if (note) {
        note.content = newContent;
        saveNotes();
    }
}

function updateNoteColor(id, newColor) {
    const note = notes.find(n => n.id === id);
    if (note) {
        note.color = newColor;
        saveNotes();
        // Optimistically update DOM to avoid full re-render flicker
        const noteElement = document.querySelector(`.note[data-id="${id}"]`);
        if (noteElement) {
            noteElement.style.backgroundColor = newColor;
        }
    }
}

function deleteNote(id) {
    const doDelete = confirm("Are you sure you want to delete this note?");
    if (doDelete) {
        notes = notes.filter(n => n.id !== id);
        saveNotes();
        renderNotes();
    }
}

function renderNotes() {
    app.innerHTML = "";
    notes.forEach(note => {
        const noteElement = createNoteElement(note.id, note.content, note.color);
        app.appendChild(noteElement);
    });
}

addNoteBtn.addEventListener('click', addNote);

// Initial Render
renderNotes();
