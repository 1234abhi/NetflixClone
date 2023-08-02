import { baseUrl } from "@/constants/movie";
import { people } from "@/typings";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  people: people[];
}

const Artist = ({ people }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedResult, setSearchedResult] = useState<people[]>(people);

  useEffect(() => {
    const searchArtist = async () => {
      if (searchText) {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/person?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchText}&include_adult=false&language=en-US&page=1`
        );
        const data = await res.json();
        setSearchedResult(data?.results);
        console.log(data?.results);
      } else {
        setSearchedResult(people);
      }
    };
  }, [searchText]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[400px] p-1 border border-gray-300 rounded text-black "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8">
        {searchedResult?.map((singlePeople) => (
          <div
            key={singlePeople.id}
            className="bg-white rounded-lg items-center shadow-md overflow-hidden flex flex-col"
          >
            <div className="flex justify-center">
              <Image
                src={`${baseUrl}${singlePeople?.profile_path}`}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-black font-semibold mb-2">
                {singlePeople.name}
              </h3>
              <p className="text-gray-600">
                {singlePeople.known_for_department}
              </p>
              <p className="text-gray-600">
                {singlePeople.gender === 1 ? "Female" : "Male"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
