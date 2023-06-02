export async function booking(data) {
  const URI = 'http://pruegaapi20231.vercel.app/reservas';
  const REQUEST = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  let response = await fetch(URI, REQUEST);
  response = await response.json();
  return response;
}
