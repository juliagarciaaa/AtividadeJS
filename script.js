const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
 
function renderTarefas(){
 listElement.innerHTML = ""//limpar

for (const itemtarefa of tarefas) {
   const tarefaElement = document.createElement("li")
   const tarefaText = document.createTextNode(itemtarefa)
   const LinkElement = document.createElement("a")
   LinkElement.setAttribute("href", "#")
   // posição do vetor
   const pos = tarefas.indexOf(itemtarefa)
   // o $ serve para declarar uma variavel dentro da funçao 
   LinkElement.setAttribute("onclick", `deleteTarefa(${pos})`)
   const linkText = document.createTextNode("Excluir")
   LinkElement.appendChild(linkText)

   tarefaElement.appendChild(tarefaText)
   tarefaElement.appendChild(LinkElement)
   listElement.appendChild(tarefaElement)
  }
}
renderTarefas()
function addTarefas(){
   const text = inputElement.value
   tarefas.push(text)
   renderTarefas()
   inputElement.value = ""
   saveToStorage()

}
buttonElement.onclick = addTarefas
function deleteTarefa(pos){
 tarefas.splice (pos, 1)
 renderTarefas()
 saveToStorage()
}
function saveToStorage(){
   //set armazena e get pega
   localStorage.setItem("tarefas", JSON.stringify(tarefas))
}