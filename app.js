let wrapper = document.querySelector(".wrapper")
fetch("https://fake-movie-database-api.herokuapp.com/api?s=Star Wars").
then(res => res.json())
.then(users =>
    users.Search.forEach(item => {
        wrapper.innerHTML +=`
        <div class="card">
        <div class="img"><img src="${item.Poster}" alt=""></div>
           <h2>${item.Title}</h2>
           <p>${item.Year}</p>
        </div>`
    })
    
) 