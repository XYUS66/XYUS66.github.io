function gestionarFicheroXML(xmlDoc){
alert (xmlDoc)
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	libro[2].className="fondo"
	for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	
}
loadDocA("libros.xml","xml")
