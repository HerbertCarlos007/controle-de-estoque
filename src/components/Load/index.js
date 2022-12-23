import Spinner from 'react-bootstrap/Spinner';
import './style.css'

export const Load = () => {
  return (
    <div className='container-load'>
      <Spinner className='load' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
