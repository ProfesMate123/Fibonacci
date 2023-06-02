export const searchBooking = async () => {
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

  let serverResponse = await fetch(URL, REQUEST);
  let data = await serverResponse.json();
  return data;
};
