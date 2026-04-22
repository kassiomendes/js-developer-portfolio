async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/kassiomendes/js-developer-portfolio/refs/heads/main/js-developer-portfolio/data/profile.json";
  const response = await fetch(url); //faz a busca pela url e torna um json
  const profileData = await response.json(); //convertendo o json e guarando em profileData
  return profileData;
}
