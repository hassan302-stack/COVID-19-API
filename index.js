
let select= document.getElementById("select")
let NewCases =document.querySelector(".NewCases")
let TotalCases =document.querySelector(".TotalCases")
let Deaths =document.querySelector(".Deaths")
fetch("http://restcountries.eu/rest/v2/all")
.then((res)=>{
    let response= res.json();
    console.log(response)
    return response
    
})
.then((info)=>{
    let index=0;
  html=""
  info.forEach(element => {
    
      html =html+`<option value="${index}">${element.name}</option>`
      index++
  });
  console.log(html);
  select.insertAdjacentHTML("beforeend",html)
})

select.addEventListener('change',()=>{
    debugger
   let val= Number(select.value)
console.log(val);

fetch("https://api.covid19api.com/summary")
.then((res)=>{
    let response= res.json();
    console.log(response)
    return response
    
})
.then((data)=>{
   
    let cont=data.Countries;
   console.log(cont[val].Country);
   console.log(cont[val].NewConfirmed);
   console.log(cont[val].TotalConfirmed);
   console.log(cont[val].TotalDeaths);
    console.log(cont);
    NewCases.innerHTML = cont[val].NewConfirmed
    TotalCases.innerHTML = cont[val].TotalConfirmed
    Deaths.innerHTML = cont[val].TotalDeaths
})
.catch((error)=>{
    console.log(error);
})


})

