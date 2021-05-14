function gestionarFicheroXML(xmlDoc){
alert (xmlDoc)
	let libro = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libro.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libro[i].textContent + "</p>"
	
}
loadDocA("libros.xml","xml")
