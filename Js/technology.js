let technologyApi =`http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`
document.querySelector("#technology").addEventListener("click" ,function ()
{
    window.fetch(technologyApi)
.then(headlineData =>
    {
        headlineData.json().then(headline => 
        {
                headlineInfo = headline.articles;
                

                let output =[];
                for (headlines of headlineInfo )
                {
                    
                     output += `
                    <div class="output">
                    <img src = "${headlines.urlToImage}" class ="img-card-top"/>
                    <div class ="card-body">
                    <a href="${headlines.url}" target ="_blank" class ="btn text-info">${headlines.title}</a>

                    </div>  
                    </div>    
                `;
                document.getElementById("result").innerHTML=output;

              
            }

        }).catch(err =>
                {
                    console.log(err);
                })
    }).catch(err =>
    {
        console.log(err);
    });

});


