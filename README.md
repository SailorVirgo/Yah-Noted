# Yah-Noted


## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Notes API](#notes-api)
- [File Structure](#file-structure)
- [License](#license)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Description
Yah-Noted is a note-taking application that allows users to create, read, update, and delete notes. This project serves as a practical example of a full-stack application using `Node.js`, `Express.js`, and a front-end framework.

## Demo

#### Link to Demo:
Open your browser and navigate to `http://localhost:3000`

https://github.com/user-attachments/assets/164c6b3c-6c69-4b22-9849-32c9afee7363

![Screenshot 2024-07-29 005900](https://github.com/user-attachments/assets/e72c527d-cd93-4ed2-b8d2-c5269b98181a)


## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:SailorVirgo/Yah-Noted.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Yah-Noted
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
## Usage

1. Start server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Notes API
- #### GET /api/notes
    * Description: Retrieves all notes.
    * Response: JSON array of note objects.
- ### POST /api/notes
    * Description: Creates a new note.
    * Request Body: JSON object containing title and content.
- ### PUT /api/notes/
    * Description: Updates an existing note by ID.
    * Request Body: JSON object containing updated title and content.
- ### DELETE /api/notes/
    * Description: Deletes a note by ID.

## File Structure
```bash
Yah-Noted
├── .git
├── .gitignore
├── db
│   └── db.json
├── htmlRoutes.js
├── LICENSE
├── node_modules
├── noteAPIRoutes.js
├── package.json
├── package-lock.json
├── public
│   ├── assets
│   │   ├── css
│   │   ├── images
│   │   └── js
│   └── index.html
├── README.md
└── server.js
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact Information
For any questions or concerns, please contact Eric Casanova at tm11solarbeam@gmail.com.
