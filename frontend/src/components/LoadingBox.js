import Spinner from 'react-bootstrap/Spinner';
//renders loading spinner on web page for when connection is slow
export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}