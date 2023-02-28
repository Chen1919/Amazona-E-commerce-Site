import Alert from 'react-bootstrap/Alert';
//outputs error message 
export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}