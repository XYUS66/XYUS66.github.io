
function gestionarFicheroXML(xmlDoc){
alert (xmlDoc)
	let capaVacia = document.querySelector("#ficheroXML")
  let dcha = xmlDoc.querySelectorAll("derecha")
	let izda = xmlDoc.querySelectorAll("izquierda")
  let fondo = xmlDoc.querySelectorAll("chat")
  fondo.className="fondo"
	for(let i=0; i<dcha.length&&izda.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class="derecha">" + dcha[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<pclass="izquierda">" + izda[i].textContent + "</p>"
  }
}
loadDocA("chat.xml","xml")
