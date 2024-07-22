import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();
  // Fetch and display booking details based on id
  return (
    <div>
      <h1>Booking Page for ID: {id}</h1>
    </div>
  );
};

export default BookingPage;
