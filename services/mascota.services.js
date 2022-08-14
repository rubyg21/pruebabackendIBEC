const Mdb = require('./mdb.service')
const tabla = "mascotas"
const Mascota = {
    todos: async function (){
        const sql = `
            SELECT 
            ${tabla}.nombre, 
            ${tabla}.edad,
            ${tabla}.Pais,
            ${tabla}.Ciudad, 
            ${razas}.nombre 
            ${tipomascotas}.tipo 
                      
                  
            FROM ${tabla} 

            JOIN  ${tipomascotas} ON  ${tipomascotas}.id = ${tabla}.IdTipo
            JOIN   ${razas} ON ${razas}.id = ${tabla}.IdRaza
        `
        return Mdb.query(sql, [])
    },
    nuevo: async function (mascota){
        const sql = `
            INSERT INTO ${tabla} 
            (nombre, IdRaza, IdTipo, edad, Pais, Ciudad)
            VALUES (?,?,?,?,?,?)
        `
        return Mdb.query(sql, [mascota.nombre],[mascota.IdRaza],[mascota.IdTipo],[mascota.edad],[mascota.Pais],[mascota.Ciudad])
    },
    editar: async function (mascota){
        const sql = `
            UPDATE ${tabla} SET 
                nombre = ?, 
                IdRaza = ?, 
                IdTipo = ?, 
                edad = ?, 
                Pais = ?, 
                Ciudad = ?, 
                WHERE id = ?
        `
        
        return Mdb.query(sql, [mascota.nombre],[mascota.IdRaza],[mascota.IdTipo],[mascota.edad],[mascota.Pais],[mascota.Ciudad])
    },
    eliminar: async function (id){
        const sql = `
            DELETE FROM ${tabla} WHERE id = ?
        `
        return Mdb.query(sql, [id])
    },
    porId: async function (id){
        const sql = `
            SELECT * FROM ${tabla} WHERE id = ?
        `

        return Mdb.query(sql, [id])
    }
}
module.exports = Mascota