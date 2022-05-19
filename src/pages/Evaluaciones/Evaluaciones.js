import React, { Fragment } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBInput } from "mdbreact";
import Menu from '../../components/Menu/Menu';

const Evaluaciones = () => {

  return (
    <div>
      <Menu />

      <div className='container'>
        <Fragment>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">Se esfuerza por conocer y resolver las necesidades de los clientes, <br/>
        demuestra iniciativas para desarrollar excelentes  relaciones con clientes internos y externos.<br/>
         Logra la satisfacción de las necesidades del cliente de forma acertada y oportuna ofreciendo valor <br/>
         agregado y un balance costo-beneficio.</label>
      <MDBInput type="textarea" />
      </div>
    </Fragment>
      </div>


    </div>
  );
}

export default Evaluaciones;