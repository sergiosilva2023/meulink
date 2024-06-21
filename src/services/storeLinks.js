// Buscar os links guardados
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Guardar um link no localStorage
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);
  // para não duplicar o ID
  const hasLink = linksStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    console.log("Este link já existe na sua lista!");
    return;
  }

  //Adiciona um novo link
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link guardado com sucesso!");
}

// Deletar um link guardado

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
  console.log("Link Deletado com sucesso!")
  return myLinks;
}
