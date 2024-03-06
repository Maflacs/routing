import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

const PersonnelDetail = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState();
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  });

  if (error) {
    return <NotFound />;
  } else if (!person) {
    return (
      <div>
        <h3>Data Loading...</h3>
      </div>
    );
  } else {
    return (
      <div className="personWrapper">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img src={person?.avatar} alt="avatar" />
        <p>{person?.email}</p>
        <div className="btnWrapper">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }
};

export default PersonnelDetail;
