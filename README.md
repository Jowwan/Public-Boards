# Public Boards

Public Boards is a simple CRUD (Create, Read, Update, Delete) application that allows users to create, edit, and delete boards. This project is built using React for the frontend and Supabase as the backend database.

## Features

- **Public Access:** No row-level security is implemented, allowing anyone to perform CRUD operations on all boards.
- **CRUD Functionality:** Users can:
  - Create new boards.
  - View existing boards.
  - Edit boards.
  - Delete boards.
- **Real-time Updates:** Changes are reflected immediately thanks to Supabase's real-time capabilities.

## Technologies Used

- **Frontend:** React
- **Backend Database:** Supabase

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A Supabase account and project setup.

### Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Jowwan/Public-Boards.git
   cd Public-Boards
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your Supabase credentials:
     ```env
     REACT_APP_SUPABASE_URL=your-supabase-url
     REACT_APP_SUPABASE_ANON_KEY=your-anon-key
     ```

4. **Run the Application:**
   ```bash
   npm start
   ```
   - The app will be available at `http://localhost:3000`.

### Supabase Configuration

1. **Database Schema:**
   - Create a `boards` table in Supabase with the following columns:
     | Column Name  | Type        | Constraints      |
     |--------------|-------------|------------------|
     | id           | UUID        | Primary Key      |
     | created_at   | Timestamp   | Default: now()   |
     | description  | Text        | Not Null         |
     | author       | Text        | Not Null         |

2. **API Key:**
   - Use the public `anon` key provided by Supabase for client-side operations.

## Usage

- Visit the application.
- Create, view, edit, or delete boards as needed.
- Changes are visible to all users instantly.

---

Feel free to contribute or suggest improvements!

