const url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";
const getData = async () => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};
const createtable = async () => {
  const data = await getData();
//   console.log(data);
data.sort((a,b)=>b.NRR-a.NRR)
  const parent = document.getElementById("table");
  for (let i = 0; i < data.length; i++) {
    const newRow = document.createElement("tr");

    //s.no
    const d0 = document.createElement("td");
    d0.innerText = data[i].No;
    //matches
    const d1 = document.createElement("td");
    d1.innerText = data[i].Matches;
    //Won
    const d2 = document.createElement("td");
    d2.innerText = i+1;
    //Lost
    const d3 = document.createElement("td");
    d3.innerText = data[i].Lost;
    //Points
    const d4 = document.createElement("td");
    d4.innerText = data[i].Lost;
    //NRR
    const d5 = document.createElement("td");
    d5.innerText = data[i].NRR;

    //add to row
    newRow.appendChild(d0);
    newRow.appendChild(d1);
    newRow.appendChild(d2);
    newRow.appendChild(d3);
    newRow.appendChild(d4);
    newRow.appendChild(d5);

    

    // add to table
    parent.appendChild(newRow);
  }
};
createtable();
