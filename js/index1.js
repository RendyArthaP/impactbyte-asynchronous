const getCountryData = async () => {
  const api = "https://restcountries.eu/rest/v2/all"
  let response = await fetch(api);
  let results = await response.json();

  results.map(result => {
    console.log(result)
    let negara = document.querySelector(".wrapper-negara")
    let list = document.createElement('div');

    list.innerHTML = `
      <div class="list-negara">
        <img src="${result.flag}"/>
        <span>${result.name}</span>
      </div>
    `
    negara.appendChild(list)
  })
  
  
  
}
getCountryData()