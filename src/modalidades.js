import { filterSport , filterMedal , sortDataByAthleteName } from './data.js';

import data from './data/athletes/athletes.js';

const chooseMedal = document.getElementById("selectMedal");
const chooseSport = document.getElementById("selectSport");
const chooseOrder = document.getElementById("selectOrder");
const endButton = document.getElementById("okButton3");
const selectAllOptions = document.getElementById("selectTheOptions3");
const tableCreated = document.getElementById("tableFilter");

const sportsArray = []; 
data.athletes.forEach(function(athlete) { 
  if (!sportsArray.includes(athlete.sport)) {
    sportsArray.push(athlete.sport);
  }
});
sportsArray.sort(); 
sportsArray.forEach(function(sport) { 
  const option = document.createElement("option"); 
  option.value = sport; 
  option.text = sport; 
  chooseSport.appendChild(option);
});

endButton.addEventListener("click", () => {
  const selectedOrder = chooseOrder.value; 
  const selectedMedal = chooseMedal.value; 
  const selectedSport  =  chooseSport.value;

  if (selectedOrder === "" || selectedMedal === ""  || selectedSport === "") {
    selectAllOptions.innerHTML = "⚠️ Por favor, selecione todas as opções antes de clicar em OK";
  } else {
    generateTableBySport(selectedSport , selectedMedal , selectedOrder);
  }
});

function generateTableBySport(sportName , medalName , order) {

  const filterDataMedal = filterMedal(data.athletes, "medal", medalName);
  const filterDataSport = filterSport(filterDataMedal, "sport", sportName); 
  const sortedMedalAndSport = sortDataByAthleteName (filterDataSport, order); 
    
  tableCreated.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Gênero</th>
          <th>Altura</th>
          <th>Peso</th>
          <th>Esporte</th>
          <th>País</th>
          <th>Sigla</th>
          <th>Idade</th>
          <th>Evento</th>
          <th>Medalha</th>
        </tr>
      </thead>
      <tbody>
       ${sortedMedalAndSport.map((athlete) => ` 
          <tr>
            <td>${athlete.name}</td>
            <td>${athlete.gender}</td>
            <td>${athlete.height}</td>
            <td>${athlete.weight}</td>
            <td>${athlete.sport}</td>
            <td>${athlete.team}</td>
            <td>${athlete.noc}</td>
            <td>${athlete.age}</td>
            <td>${athlete.event}</td>
            <td>${athlete.medal}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}