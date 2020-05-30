let covidApi ="https://api.covid19api.com/summary"
window.fetch(covidApi)
.then( covoidFun =>
    {
        covoidFun.json().then(covidData =>
            {
               let Global = covidData.Global;
               let India = covidData.Countries[76];
              
               
               document.getElementById("covidGlobal").innerHTML=`
               <i class="fas fa-globe"> Global</i> 
               <span class ="badge badge-dark">Total Confirmed : </span> 
               <span class="font-weight-bold">${Global.TotalConfirmed}</span>
               <span class ="badge badge-dark">New Confirmed : </span> 
               <span class="font-weight-bold">${Global.NewConfirmed}</span>
               <span class ="badge badge-danger">Total Deaths : </span>
               <span class="font-weight-bold">${Global.TotalDeaths}</span>
               <span class ="badge badge-danger">NewDeaths : </span>
               <span class="font-weight-bold">${Global.NewDeaths}</span>
               <span class ="badge badge-success">Total Recovered : </span>
               <span class="font-weight-bold">${Global.TotalRecovered}</span>
               <span class ="badge badge-success">New Recoverd : </span>
               <span class="font-weight-bold">${Global.NewRecovered}</span>
            


           `

           document.getElementById("covidIndia").innerHTML=`
           <i class="fas fa-globe text-info">India</i> 
           <span class ="badge badge-dark">Total Confirmed : </span> 
           <span class="font-weight-bold">${India.TotalConfirmed}</span>
           <span class ="badge badge-dark">New Confirmed : </span> 
           <span class="font-weight-bold">${India.NewConfirmed}</span>
           <span class ="badge badge-danger">Total Deaths : </span>
           <span class="font-weight-bold">${India.TotalDeaths}</span>
           <span class ="badge badge-danger">NewDeaths : </span>
           <span class="font-weight-bold">${India.NewDeaths}</span>
           <span class ="badge badge-success">Total Recovered : </span>
           <span class="font-weight-bold">${India.TotalRecovered}</span>
           <span class ="badge badge-success">New Recoverd : </span>
           <span class="font-weight-bold">${India.NewRecovered}</span>
        
            `


        }).catch(err =>console.log(err));
    }).catch(err => console.log(err));