let api_key = "63bc0aab54fd46729cd0a15a8b7b376f";
let newsContainer = document.getElementById('news-container');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${api_key}`, true);
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="collapseOne">
                <strong>${element["title"]}</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${element["description"]} <a href=${element.url} target = '_blank'>Read More</a>
                </div>
              </div>
            </div>`;
      newshtml += news;
    });
    newsContainer.innerHTML = newshtml;
  }
  else (
    console.log("error")
  )
}

xhr.send();


