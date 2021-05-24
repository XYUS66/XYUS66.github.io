function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let animales = xmlDoc.querySelectorAll("animal")
	for(let i=0; i<animales.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + animales[i].textContent + "</p>"
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("mouseover",CargarFichero);
function CargarFichero()
{
	loadDocA("animales.xml","xml");
}
