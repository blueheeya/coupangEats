import {cardData1,cardData2,cardData3} from "./cardData.js";
let cardD1 = "";
for(let i = 0 ; i<3; i++) {
    cardD1 += `
    <div class="card col-lg-4">
        <a href="${cardData1[i].href}">
        <img src="${cardData1[i].img}" class="card-img-top">
        <div class="card-body">
          <h5 class="title">${cardData1[i].title}</h5>
          <p class="text">${cardData1[i].contents}</p>
        </div>
        </a>
    </div>
    `
}
let cardD2 = "";
for(let i = 0 ; i<3; i++) {
    if(i % 2 == 1 ){
        cardD2 += `
        <div class="cardbox revers row">
            <img src="${cardData2[i].img}" class="card-img-top col-lg-6" alt="">
            <div class="card-body  col col-lg-6 px-3 px-lg-0">
                <p class="comment">${cardData2[i].comment}</p>
                <h5 class="title">${cardData2[i].title}</h5>
                <p class="text">${cardData2[i].contents}</p>
            </div>
        </div>
    `
    }else {
        cardD2 += `
        <div class="cardbox row">
            <img src="${cardData2[i].img}"  class="card-img-top col-lg-6" alt="">
            <div class="card-body col col-lg-6 px-3 px-lg-5">
                <p class="comment">${cardData2[i].comment}</p>
                <h5 class="title">${cardData2[i].title}</h5>
                <p class="text">${cardData2[i].contents}</p>
            </div>
        </div>
        `
    }
}
let cardD3 = "";
for(let i = 0 ; i<3; i++) {
    if(i % 2 == 1 ){
        cardD3 += `
        <div class="cardbox revers row">
            <img src="${cardData3[i].img}"  class="card-img-top col col-lg-6" alt="">
            <div class="card-body  col col-lg-6 px-3 px-lg-0">
                <p class="comment">${cardData3[i].comment}</p>
                <h5 class="title">${cardData3[i].title}</h5>
                <p class="text">${cardData3[i].contents}</p>
            </div>
        </div>
    `
    }else {
        cardD3 += `
        <div class="cardbox row">
            <img src="${cardData3[i].img}"  class="card-img-top col col-lg-6" alt="">
               <div class="card-body  col col-lg-6 px-3 px-lg-5">
                <p class="comment">${cardData3[i].comment}</p>
                <h5 class="title">${cardData3[i].title}</h5>
                <p class="text">${cardData3[i].contents}</p>
            </div>
        </div>
        `
    }
}
document.querySelector(".cardWrap1").innerHTML = cardD1;
document.querySelector(".cardWrap2").innerHTML = cardD2;
document.querySelector(".cardWrap3").innerHTML = cardD3;