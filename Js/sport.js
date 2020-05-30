let sportApi =`http://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`
document.querySelector("#sport").addEventListener("click" ,function ()
{
    window.fetch(sportApi)
.then(headlineData =>
    {
        headlineData.json().then(headline => 
        {
                headlineInfo = headline.article;
                console.log(headline);

                let output =[];
                for (headlines of headline.articles )
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


