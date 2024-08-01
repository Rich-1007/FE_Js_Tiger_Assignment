export async function getShipments() {
  const res = await fetch("https://be-js-tiger-assignment.onrender.com/shipments");
  const data = await res.json();

  return data;
}




export async function getDocuments() {
  const res = await fetch("https://be-js-tiger-assignment.onrender.com/documents");
  const data = await res.json();

  return data;
}


export async function getLocations() {
  const res = await fetch("https://be-js-tiger-assignment.onrender.com/locations");
  const data = await res.json();

  return data;
}