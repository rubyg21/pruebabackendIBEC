const Mdb = require('./mdb.service')
const tabla = "razas"
const Raza = {
    todos: async function (){
        const sql = `
            SELECT * FROM ${tabla} 
        `
        return Mdb.query(sql, [])
    },
    nuevo: async function (raza){
        const sql = `
            INSERT INTO ${tabla} (nombre)
            VALUES (?)
        `
        return Mdb.query(sql, [raza.nombre])
    },
    editar: async function (raza){
        const sql = `
            UPDATE ${tabla} SET 
                nombre = ?, 
                WHERE id = ?
        `
        
        return Mdb.query(sql, [raza.nombre])
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
module.exports = Raza