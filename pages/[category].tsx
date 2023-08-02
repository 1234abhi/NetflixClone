import Filter from "@/components/Filter";
import Header from "@/components/Header";
import { Movie } from "@/typings";
import requests from "@/utils/requests";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface CategoryProps {
  movies: Movie[];
}

export const Category = ({ movies }: CategoryProps) => {
  const router = useRouter();
  const heading = router?.query?.category
    ?.toString()
    .toUpperCase()
    .replace("-", " ");

  return (
    <div className="mt-14">
      <Header />
      <h1 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {heading}
      </h1>
      <div className="flex items-center space-x-0.5 overflow-y-scroll scrollbar-hide md:space-x-2.5 md:p-2">
        {/* {movies?.map((movie) => (
          <Filter key={movie.id} movie={movie} />
        ))} */}
        <Filter movies={movies} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<CategoryProps> = async (
  context
) => {
  const category = context.params?.category as string;
  let movies: Movie[] = [];

  if (category === "trending-now") {
    const res = await fetch(requests.fetchTrending);
    const data = await res.json();
    movies = data.results;
  } else if (category === "top-rated") {
    const res = await fetch(requests.fetchTopRated);
    const data = await res.json();
    movies = data.results;
  } else if (category === "action-thrillers") {
    const res = await fetch(requests.fetchActionMovies);
    const data = await res.json();
    movies = data.results;
  } else if (category === "comedies") {
    const res = await fetch(requests.fetchComedyMovies);
    const data = await res.json();
    movies = data.results;
  } else if (category === "scary-movies") {
    const res = await fetch(requests.fetchHorrorMovies);
    const data = await res.json();
    movies = data.results;
  } else if (category === "romance-movies") {
    const res = await fetch(requests.fetchRomanceMovies);
    const data = await res.json();
    movies = data.results;
  } else if (category === "documentaries") {
    const res = await fetch(requests.fetchDocumentaries);
    const data = await res.json();
    movies = data.results;
  }

  return {
    props: {
      movies: movies,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Define the possible dynamic values for the [category] parameter
  const categories = [
    "trending-now",
    "top-rated",
    "action-thrillers",
    "comedies",
    "scary-movies",
    "romance-movies",
    "documentaries",
  ];

  // Generate the paths using the dynamic values
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

export default Category;
