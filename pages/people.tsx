import Artist from "@/components/Artist";
import Header from "@/components/Header";
import { people } from "@/typings";
import React from "react";

interface Props {
  people: people[];
}

const people = ({ people }: Props) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-14">
        <h1 className="text-2xl ml-4">All People</h1>
        {<Artist people={people} />}
      </div>
    </>
  );
};

export default people;

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  const allPeople = data.results;

  return {
    props: {
      people: allPeople,
    },
  };
};
