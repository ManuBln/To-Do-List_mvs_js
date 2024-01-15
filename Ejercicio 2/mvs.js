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

    },

    añadirItem: function(e){
        if ((e.code == "Enter") || (e.code == "NumpadEnter")){
            input = document.getElementById("añadir-tarea")

            if((input.value == "") || (input.value == " ")){

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