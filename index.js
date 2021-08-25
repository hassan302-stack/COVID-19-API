
let select= document.getElementById("select")
let NewCases =document.querySelector(".NewCases")
let TotalCases =document.querySelector(".TotalCases")
let Deaths =document.querySelector(".Deaths")
let wNewCases =document.querySelector(".wNewCases")
let wTotalCases =document.querySelector(".wTotalCases")
let wDeaths =document.querySelector(".wDeaths")
// fetch("http://restcountries.eu/rest/v2/all")
// .then((res)=>{
//     let response= res.json();
//     console.log(response)
//     return response
    
// })
// .then((info)=>{
//     let index=0;
//   html=""
//   info.forEach(element => {
    
//       html =html+`<option value="${index}">${element.name}</option>`
//       index++
//   });
//   console.log(html);
//   select.insertAdjacentHTML("beforeend",html)
// })

select.addEventListener('change',()=>{
    debugger
   let val= Number(select.value)
console.log(val);
callApi(val)

})
  


function callApi(val=0){
    fetch("https://api.covid19api.com/summary")
    .then((res)=>{
        let response= res.json();
        console.log(response)
        return response
        
    })
    .then((data)=>{
       html=""
        let cont=data.Countries;
        cont.forEach((element,index)=>{
            html =html+`<option value="${index}">${element.Country}</option>`
            
        })
        select.insertAdjacentHTML("beforeend",html)
        console.log(cont);
        NewCases.innerHTML = cont[val].NewConfirmed
        TotalCases.innerHTML = cont[val].TotalConfirmed
        Deaths.innerHTML = cont[val].TotalDeaths
        wNewCases.innerHTML = data.Global.NewConfirmed
        wTotalCases.innerHTML = data.Global.TotalConfirmed
        wDeaths.innerHTML = data.Global.TotalDeaths

    })
    .catch((error)=>{
        console.log(error);
    })
    
    

}
callApi()