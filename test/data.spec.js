import { sortDataByAthleteName , ascendingOrder, descendingOrder , filterData , filterCountry , filterGender , filterAge, filterMedal , filterSport , brazilMedals } from '../src/data.js'; // Importa as funções que serão testadas.

// verifica se a função "sortDataByAthleteName" é uma função, e testa se ela classifica corretamente os nomes dos atletas em ordem crescente e decrescente:
describe("sortDataByAthleteName", () => { // DESCRIÇÃO, com o nome da função
  const athletes = [ // Cria variável que usa um conjunto de dados de exemplo, que inclui três objetos com o campo "name" preenchido:
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => { // ISSO, diz o que é. Neste caso, "deveria ser uma função".
    expect(typeof sortDataByAthleteName).toBe("function"); // É ESPERADO, que o tipo de "sortDataByAthleteName" SEJA uma função.
  });

  it("should sort athlete names in ascending order", () => { // ISSO, verifica se a classificação em ordem crescente está correta.

    const sorted = sortDataByAthleteName(athletes, "a-z"); //Cria variável para receber a função descrita, o array de athletes e a ordenação de A-Z
    expect(sorted[0].name).toBe("Amanda Polk"); // É ESPERADO, que a 1ª posição do array athletes, SEJA o nome que começa com a letra "A".
    expect(sorted[1].name).toBe("Bianca Farella"); // É ESPERADO, que a 2ª posição do array athletes, SEJA o nome que começa com a letra "B".
    expect(sorted[2].name).toBe("Rafael Carlos da Silva"); //É ESPERADO, que a 3ª posição do array athletes, SEJA o nome que começa com a letra "R"
  });

  it("should sort athlete names in descending order", () => { // ISSO, verifica se a classificação em ordem decrescente está correta.

    const sorted = sortDataByAthleteName(athletes, "z-a"); // Reatríbui a variável acima, para receber a função descrita, mas com ordenação de Z-A
    expect(sorted[0].name).toBe("Rafael Carlos da Silva"); //É ESPERADO, que a 1ª posição do array athletes, SEJA o nome que começa com a letra "R"
    expect(sorted[1].name).toBe("Bianca Farella"); // É ESPERADO, que a 2ª posição do array athletes, SEJA o nome que começa com a letra "B".
    expect(sorted[2].name).toBe("Amanda Polk"); // É ESPERADO, que a 3ª posição do array athletes, SEJA o nome que começa com a letra "A".
  });
});

describe("ascendingOrder", () => { // DESCRIÇÃO, com o nome da função
  const athletes = [ // Cria variável que usa um conjunto de dados de exemplo, que inclui três objetos com o campo "name" preenchido:
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => { // ISSO, diz o que é. Neste caso, "deveria ser uma função".
    expect(typeof ascendingOrder).toBe("function"); // É ESPERADO, que o tipo de "ascendingOrder" SEJA uma função.
  });

  it("should sort athlete names in ascending order", () => { // ISSO, verifica se a classificação em ordem crescente está correta.

    const sorted = ascendingOrder(athletes, "a-z"); //Cria variável para receber a função descrita, o array de athletes e a ordenação de A-Z
    expect(sorted[0].name).toBe("Amanda Polk"); // É ESPERADO, que a 1ª posição do array athletes, SEJA o nome que começa com a letra "A".
    expect(sorted[1].name).toBe("Bianca Farella"); // É ESPERADO, que a 2ª posição do array athletes, SEJA o nome que começa com a letra "B".
    expect(sorted[2].name).toBe("Rafael Carlos da Silva"); //É ESPERADO, que a 3ª posição do array athletes, SEJA o nome que começa com a letra "R"
  });
});

describe("descendingOrder", () => { // DESCRIÇÃO, com o nome da função
  const athletes = [ // Cria variável que usa um conjunto de dados de exemplo, que inclui três objetos com o campo "name" preenchido:
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => { // ISSO, diz o que é. Neste caso, "deveria ser uma função".
    expect(typeof descendingOrder).toBe("function"); // É ESPERADO, que o tipo de "sdescendingOrder" SEJA uma função.
  });
  it("should sort athlete names in descending order", () => { // ISSO, verifica se a classificação em ordem decrescente está correta.

    const sorted = descendingOrder(athletes, "z-a"); // Reatríbui a variável acima, para receber a função descrita, mas com ordenação de Z-A
    expect(sorted[0].name).toBe("Rafael Carlos da Silva"); //É ESPERADO, que a 1ª posição do array athletes, SEJA o nome que começa com a letra "R"
    expect(sorted[1].name).toBe("Bianca Farella"); // É ESPERADO, que a 2ª posição do array athletes, SEJA o nome que começa com a letra "B".
    expect(sorted[2].name).toBe("Amanda Polk"); // É ESPERADO, que a 3ª posição do array athletes, SEJA o nome que começa com a letra "A".
  });
});

const examplesAthletes = [ // Cria array para usar de exemplo nos testes de filtros, pegando do banco de dados.

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

describe("filterData", () => { // DESCRIÇÃO, com o nome da função.  

  it("should be a function", () => { // ISSO, deveria ser uma função.

    expect(typeof filterData).toBe("function"); // É ESPERADO, que o tipo de "filterData", SEJA uma função.
  })
});

// Verifica se a função "filterCountry" é uma função, e testa se ela FILTRA corretamente os nomes dos países selecionados:
 
describe("filterCountry", () => { // DESCRIÇÃO, com o nome da função.  

  it("should be a function", () => { // ISSO, deveria ser uma função.

    expect(typeof filterCountry).toBe("function"); // É ESPERADO, que o tipo de "filterCountry", SEJA uma função.
  })

  // EXEMPLO:
  it("should filter the selected country", () => { // ISSO, deveria filtrar o país selecionado. 

    //const teamFilter = filterCountry(examplesAthletes, "team", "Brazil")
     
    const team = "Brazil"; // Cria variável team (país), que recebe o exemplo "Brazil".
    
    expect(filterCountry(examplesAthletes, team)[0].team).toBe("Brazil"); // É ESPERADO, que "filterCountry" receba o arrray de exemplo, com a variável "team", que recebe o valor "Brazil". O [0].team verifica se o primeiro objeto retornado pela função "filterCountry" tem a propriedade "team" igual a "Brazil". Então, É ESPERADO que SEJA Brazil.

  })
});

// Verifica se a função "filterGender" é uma função, e testa se ela FILTRA corretamente os genêros selecionados:

describe ("filterGender" , () => { // DESCRIÇÃO, com o nome da função.  

  it ("should be a function" , () => { // ISSO, deveria ser uma função.

    expect(typeof filterGender).toBe("function"); // É ESPERADO, que o tipo de "filterGender", SEJA uma função.
  })

  // EXEMPLO:
  it ("should filter the selected gender" , () => { // ISSO, deveria filtrar o genêro selecionado. 

    const gender = "F";  // Cria variável gender (genêro), que recebe o exemplo "F".

    expect(filterGender(examplesAthletes, gender)[1].gender).toBe("F"); // É ESPERADO, que "filterGender" receba o arrray de exemplo, com a variável "gender", que recebe o valor "F". O [1].gender verifica se o segundo objeto retornado pela função "filterGender" tem a propriedade "gender" igual a "F". Então, É ESPERADO que SEJA F. 
  })
});


// Verifica se a função "filterAge" é uma função, e testa se ela FILTRA corretamente as idades selecionadas:

describe("filterAge" , () => { // DESCRIÇÃO, com o nome da função.  

  it ("should be a function" , () => { // ISSO, deveria ser uma função.

    expect(typeof filterAge).toBe("function"); // É ESPERADO, que o tipo de "filterAge", SEJA uma função.
  })
  // EXEMPLO:
  it("must filter by selected age group" , () => { // ISSO, deveria filtrar a idade selecionada. 
   
    const age = "25-30";  // Cria variável age (idade), que recebe o exemplo 30.  VERIFICAR SE DEVE SER 30 ou 25-30.

    //expect(filterAge(examplesAthletes, age)[1].age).toBe("25-30"); 
    expect(filterAge(examplesAthletes, age).age).toBe("25-30");
    expect(age).toBe("25-30");
  }) 
});

// Verifica se a função "filterMedal" é uma função, e testa se ela FILTRA corretamente as medalhas selecionadas:

describe("filterMedal" , () => { // DESCRIÇÃO, com o nome da função.  

  it ("should be a function" , () => { // ISSO, deveria ser uma função.
   
    expect(typeof filterMedal).toBe("function"); // É ESPERADO, que o tipo de "filterMedal", SEJA uma função.
  })
  // EXEMPLO:
  it("should filter the selected medal" , () => { // ISSO, deveria filtrar a medalha selecionada. 
   
    const medal = "Bronze"; // Cria variável medal (medalha), que recebe o exemplo "Bronze". 
    
    expect(filterMedal(examplesAthletes, medal)[2].medal).toBe("Bronze"); // É ESPERADO, que "filterMedal" receba o arrray de exemplo, com a variável "medal", que recebe o valor "Bronze". O [2].medal verifica se o terceiro objeto retornado pela função "filterMedal" tem a propriedade "medal" igual a "Bronze". Então, É ESPERADO que SEJA Bronze.
  }) 
});

// Verifica se a função "filterSport" é uma função, e testa se ela FILTRA corretamente as modalidades selecionadas:

describe("filterSport" , () => { // DESCRIÇÃO, com o nome da função.  

  it ("should be a function" , () => { // ISSO, deveria ser uma função.
  
    expect(typeof filterSport).toBe("function"); // É ESPERADO, que o tipo de "filterSport", SEJA uma função.
  })
  // EXEMPLO:
  it("should filter the selected modality" , () => { // ISSO, deveria filtrar a modalidade selecionada. 
  
    const sport = "Judo"; // Cria variável sport (esporte/modalidade), que recebe o exemplo "Judo". 
   
    expect(filterSport(examplesAthletes, sport)[0].sport).toBe("Judo"); // É ESPERADO, que "filterSport" receba o arrray de exemplo, com a variável "sport", que recebe o valor "Judo". O [0].sport verifica se o primeiro objeto retornado pela função "filterSport" tem a propriedade "sport" igual a "Judo". Então, É ESPERADO que SEJA Judo.
  }) 
});

describe("brazilMedals" , () => { // DESCRIÇÃO, com o nome da função.  

  it ("should be a function" , () => { // ISSO, deveria ser uma função.
  
    expect(typeof brazilMedals).toBe("function"); // É ESPERADO, que o tipo de "brazilMedals", SEJA uma função.
  })
  // EXEMPLO:
  
  it("calculate the medalists of Brazil", () => {

    const medalBrazil = brazilMedals(examplesAthletes, "medal","Brazil"); // Cria variável medalBrazil, que recebe o exemplo "medal" e "Brazil". 
    expect(medalBrazil).toBe[0]; // É ESPERADO, que "medalBrazil" seja a primeira posição do array de exemplo. O toBe.[0] verifica se o primeiro objeto retornado pela função "medalBrazil" tem a propriedade "medal" e "Brazil".
  }) 
});
//toBe compara se os objetos são exatamente iguais, enquanto o toEqual compara se os objetos têm os mesmos valores, independentemente das referências de memória.
// toBe compara os valores e os tipos dos valores, enquanto toEqual compara apenas os valores. 