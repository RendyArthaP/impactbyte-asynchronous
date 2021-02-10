const getGithubData = async () => {
  let githubCard = document.querySelector(".github-card")
  let card = document.createElement('div')

  const api = "https://api.github.com/users/RendyArthaP"
  fetch(api)
    .then((response) => response.json())
    .then((data) => card.innerHTML = `
    <div>
      <img src=${data.avatar_url}/>
      <h1>${data.name}</h1>
      <div class="wrapper-bio">
        <h3>Bio:</h3>
        <span>${data.bio}</span>
      </div>
      <div class="wrapper-social">
        <div class="following">
          <h3>Following:</h3>
          <span>${data.following}</span>
        </div>
        <div class="following">
          <h3>Followers:</h3>
          <span>${data.followers}</span>
        </div>
      </div>
      <div class="wrapper-repository">
        <h3>Repository:</h3>
        <span>${data.public_repos}</span>
      </div>
    </div>
  `)
    .catch((error) => console.log("Error", error))
    
    githubCard.appendChild(card)
}
getGithubData();