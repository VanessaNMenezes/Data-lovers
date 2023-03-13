export function sortDataByAthleteName(athletes , order) {
  const sorted = [...athletes];
  sorted.sort((a, b) => a.name.localeCompare(b.name))
  if (order === "a-z" ) {
    return sorted
  } else {
    return sorted.reverse()
  }
}

export function filterData(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export const ascendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    else {
      return -1;
    }
  })
  return order;
}

export const descendingOrder = (data) => {
  return ascendingOrder(data).reverse()
}

export function filterCountry(dataArray, key, value) {
  return dataArray.filter(item => item[key] === value); 
}

export function filterGender(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export function filterAge (data, range) {
  const idades =   range.split("-")
  const min = Number(idades[0])
  const max = Number(idades[1])
  const grupo1 = data.filter(({ age }) => age  >= min && age <= max );
  return grupo1;
} 

export function filterMedal(dataArray, key, value) {
  return dataArray.filter(item => item[key] === value);
}

export function filterSport(dataArray, key, value) {
  return dataArray.filter(item => item[key] === value);
}

export function brazilMedals (dataArray, key, value) { 

  const totalMedals = dataArray.length;
  
  const medalsOnlyFromBrazil = dataArray.reduce((acc, item) => { 

    if (item[key] === value) { 
      return acc + 1; 
    }
    return acc;  
  }, 0);

  return Number((medalsOnlyFromBrazil * 100 / totalMedals).toFixed(2)); 
}