import React, { useEffect, useState } from "react";
import "./App.css";
import { useGetPokemonByNameQuery } from "./redux/services/pokemonApi";

const App = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div className="card">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.species.name}
          />
          <h3>{data.species.name}</h3>
        </>
      ) : null}
    </div>
  );
};

export default App;
