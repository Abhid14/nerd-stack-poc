import { Movie } from "../../neo4j/ogm";
import { MovieType } from "../../neo4j/ogm/types";

export default async function Home() {
  const movies = await Movie.find();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>List of some movies in Neo4j</h1>
      <div className="grid grid-cols-2 gap-16">
        {movies.map((movie: MovieType) => (
          <div key={movie.title} className="bg-slate-100 p-8 rounded-lg">
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
