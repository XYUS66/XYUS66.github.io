
function gestionarFicheroXML(xmlDoc){
alert (xmlDoc)
	let capaVacia = document.querySelector("#ficheroXML")
	let izda = xmlDoc.querySelectorAll("izquierda")
  let dcha = xmlDoc.querySelectorAll("derecha")
	for(let i=0; i<libros.length; i++)
    if (i==2)
    {
        capaVacia.innerHTML = capaVacia.innerHTML + "<p class='fondo'>" + libros[i].textContent + "</p>"
    }
    else
    {
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
    }
}
loadDocA("chat.xml","xml")