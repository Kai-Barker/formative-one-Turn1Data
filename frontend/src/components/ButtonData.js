import Button from 'react-bootstrap/Button';

function Driverconstructor() {
  return (
    <>
        <div className='d-flex gap-3' style={{fontFamily:'Racing Sans One'}}>
            <Button style={{color:'white', textDecorationLine:'underline', background:'none', border: 'none', fontSize:'28px'}}>Driver</Button>
            <Button style={{color:'white', background:'none', border: 'none', fontSize:'28px'}}>Constructor</Button>
        </div>
    </>
  );
}

export default Driverconstructor;