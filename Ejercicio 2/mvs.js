modelo = {
    tareas: []
}

vista = {

    borrarLista: function(){
        var rango = document.createRange()
        rango.selectNodeContents(document.getElementById("lista"))
        rango.deleteContents()

    },

    refrescar: function(){
        this.borrarLista()

        if(modelo.tareas.length != 0){
            lista = document.getElementById("lista")

            for(var i = 0; i < modelo.tareas.length; i++){

                item = document.createElement("item")
                span = document.createElement("li")
                check = document.createElement("a")
                cross = document.createElement("a")
                iconCheck = document.createElement("i")
                iconCross = document.createElement("i")

                item.className = "item"
                span.className = "item-text"
                check.className = "item-completada"
                cross.className = "item-eliminado"

                span.textContent = modelo.tareas[i].text

                if (modelo.tareas[i].completado)
                span.setAttribute("style", "text-decoration: line-througth; color: #bbb")
                
                iconCheck.setAttribute("class", "icon ion-md-checkmart")
                iconCheck.setAttribute("data-id", i)
                iconCross.setAttribute("class", "icon ion-md-trash")
                iconCross.setAttribute("data-id", i)

                check.setAttribute("onclick", "controlador.tareaCompletada('" + i + "')")
                cross.setAttribute("onclick", "controlador.tareaCompletada('" + i + "')")

                check.appendChild(iconCheck)
                cross.appendChild(iconCross)
                item.appendChild(span)
                item.appendChild(check)
                item.appendChild(cross)

                lista.appendChild(item)
            }
        }

    },


    añadirTarea: function(e){
        if ((e.code == "Enter") || (e.code == "NumpadEnter")){
            input = document.getElementById("añadir-tarea")

            if((input.value !== "") || (input.value !== " ")){

                controlador.añadirItem(input.value)
                return false

            }
        }

    }

}

controlador = {

    init: function(){
        vista.refrescar()

    },
    
    añadirItem: function(tarea){
        lista_tareas = { text: tarea, completado: false}
        modelo.tareas.push(lista_tareas)
        document.getElementById("añadir-tarea").value = ""
        vista.refrescar()

    },

    tareaCompletada: function(tarea_index){
        modelo.tareas[tarea_index].completado =  !modelo.tareas[tarea_index].completado
        vista.refrescar()

    },

    eliminarTarea: function(){
        modelo.tareas.splice(tarea_index, )
        vista.refrescar()
    
    }

}
















