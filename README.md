# My React App – Nomad Coders Practice

This project is a React-based personal homepage created while following React lessons on [NomadCoders](https://nomadcoders.co/).  
It focuses on core concepts of React, including components, props, routing, and styling using both CSS Modules and global CSS.

## 📁 Project Structure
```
my-app-react/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   ├── components/
│   │   ├── Movie.js
│   │   └── Navigation.js
│   └── routes/
│       ├── Home.js
│       └── Detail.js
├── package.json
└── README.md
```


## 🚀 How to Start

Install dependencies and run the development server:

```bash
npm install
npm start
```

The app will be available at: http://localhost:3000

## ✨ Features
- 🔹 React functional components
- 🔹 React Router for navigation (Home, Detail)
- 🔹 CSS Modules & Global CSS
- 🔹 Movie component structure (likely fetches or displays movie info)
- 🔹 No backend server (static frontend only)

## 📦 Movie Component Overview
![image](https://github.com/user-attachments/assets/0df3f446-e0c8-46aa-a804-f6a119051568)

The `Movie.js` component is used to render a single movie item in the UI.  
It receives movie data as `props` and displays:

- Poster image
- Title (as a clickable link to `/movie/{id}`)
- Year of release
- Short summary (up to 235 characters)
- List of genres

It uses **CSS Modules** for scoped styling and **React Router's `<Link>`** for client-side navigation.

### Props:

| Prop       | Type                | Description                        |
|------------|---------------------|------------------------------------|
| `id`       | `number`            | Movie ID, used for routing         |
| `coverImg` | `string` (URL)      | Movie poster image                 |
| `title`    | `string`            | Movie title                        |
| `year`     | `string` or `number`| Release year                       |
| `summary`  | `string`            | Short plot summary                 |
| `genres`   | `string[]`          | List of genres                     |

> Example:  
> Clicking on a movie title navigates to `/movie/123`, where 123 is the `id` prop.

## 🔍 Detail Page Overview
![image](https://github.com/user-attachments/assets/036bf897-1408-4b31-8856-e9288c60b7f5)

The `Detail.js` component is a **dynamic route page** that displays detailed information about a specific movie.

### 🔧 How it works:

- Retrieves the `id` parameter from the URL using `useParams()`
- Fetches movie details from the [YTS API](https://yts.mx/api)
- Stores the fetched data in a `useState` hook
- Shows a loading message while fetching
- Once loaded, renders detailed movie info (title, summary, image, etc.)

### ✨ Technologies used:

- `useEffect()` – for performing the data fetch when component mounts
- `useState()` – for managing loading state and fetched data
- `fetch()` – for HTTP GET request to the YTS API
- `React Router` – for routing and URL parameter parsing

### 📌 Example API used:

```js
https://yts.mx/api/v2/movie_details.json?movie_id={id}
```

## 🧠 What I Practiced
- Component-based architecture
- Routing with React Router
- Passing props between components
- Styling with CSS Modules
- Page navigation using <Link>, <Route>, etc.

## 🛠 Tech Stack
- React (Create React App)
- JavaScript (ES6+)
- CSS Modules
- React Router (SPA)

## License
This project is for educational and personal practice only.
