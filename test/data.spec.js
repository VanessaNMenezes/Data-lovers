import { sortDataByAthleteName , ascendingOrder, descendingOrder , filterData , filterCountry , filterGender , filterAge, filterMedal , filterSport , brazilMedals } from '../src/data.js'; 

describe("sortDataByAthleteName", () => { 
  const athletes = [
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => { 
    expect(typeof sortDataByAthleteName).toBe("function");
  });

  it("should sort athlete names in ascending order", () => { 

    const sorted = sortDataByAthleteName(athletes, "a-z"); 
    expect(sorted[0].name).toBe("Amanda Polk");
    expect(sorted[1].name).toBe("Bianca Farella");
    expect(sorted[2].name).toBe("Rafael Carlos da Silva"); 
  });

  it("should sort athlete names in descending order", () => { 
    const sorted = sortDataByAthleteName(athletes, "z-a"); 
    expect(sorted[0].name).toBe("Rafael Carlos da Silva");
    expect(sorted[1].name).toBe("Bianca Farella"); 
    expect(sorted[2].name).toBe("Amanda Polk");
  });
});

describe("ascendingOrder", () => {
  const athletes = [ 
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => {
    expect(typeof ascendingOrder).toBe("function");
  });

  it("should sort athlete names in ascending order", () => { 

    const sorted = ascendingOrder(athletes, "a-z"); 
    expect(sorted[0].name).toBe("Amanda Polk");
    expect(sorted[1].name).toBe("Bianca Farella");
    expect(sorted[2].name).toBe("Rafael Carlos da Silva");
  });
});

describe("descendingOrder", () => { 
  const athletes = [
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => {
    expect(typeof descendingOrder).toBe("function");
  });
  it("should sort athlete names in descending order", () => { 

    const sorted = descendingOrder(athletes, "z-a");
    expect(sorted[0].name).toBe("Rafael Carlos da Silva"); 
    expect(sorted[1].name).toBe("Bianca Farella");
    expect(sorted[2].name).toBe("Amanda Polk");
  });
});

const examplesAthletes = [ 

  {
    "name": "Rafael Carlos da Silva",
    "gender": "M",
    "sport": "Judo",
    "team": "Brazil",
    "age": 29,
    "medal": "Bronze"
  },
  {
    "name": "Amanda Polk",
    "gender": "F",
    "sport": "Rowing",
    "team": "United States",
    "age": 30,
    "medal": "Gold"
  },
  {
    "name": "Bianca Farella",
    "gender": "F",
    "sport": "Rugby Sevens",
    "team": "Canada",
    "age": 24,
    "medal": "Bronze"
  },
]

describe("filterData", () => { 

  it("should be a function", () => { 
    expect(typeof filterData).toBe("function");
  })
});

 
describe("filterCountry", () => { 

  it("should be a function", () => { 
    expect(typeof filterCountry).toBe("function"); 
  })

  it("should filter the selected country", () => { 
    const team = "Brazil";
    expect(filterCountry(examplesAthletes, team)[0].team).toBe("Brazil"); 
  })
});


describe ("filterGender" , () => { 

  it ("should be a function" , () => {
    expect(typeof filterGender).toBe("function");
  })

  it ("should filter the selected gender" , () => { 
    const gender = "F";
    expect(filterGender(examplesAthletes, gender)[1].gender).toBe("F"); 
  })
});

describe("filterAge" , () => { 

  it ("should be a function" , () => {
    expect(typeof filterAge).toBe("function"); 
  })

  it("must filter by selected age group" , () => {
    const age = "25-30";  
    const filteredAge = filterAge(examplesAthletes, age);
    expect(filteredAge.every(({ age }) => age >= 25 && age <= 30)).toBe(true);
  }) 
});

describe("filterMedal" , () => { 

  it ("should be a function" , () => { 
    expect(typeof filterMedal).toBe("function"); 
  })

  it("should filter the selected medal" , () => { 
    const medal = "Bronze"; 
    expect(filterMedal(examplesAthletes, medal)[2].medal).toBe("Bronze");
  }) 
});


describe("filterSport" , () => { 

  it ("should be a function" , () => { 
    expect(typeof filterSport).toBe("function"); 
  })

  it("should filter the selected modality" , () => { 
    const sport = "Judo";
    expect(filterSport(examplesAthletes, sport)[0].sport).toBe("Judo"); 
  }) 
});

describe("brazilMedals" , () => { 

  it ("should be a function" , () => { 
    expect(typeof brazilMedals).toBe("function"); 
  })
  
  it("calculate the medalists of Brazil", () => {
    const medalBrazil = brazilMedals(examplesAthletes, "medal","Brazil"); 
    expect(medalBrazil).toBe[0];
  }) 
});