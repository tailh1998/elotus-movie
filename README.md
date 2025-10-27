# Elotus Movies [[Link Demo]](https://elotus-movie.vercel.app/)

A web-based movie browsing application that allows users to explore and search for movies using **The Movie Database** (TMDB) API. Users can view movies in either grid or list layout, switch seamlessly between the two, and see detailed information for each movie including posters, release dates, ratings, genres, and overviews.

![Elotus Movies Screenshot](/public/images/grid.png)

## 📦 Features

- **Lazy Load Images**: Movie posters are loaded efficiently as users scroll, improving performance
- **Tabs for Now Playing & Top Rated & My List**: Easily navigate between currently playing movies and top-rated movies
- **Grid/List View**: Switch seamlessly between grid and list layouts for browsing movies
- **Pagination**: Browse through large sets of movies with smooth pagination controls
- **View Detail**: Click on any movie to see detailed information including poster, genres, rating, overview and add to my list
- **Search Function**: Quickly find movies by typing keywords; search results appear instantly in a dropdown for easy selection

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: SCSS
- **API**: [The Movie Database (TMDB) API](https://api.themoviedb.org/3)
- **State Management**: React Hooks
- **Data Storage**: Stores favorite movies in `localStorage`.

## ▶️ Getting Started

### 💼 Prerequisites

- Please use the Node version specified in the `.nvmrc` file.
- Please create a `.env` file based on the `.env.example` file. **[TMDB API Setup Guide](#tmdb-api-integration-guide)**
- Node.js `v20.17.0` or later
- yarn `v1.22.21`

### 💾 Installation

- Clone the repository:

```bash
git clone https://github.com/tailh1998/elotus-movie.git
cd elotus-movie
```

- Install dependencies:

```bash
yarn install
# or
yarn
```

- Start the `development` server:

```bash
yarn dev
```

- If you want to run the project using `Docker`:

```bash
docker-compose up
```

- Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Browsing Movies

1. Navigate to the homepage to see the list of movies.
2. Use the **Tabs** to switch between "Now Playing" and "Top Rated" movies.
3. Switch between **Grid** and **List** views using the toggle button icon on the right.
4. Scroll down to load more movies with **Pagination**.

### Searching for Movies

1. Type a movie title into the **Search Bar**.
2. Select a movie from the dropdown list of search results.
3. Click on a movie to view its **detailed information** including poster, genres, rating, release year, and overview.

### Viewing Movie Details

1. Click on any movie from the homepage or search results.
2. Review detailed information about the movie.
3. Use the **Back** button to return to the previous page.
4. Use the **"Add to My List"** button to save the movie locally.
   - The button will toggle between `"Add to My List"` and `"✓ In My List"` depending on whether the movie is already saved.
   - Movies added to your list are stored in **localStorage**, so you can access them later even after refreshing the page.

## Project Structure

```.
movies-app/
├── app/                                 # Next.js App Router
│   ├── (movies)/
│   │   ├── (list)/
│   │   │   ├── now-playing/             # Now Playing tab
│   │   │   ├── top-rated/               # Top Rated tab
│   │   │   ├── my-list/                 # My Favorite List tab
│   │   │   └── layout.tsx               # Layout for 2 pages above
│   ├── movie/                           # Movie detail pages
│   │   ├── [id]/                        # Dynamic movie ID pages
│   │   │   ├── not-found/               # Not Found page for missing movie
│   │   │   ├── page.tsx                 # Movie detail page
│   │   └── page.tsx                     # fallback detail page
│   ├── api/                             # Backend API routes
│   │   └── movies/
│   │       │── [id]/
│   │       │   └── route.ts             # Movie detail API
│   │       └── search/
│   │           └── route.ts             # Search route
│   ├── error.tsx                        # Global error page
│   ├── global.scss                      # Global styles
│   ├── layout.tsx                       # Root layout
│   ├── not-found.tsx                    # Global 404 page
│   └── page.tsx                         # Home page
├── components/
│   ├── client-layout.tsx
│   ├── error-state.tsx
│   ├── lazy-image.tsx
│   ├── loading-state.tsx
│   ├── movie-card.tsx
│   ├── movie-details.tsx
│   ├── pagination.tsx
│   ├── search-bar.tsx
│   └── view-toggle.tsx
└── public/
```

## TMDB API Integration Guide

### 1. Get an API Key

1. Sign up at [TMDB](https://www.themoviedb.org/settings/api).
2. Go to **Settings → API** and apply for a key.
3. Copy the **API Key (v3 auth)**.

### 2. Add API Key to Environment

Create a `.env` file:

```bash
NEXT_PUBLIC_THE_MOVIE_DB_API_KEY=your-api-key
NEXT_PUBLIC_THE_MOVIE_DB_API_URL=https://api.themoviedb.org/3
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [SCSS](https://github.com/sass/sass) - CSS Preprocessor
- [TMDB API](https://www.themoviedb.org/settings/api) - The Movie Database
