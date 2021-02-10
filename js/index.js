const getGithubData = async () => {
  const api = "https://api.github.com/users/RendyArthaP"
  let response = await fetch(api)
  let results = await response.json()

  console.log(results)
  let githubCard = document.querySelector(".github-card")
  let card = document.createElement('div')

  card.innerHTML = `
    <div>
      <img src=${results.avatar_url}/>
      <h1>${results.name}</h1>
      <div class="wrapper-bio">
        <h3>Bio:</h3>
        <span>${results.bio}</span>
      </div>
      <div class="wrapper-social">
        <div class="following">
          <h3>Following:</h3>
          <span>${results.following}</span>
        </div>
        <div class="following">
          <h3>Followers:</h3>
          <span>${results.followers}</span>
        </div>
      </div>
      <div class="wrapper-repository">
        <h3>Repository:</h3>
        <span>${results.public_repos}</span>
      </div>
    </div>
  `

  githubCard.appendChild(card)

}
getGithubData();