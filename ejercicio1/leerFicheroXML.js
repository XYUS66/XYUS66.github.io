function gestionarFicheroXML(xmlDoc){
alert (xmlDoc)
	let libros = xmlDoc.querySelectorAll("libro")
	let capaVacia = document.querySelector("#ficheroXML")
	for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	
}
loadDocA("libros.xml","xml")
