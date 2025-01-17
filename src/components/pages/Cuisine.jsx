import styled from "styled-components";
import {motion} from "framer-motion"
import { Link, useParams } from "react-router-dom"; //useParams allows us to pull keyword from url
import { API_TOKEN, BASE_URL } from "../../api";
import { useEffect, useState } from "react";


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    // console.log(name)
    const data = await fetch(
      BASE_URL +
        `/recipes/complexSearch?apiKey=` +
        API_TOKEN +
        `&cuisine=${name}&number=10`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    // getCuisine("italian")
    getCuisine(params.type);
    // console.log(params);
    // console.log(params.type);
  }, [params.type]);

  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipie/" + item.id } >
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
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

export default Cuisine;

{
  /* 

<Route path="/cuisine/:type" element={ <Cuisine />} />

/cuisine/:type tha is lia params.type lia hai 
/cuisine/:Anything hota toh params.Anything lete


*/
}
