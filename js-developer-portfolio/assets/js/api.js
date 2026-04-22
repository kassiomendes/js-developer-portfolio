
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const response = await fetch(url) //faz a busca pela url e torna um json
    const profileData = await response.json() //convertendo o json e guarando em profileData
    return profileData
}
