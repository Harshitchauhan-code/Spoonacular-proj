import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL, API_TOKEN } from "../../api";

function Recipie() {
  const [details, setDetails] = useState({});
  const [ingredidents, setIngredients] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchDetails = async (params) => {
    // console.log(params);
    // console.log(params.name);
    const data = await fetch(
      BASE_URL + `/recipes/${params.name}/information?apiKey=` + API_TOKEN
    );
    const detailData = await data.json();
    setDetails(detailData);
    setIngredients(detailData.extendedIngredients);
    // console.log(detailData);
    // console.log(detailData.extendedIngredients);
  };
  useEffect(() => {
    fetchDetails(params);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Summary & Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" ? (
          <div>
            {/* <h3>{details.summary}</h3> */}
            <br />
            <h2>Summary :</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <br />
            <br />
            <h2>Instructions :</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <div>
            <ul>
              {ingredidents.map((ingredident) => (
              <li key={ingredident.id}>{ingredident.original}</li>
              ))}
            </ul>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem, 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipie;
