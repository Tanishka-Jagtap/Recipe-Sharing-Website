# 🍽️ Recipe Sharing Website  

## 📌 Overview  
The **Recipe Sharing Website** is a platform where users can explore, share, and create recipes. It features a fully functional authentication system, categorized recipe collections, and an intuitive user interface for an enhanced experience.

## 🚀 Features  
### 🔹 Frontend  
- **Home Page**: Showcases featured recipes and collections.  
- **User Authentication**: Login and registration system.  
- **Recipe Management**: Create, view, and manage personal recipes.  
- **User Profile**: Edit user information and manage saved recipes.  
- **Categories & Collections**: Browse recipes by category and curated collections.  
- **Responsive Design**: Ensures usability across devices.  

### 🔹 Backend  
- **User Authentication**: Handles registration and login.  
- **Recipe Management**: CRUD operations for recipes.  
- **Database Integration**: Uses MongoDB to store users and recipes.  

## 📂 Project Structure  

```
Recipe-Sharing-Website/
  ├── frontend/
  |     ├── node_modules/
  |     ├── public/
  |     ├── src/
  |     │   ├── components/
  |     │   │   ├── home/ (Homepage components)
  |     │   │   ├── layout/ (Navbar, Footer)
  |     │   │   ├── recipe/ (RecipeList, RecipeDetails)
  |     │   ├── context/ (AuthContext)
  |     │   ├── pages/ (Authentication, Recipe Pages, Profile)
  |     │   ├── services/ (API calls for auth & recipes)
  |     │   ├── styles/ (Styling and themes)
  |     │   ├── utils/ (Axios setup)
  |     │   ├── App.jsx, Index.jsx (Main entry files)
  ├── backend/
  |     ├── models/ (User, Recipe models)
  |     ├── routes/ (Users, Recipes API)
  |     ├── .env (Environment variables)
  |     ├── server.js (Backend server)
```

## 🛠️ Tech Stack  
### 💻 Frontend  
- React.js  
- Context API  
- Axios  
- Styled Components  

### 🌐 Backend  
- Node.js  
- Express.js  
- MongoDB  
- JWT Authentication  

## ⚡ Installation & Setup  

### 🏗️ Clone the Repository  
```bash
git clone https://github.com/Tanishka-Jagtap/Recipe-Sharing-Website.git
cd Recipe-Sharing-Website
```

### 🖥️ Frontend Setup  
```bash
cd frontend
npm install
npm start
```

### 🖥️ Backend Setup  
```bash
cd backend
npm install
npm start
```

## 📜 Environment Variables  
Create a `.env` file in the backend directory with:  
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 🚀 Usage  
- Sign up and log in to create your profile.  
- Browse and filter recipes by category or collection.  
- Add, edit, or delete your recipes.  
- Save recipes to your profile for later use.  

## 🤝 Contributing  
Feel free to fork this repository and submit pull requests with improvements.  

## 📄 License  
This project is open-source and available under the MIT License.  

🚀 Happy Coding & Cooking! 🍲
