"use client"

import { useEffect, useState } from "react"

import LazyImage from "./lazy-image"

interface MovieCardProps {
  movie: {
    id: number
    title: string
    poster_path: string
    release_date: string
    vote_average: number
    overview: string
  }
  viewType: "list" | "grid"
}

export default function MovieCard({ movie, viewType }: MovieCardProps) {
  const [myList, setMyList] = useState<any[]>([])

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/movie-poster.jpg"

  const year = new Date(movie.release_date).getFullYear()
  const isInMyList = myList.some((m) => m.id === movie.id)

  useEffect(() => {
    const stored = localStorage.getItem("my-movie-list")
    if (stored) {
      setMyList(JSON.parse(stored))
    }
  }, [])

  return (
    <div
      className={`movie-card movie-card--${viewType}`}
      role="button"
      tabIndex={0}
    >
      <div className="movie-card__image-wrapper">
        <LazyImage
          src={posterUrl}
          alt={movie.title}
        />
      </div>

      <div className="movie-card__content">
        <h3 className="movie-card__title">{movie.title}</h3>
        <div className="movie-card__meta">
          <span className="movie-card__year">{year}</span>
          <span className="movie-card__rating">★ {movie.vote_average?.toFixed(1)}</span>
          {isInMyList ? <span className="movie-card__in-my-list">❤︎</span> : <></>}
        </div>
        {viewType === "list" && <h5 className="movie-card__sum">{movie.overview}</h5>}
      </div>

      {/* {isHovered && viewType === "list" && (
        <div className="movie-card__hover-indicator">Click for details</div>
      )} */}
    </div>
  )
}
