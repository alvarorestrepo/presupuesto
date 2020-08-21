import React, {Fragment} from 'react';

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form action="">
                <input
                 type="number" 
                 className="u-full-width" 
                 placeholder='Coloca tu presupuesto'/>
            </form>
        </Fragment>

     );
}
 
export default Pregunta;