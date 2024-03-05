import { useParams, useLocation } from "react-router-dom";

const PersonnelDetail = () => {
  const {id} = useParams();
  const {state} = useLocation();
  return (
    <div>PersonnelDetail</div>
  );
};

export default PersonnelDetail;