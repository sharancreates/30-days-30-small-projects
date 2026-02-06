# 🪪 User Profile Card Generator

A dynamic web application that allows users to create, preview, and download a customized personal profile card. This project demonstrates real-time DOM manipulation and client-side image generation.

<img width="1908" height="917" alt="image" src="https://github.com/user-attachments/assets/9bfe814a-a579-47c8-b86d-e89fa365ae97" />


## ✨ Features

* **Real-time Preview:** The profile card updates instantly as you type.
* **Image Upload:** Users can upload a profile picture from their local device (using the FileReader API).
* **Download as PNG:** Generates a high-quality image of the specific card area using `html2canvas` and downloads it to the user's computer.
* **Google Drive Link Support:** Automatically converts standard Google Drive file links into direct image URLs.
* **Responsive Design:** Uses CSS Flexbox to ensure the layout works on different screen sizes.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox layout, custom styling, and Google Fonts integration (*Bungee, Pacifico, Dancing Script*).
* **JavaScript (ES6):**
    * DOM Manipulation for live updates.
    * `FileReader` API for handling image uploads.
* **Library:** [html2canvas](https://html2canvas.hertzen.com/) (v1.4.1) for rendering the DOM element to an image.

## 🚀 How to Run

Since this is a static web project, you do not need to install any dependencies or run a backend server.

1.  **Clone or Download** this repository.
2.  Navigate to the project folder.
3.  Open `index.html` in any modern web browser (Chrome, Firefox, Edge).

## 📂 Project Structure

```text
├── index.html    # Main structure and layout
├── style.css     # Styling, colors, and fonts
├── script.js     # Logic for live preview, image handling, and downloading
└── README.md     # Project documentation
