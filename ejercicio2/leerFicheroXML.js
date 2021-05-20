
function gestionarFicheroXML(xmlDoc){
alert (xmlDoc)
	let capaVacia = document.querySelector("#ficheroXML")
  let dcha = xmlDoc.querySelectorAll("derecha")
	let izda = xmlDoc.querySelectorAll("izquierda")
  let fondo = xmlDoc.querySelectorAll("chat")
  fondo.className="fondo"
	for(let i=0; i<dcha.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + dcha[i].textContent + "</p>"
  }
}
loadDocA("chat.xml","xml")
