let books = [];

const title = document.getElementById("title");
const author = document.getElementById("author");
const summary = document.getElementById("summary");
const pubDate = document.getElementById("pubDate");
const writtenDate = document.getElementById("writtenDate");
const docLink = document.getElementById("docLink");
const addBtn = document.getElementById("addBookBtn"); // Button to add book
const booksContainer = document.getElementById("booksContainer"); // Where all books are displayed

// Add book
addBtn.addEventListener("click", () => {
    if(title.value && author.value){ // basic validation
        const book = {
            id: Date.now(), // unique id
            title: title.value,
            author: author.value,
            summary: summary.value,
            pubDate: pubDate.value,
            writtenDate: writtenDate.value,
            docLink: docLink.value
        };
        books.push(book);
        renderBooks();
        clearForm();
    }
});

// Delete book
function deleteBook(id){
    books = books.filter(book => book.id !== id);
    renderBooks();
}

// Render all books
function renderBooks(){
    booksContainer.innerHTML = ""; // clear previous
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.innerHTML = `
            <strong>Title:</strong> ${book.title} <br>
            <strong>Author:</strong> ${book.author} <br>
            <strong>Summary:</strong> ${book.summary} <br>
            <strong>Publication Date:</strong> ${book.pubDate} <br>
            <strong>Written Date:</strong> ${book.writtenDate} <br>
            <a href="${book.docLink}" target="_blank">Open Document</a> <br>
            <button onclick="deleteBook(${book.id})">Delete</button>
        `;
        booksContainer.appendChild(bookDiv);
    });
}

// Clear form after adding
function clearForm(){
    title.value = "";
    author.value = "";
    summary.value = "";
    pubDate.value = "";
    writtenDate.value = "";
    docLink.value = "";
}
