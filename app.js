let left_btn=document.getElementsByClassName('bi-chevron-left')[0];
let right_btn=document.getElementsByClassName('bi-chevron-right')[0];
let cards=document.getElementsByClassName('cards')[0];
let search=document.getElementsByClassName('search')[0];
// let search_input=document.getElementsById('search_input');

let test=[
    {
     "name": "The Boys",
     "imdb": 9.3,
     "date": "2022",
     "sposter": "img/the boys.jpg",
     "bposter": "img/the boys1.jpg",
     "genre": "Action",
     "type": "series",
     "url": "the boys.html",
     
     "trailer": "john wick.webm",
     "low": "video/theboys.webm",
     "medium": "video/the boys 720ph.mp4",
     "high": "video/the boys 1080ph.mp4"
     }, {
     "name": "Money Heist",
     "imdb": 9.9,
     "date": "2020",
     "sposter": "img/money heist.jpg",
     "bposter": "img/money heist1.jpg",
     "genre": "Action",
     "type": "series",
     "url": "money heist.html",
     "trailer": "money heist trailer.mp4",
     "low": "video/money heist 480ph.mp4",
     "medium": "video/money heist 720ph.mp4",
     "high": "video/money heist 1080ph.mp4"
 }, {
     "name": "John Wick",
     "imdb": 9.8,
     "date": "2022",
     "sposter": "img/Jhon Wick.jpg",
     "bposter": "img/jhon wick1.webp",
     "genre": "Action",
     "type": "movie",
     "url": "jhon wick.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/Jhon Wick 480ph.mp4",
     "medium": "video/Jhon Wick 720ph.mp4",
     "high": "video/Jhon Wick 1080ph.mp4"
 }, {
     "name": "Ant Man",
     "imdb": 8.9,
     "date": "2017",
     "sposter": "img/ant man.jpg",
     "bposter": "img/ant man1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "ant man.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/ant man 480ph.mp4",
     "medium": "video/ant man 720ph.mp4",
     "high": "video/ant man 1080ph.mp4"
 }, {
     "name": "Avengers",
     "imdb": 9.9,
     "date": "2012",
     "sposter": "img/avengers.jpg",
     "bposter": "img/avengers1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "avengers.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/avengers 480ph.mp4",
     "medium": "video/avengers 720ph.mp4",
     "high": "video/avengers 1080ph.mp4"
 }, {
     "name": "Moon Knight",
     "imdb": 7.3,
     "date": "2022",
     "sposter": "img/moon knight.jpg",
     "bposter": "img/moon knight1.webp",
     "genre": "Action",
     "type": "series",
     "url": "moon knight.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/moon knight 480ph.mp4",
     "medium": "video/moon knight 720ph.mp4",
     "high": "video/moon knight 1080ph.mp4"
 }, {
     "name": "Kota Factory",
     "imdb": 9.6,
     "date": "2020",
     "sposter": "img/kota factory.jpg",
     "bposter": "img/kota factory1.webp",
     "genre": "Action",
     "type": "series",
     "url": "kota factory.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/kota factory 480ph.mp4",
     "medium": "video/kota factory 720ph.mp4",
     "high": "video/kota factory 1080ph.mp4"
 }, {
     "name": "Collage Romance",
     "imdb": 7.9,
     "date": "2021",
     "sposter": "img/collage romance.jpg",
     "bposter": "img/collage romance1.jpg",
     "genre": "Action",
     "type": "series",
     "url": "collage romance.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/collage romance 480ph.mp4",
     "medium": "video/collage romance 720ph.mp4",
     "high": "video/collage romance 1080ph.mp4"
 }, {
     "name": "Thor Love Of Thunder",
     "imdb": 8.8,
     "date": "2022",
     "sposter": "img/thor love of thunder.jpg",
     "bposter": "img/thor love of thunder1.avif",
     "genre": "Action",
     "type": "movie",
     "url": "thor love of thunder.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/thor love of thunder 480ph.mp4",
     "medium": "video/thor love of thunder 720ph.mp4",
     "high": "video/thor love of thunder 1080ph.mp4"
 }, {
     "name": "Uncharted",
     "imdb": 9.8,
     "date": "2022",
     "sposter": "img/uncharted.webp",
     "bposter": "img/uncharted1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "uncharted.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/uncharted 480ph.mp4",
     "medium": "video/uncharted 720ph.mp4",
     "high": "video/uncharted 1080ph.mp4"
 }, {
     "name": "Eesho",
     "imdb": 8.2,
     "date": "2022",
     "sposter": "img/eesho.jpeg",
     "bposter": "img/eesho1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "eesho.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/eesho 480ph.mp4",
     "medium": "video/eesho 720ph.mp4",
     "high": "video/eesho 1080ph.mp4"
 }, {
     "name": "Top Gun",
     "imdb": 8.0,
     "date": "2022",
     "sposter": "img/topgun.jpg",
     "bposter": "img/topgun1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "topgun.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/topgun 480ph.mp4",
     "medium": "video/topgun 720ph.mp4",
     "high": "video/topgun 1080ph.mp4"
 }, {
     "name": "Jurassic World",
     "imdb": 8.0,
     "date": "2022",
     "sposter": "img/jurassic world.jpg",
     "bposter": "img/jurassic world1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "jurassic world.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/jurassic world 480ph.mp4",
     "medium": "video/jurassic world 720ph.mp4",
     "high": "video/jurassic world 1080ph.mp4"
 }, {
     "name": "Eternals",
     "imdb": 9.0,
     "date": "2022",
     "sposter": "img/eternals.jpg",
     "bposter": "img/eternals1.webp",
     "genre": "Action",
     "type": "movie",
     "url": "eternals.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/eternals 480ph.mp4",
     "medium": "video/eternals 720ph.mp4",
     "high": "video/eternals 1080ph.mp4"
 }, {
     "name": "Spider Man",
     "imdb": 9.9,
     "date": "2020",
     "sposter": "img/spiderman.jpg",
     "bposter": "img/spiderman1.jpg",
     "genre": "Action",
     "type": "movie",
     "url": "spiderman.html",
     "trailer": "john wick trailer.mp4",
     "low": "video/spiderman 480ph.mp4",
     "medium": "video/spiderman 720ph.mp4",
     "high": "video/spiderman 1080ph.mp4"
 }]
left_btn.addEventListener('click',()=>{
    cards.scrollLeft -=140;
})
right_btn.addEventListener('click',()=>{
    cards.scrollLeft +=140;
})

     test.forEach((ele,i) => {
        let {name,imdb,date,sposter,bposter,genre,url}=ele;
        let card=document.createElement('a');
        card.classList.add('card');
        card.href=url;
        card.innerHTML=`
         <img src="${sposter}" alt="${name}" class="poster">
         <div class="rest_card">
          <img src="${bposter}" alt="">
          <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                  <p>${genre}</p>
                  <h3><span>IMDB</span></p><i class="bi bi-star-fill">9.6</i>${imdb}</h3>
              </div>
          </div>
         </div>
         `
         cards.appendChild(card);
        
        
     });
     //let json_url="movie.json";
// fetch(json_url).then(Response =>Response.json())
// .then((data)=> {
    //  document.getElementById('title').innerText=data[0].name;
    //  document.getElementById('gen').innerText=data[0].genre;
    //  document.getElementById('date').innerText=data[0].date;
    //  document.getElementById('rate').innerHTML=`<span>IMDB</span></p><i class="bi bi-star-fill">9.6</i>${data[0].imdb}`
    
     // search data load
     //data.forEach(element =>{
    //      let {name,imdb,date,sposter,genre,url}=element;
    //      let card=document.createElement('a');
    //      card.classList.add('card');
    //      card.href=url;
    //      card.innerHTML=`
    //      <img src="${sposter}" alt="" >
    //      <div class="cont">
         
    //                <h3>${name}</h3>
            
    //            <p>${genre},${date},<span>IMDB</span></p><i class="bi bi-star-fill">9.6</i>${imdb}</p>
                 
    //           </div>
    //      `
    //     search.appendChild(card);


    // })
    // search fillter
     search_input. addEventListener('keyup', () => {
         let filter = search_input. value. toUpperCase();
         let a = search .getElementsByTagName('a');
         for (let index = 0; index < a.length;index++) {
         let b = a[index] .getElementsByClassName ('cont')[e];
         // console. Log(a.textContent)
         let TextValue = b. textContent || b.innerText;
         if(TextValue. toUpperCase().indexOf(filter) > -1) {
        a[index].style.display="flex";
        search.style.visibility="visible";
        search.style.opacity=1;
         } else{
             a[index].style.display="none"
         }
         if(search_input.value==0){
             search.style.visibility="hidden";
        search.style.opacity=0;
         }
     }

 })
// })
///////////////////////////////////////////////////
let video=document.getElementsByTagName('video')[0];
let play=document.getElementById('play');
play.addEventListener('click',()=>{
    console.log(video);
    if(video.paused){
        video.play();
        play.innerHTML=`Play <i class="bi bi-pause-fill"></i>`
    }
    else{
        video.pause();
        play.innerHTML=`Watch <i class="bi bi-pause-fill"></i>`

    }
})
///////////////////////////////////////
let series=document.getElementById('series');
let movies=document.getElementById('movies');
series.addEventListener('click',()=> {
    cards.innerHTML='';

    let series_array=data.filter(ele => {
        return ele.type==="series";
    })

    series.array.forEach((ele,i) => {
        let {name,imdb,date,sposter,bposter,genre,url,}=ele;
        let card=document.createElement('a');
        card.classList.add('card');
        card.href=url;
        card.innerHTML=`
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
         <img src="${bposter}" alt="">
         <div class="cont">
             <h4>${name}</h4>
             <div class="sub">
                 <p>${genre}</p>
                 <h3><span>IMDB</span></p><i class="bi bi-star-fill">9.6</i>${imdb}</h3>
             </div>
         </div>
        </div>
        `
        cards.appendChild(card);
        
    });

})
//////////////////////////////////////
movies.addEventListener('click',()=>{
    cards.innerHTML='';

    let movie_array=data.filter(ele =>{
        return ele.type==="movie";
    })

    movie_array.forEach((ele,i) => {
        let {name,imdb,date,sposter,bposter,genre,url,}=ele;
        let card=document.createElement('a');
        card.classList.add('card');
        card.href=url;
        card.innerHTML=`
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
         <img src="${bposter}" alt="">
         <div class="cont">
             <h4>${name}</h4>
             <div class="sub">
                 <p>${genre}</p>
                 <h3><span>${imdb}</span></p><i class="bi bi-star-fill">9.6</i>${imdb}</h3>
             </div>
         </div>
        </div>
        `
        cards.appendChild(card);
        
    });
})

// 
