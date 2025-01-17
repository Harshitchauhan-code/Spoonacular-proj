import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL, API_TOKEN } from "../../api";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    // console.log(name)
    const data = await fetch(
      BASE_URL +
        `/recipes/complexSearch?apiKey=` +
        API_TOKEN +
        `&query=${name}&number=10`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Link to={"/recipie/" + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
