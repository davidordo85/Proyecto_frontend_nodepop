export const adsView = (advertisement) => {

    return `<div class="card">
    <div class="card-content">
    <div class="media">
    <div class="media-content">
    <p class="title is-4">${advertisement.author}</p>
    </div>
    </div>
    
    <div class="content">
    ${advertisement.message}
    <br>
    <time datetime="${advertisement.date}">${advertisement.date}</time>
    </div>
    </div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
  </div>`
}
