export async function searchBooking (){
  //1 service url

  const URL = 'http://pruegaapi20231.vercel.app/buscarReservas';

  //2 configure request
  const REQUEST = {
    method: 'GET', // Get Post Put Delete
    //header: {}, // Control Data ****
    //body: '',
  };

  // 3 communicate with the backend
  //Fetch

  let respuesta = await fetch(URL, REQUEST);
  let datosConsultados = await respuesta.json();
  return datosConsultados;
};
