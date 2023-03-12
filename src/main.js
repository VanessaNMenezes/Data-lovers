import { filterCountry , sortDataByAthleteName , brazilMedals } from './data.js';
import data from './data/athletes/athletes.js';

const chooseCountry = document.getElementById("selectCountry");
const chooseOrder = document.getElementById("selectOrder");
const endButton = document.getElementById("okButton");
const selectAllOptions = document.getElementById("selectTheOptions1");
const calculationOfBrazilianMedalists = document.querySelector("#aggregateCalculation"); 
const tableCreated = document.getElementById("tableFilter");

const percentageBrazil = (brazilMedals(data.athletes , "team" , "Brazil"));
calculationOfBrazilianMedalists.innerHTML = ` “Em 2016, A porcentagem total de atletas medalhistas brasileiros foi de ${percentageBrazil} % ” `

const countriesArray = []; 
data.athletes.forEach(function(athlete) {
  if (!countriesArray.includes(athlete.team)) { 
    countriesArray.push(athlete.team);
  }
});
countriesArray.sort(); 
countriesArray.forEach(function(team) { 
  const option = document.createElement("option"); 
  option.value = team; 
  option.text = team; 
  chooseCountry.appendChild(option);
});

endButton.addEventListener("click", () => {
  const selectedOrder = chooseOrder.value; 
  const selectedTeam = chooseCountry.value; 

  if (selectedOrder === "" || selectedTeam === "") {
    selectAllOptions.innerHTML = "⚠️ Por favor, selecione todas as opções antes de clicar em OK";
  } else {
    generateTableByCountry(selectedTeam, selectedOrder);
  }
});

function generateTableByCountry(teamName , order) {
        
  const filterDataCountry = filterCountry(data.athletes, "team", teamName);
  const sortedCountry = sortDataByAthleteName (filterDataCountry , order); 

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
       ${sortedCountry.map((athlete) => ` 
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