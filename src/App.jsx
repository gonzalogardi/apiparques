import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [parques, setParques] = useState([]);
  useEffect(() => {
    fetch('http://www.ies-azarquiel.es/paco/apiparques/parques')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.parques);
        setParques(data.parques);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div class="container shadow">
        <main>
          <div class="row">
            {parques.map((parque) => {
              return (
                <div class="col-lg-4 col-md-6">
                  <div class="card">
                    <img class="card-img-top" src={parque.imagen} alt="" />
                    <div class="card-body">
                      <h4 class="card-title">{parque.nombre}</h4>
                      <div dangerouslySetInnerHTML={{ __html: parque.descripcion }} ></div>
                    </div>
                  </div>
                  </div>
                  );
            })}
              </div>
          </main >
      </div >
    </>
  )
}

export default App
