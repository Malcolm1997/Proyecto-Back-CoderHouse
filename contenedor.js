const fs = require('fs')



class Contenedor{

    constructor(nombre){
        this.nombre = nombre;
        this.id = 0 
    }

    static dataDelArchivo = [];

    async save(data){
        this.id++
        data.id = this.id
        Contenedor.dataDelArchivo.push(data)

        await this.cargarArchivo()

        return this.id
    }

    async cargarArchivo(){
        try{
            await fs.promises.writeFile(this.nombre, JSON.stringify(Contenedor.dataDelArchivo))
        }
        catch (error) {
        console.log("El error de carga es:" + error)
        }
    }

    async init(){
        try{
            let data = await fs.promises.readFile(this.nombre, "utf8")
            Contenedor.dataDelArchivo = JSON.parse(data)

            let lastId = 0

            Contenedor.dataDelArchivo.forEach(el => {
                el.id > lastId ? lastId = el.id : null
            })

            this.id = lastId
        }
        catch (error) {
        console.log("Todavia no se a ingresado ningun archivo")
        }
    }

    getById(id){
        let data
        try {
            data = Contenedor.dataDelArchivo.length ? Contenedor.dataDelArchivo.filter(el => el.id == id) : console.log("No cargo todavia")
            return data.length ? data[0] : null
        } catch (error) {
            console.log(error)
        }
    }



    getAll(){
        try{
            return Contenedor.dataDelArchivo
        }
        catch(error){
            console.log("No se pudieron entregar todos los datos")
        }
         
    }

    async deleteById(id){
        try{
            Contenedor.dataDelArchivo = Contenedor.dataDelArchivo.filter(el => el.id != id)
            
            await this.cargarArchivo()

        }
        catch (error) {
            console.log(error)
        }
        
    }

    async deleteAll(){
            try{
                await fs.promises.unlink(this.nombre)
            }
            catch(err){
                console.log("No se a encontrado el archivo")
            }
        
    }

    productoRandom(){
        let numeroRandom = Math.ceil(Math.random() * Contenedor.dataDelArchivo.length)

        return this.getById(numeroRandom+1)        
    }
}

module.exports = Contenedor