export async function getShipments() {
  const res = await fetch("http://localhost:3000/shipments");
  const data = await res.json();

  return data;
}




export async function getDocuments() {
  const res = await fetch("http://localhost:3000/documents");
  const data = await res.json();

  return data;
}


export async function getLocations() {
  const res = await fetch("http://localhost:3000/locations");
  const data = await res.json();

  return data;
}