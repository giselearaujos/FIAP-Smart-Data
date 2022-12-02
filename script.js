const text = `
    ->1 - Roteiros para *São Paulo*<br>
    A Terra da Garoa!<br>
    Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>
    #Roteiro A | Região: Avenida Paulista<br>
    MASP; Parque Trianon; Rua Augusta<br>
    #Roteiro B | Região: Centro<br>
    Catedral da Sé; Pátio do Colégio; Rua Augusta<br>
    #Roteiro C | Região: Vila Madalena<br>
    Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br>
    ->2 - Roteiros para *Las Vegas*<br>
    Viva Las Vegas!<br>
    A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>
    #Roteiro A | Região: Las Vegas Boulevard South<br>
    Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>
    #Roteiro B | Região: Downtown<br>
    Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado;<br>
    #Roteiro C | Região: Las Vegas Boulevard North<br>
    Outlet Premium North; Stratosphere; Apple Fashion Show<br>
    ->3 - Roteiros para *Moscou*<br>
    Privet!<br>
    A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>
    #Roteiro A | Região: Praça Vermelha<br>
    Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>
    #Roteiro B | Região: Centro<br>
    Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>
    #Roteiro C | Região: Obras pela cidade<br>
    Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station<br>
  `;

const index = text.split("->");

const nameCity = () => {
  let nameCity = 0;
  const array = [];
  for (i = 1; i < index.length; i++) {
    nameCity = index[i].split("*")[1];
    array.push(nameCity);
  }
  const result = array.join(" - ");

  return result;
};

const roadMap = () => {
  let roadMap = 0;
  const array = [];
  for (i = 1; i < index.length; i++) {
    roadMap = index[i].split("#")[1];
    array.push(roadMap);
  }
  const result = array.join(" <br> ");
  return result;
};

const local = () => {
  let teste = index
    .toString()
    .split("#")[1]
    .split("<br>")[1]
    .toString()
    .split(";")
    .toString()
    .split(",").length;
  for (i = 1; i < index.length; i++) {
    for (c = 1; c < index.length; c++) {}
  }
  console.log(teste);
  return teste;
};

const centerNameSP = () => {
  const centerSP = index[1]
    .split("#")[2]
    .split("|")
    .toString()
    .split(":")[1]
    .split("<br>")[1];

  return centerSP;
};

const nameDowntown = () => {
  const downtown = index[2]
    .split("#")[2]
    .split("|")
    .toString()
    .split(":")[1]
    .split("<br>")[1];

  return downtown;
};

//#######################################################################

document.body.innerHTML += `<p>01 - Roteiro das Cidades:<strong><br /> ${nameCity()}</strong></p>`;

document.body.innerHTML += `<p>02 - Roteiro A de cada cidade avaliada:<br /><strong> ${roadMap()}</strong></p>`;

document.body.innerHTML += `<p>03 - A quantidade de locais citados no roteiro A de cada cidade é :<br /><strong> ${local()}</strong></p>`;

document.body.innerHTML += `<p>04 - Nomes dos pontos turísticos do Centro de São Paulo:<br /> <strong>${centerNameSP()}</strong></p>`;

document.body.innerHTML += `<p>05 - Nomes dos pontos turísticos do bairro Downtown na cidade de Los Angeles:<br /> <strong>${nameDowntown()}</strong></p>`;
