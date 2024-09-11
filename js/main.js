let myhttp = new XMLHttpRequest()
let row = document.querySelector(".row")
let selectedfoods = document.querySelector("select")
let Search = document.querySelector("Search")
Search.addEventListener("search" , function(){
    Search.value = ``
    getdata(Search.value)
})
selectedfoods.addEventListener("change" , function(){
    getdata(selectedfoods.value)
})
getdata("pizza")
function getdata(data){
    myhttp.open ("GET" , `https://forkify-api.herokuapp.com/api/search?q=${data}`)
    myhttp.send()
    myhttp.addEventListener ("readystatechange" , function(){
        console.log(myhttp.readyState);
        if(myhttp.readyState == 4){
            let mydata = JSON.parse(myhttp.response)
            showData(mydata.recipes)
        }
    }
    )
}


function showData(mydata){
    let cartona = ``
    for(let i = 0 ; i<mydata.length ; i++){
        cartona +=`
         <div class="col-md-4">
                <img class="w-100 mb-2" src="${mydata[i].image_url}" alt="">
                <p><b>Title:</b>${mydata[i].title}</p>
                <p><b>Recipe id:</b>${mydata[i].recipe_id}</p>
                <p><b>Publisher:</b>${mydata[i].publisher}</p>
            </div>
        `
    }
    row.innerHTML = cartona  
}