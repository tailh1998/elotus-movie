"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import MovieCard from "@/components/movie-card"

export default function MyListPage() {
  const searchParams = useSearchParams()
  const viewType = (searchParams.get("view") as "list" | "grid") || "grid"
  const [myList, setMyList] = useState<any[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("my-movie-list")
    if (stored) {
      setMyList(JSON.parse(stored))
    }
  }, [])

  return (
    <div className={`movie-list movie-list--${viewType}`}>
      {myList.map((movie) => (
        <Link
          key={movie.id}
          href={`/movie/${movie.id}`}
          className="movie-card-link"
        >
          <MovieCard
            movie={movie}
            viewType={viewType}
          />
        </Link>
      ))}
    </div>
  )
}
