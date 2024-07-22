import { useParams } from "react-router-dom";

const PropertyPage = () => {
  const { id } = useParams();
  // Fetch and display property details based on id
  return (
    <div>
      <h1>Property Page for ID: {id}</h1>
    </div>
  );
};

export default PropertyPage;
