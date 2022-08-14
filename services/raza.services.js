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
            INSERT INTO ${tabla} (raza)
            VALUES (?)
        `
        return Mdb.query(sql, [raza.raza])
    },
    editar: async function (raza){
        const sql = `
            UPDATE ${tabla} SET 
            raza = ?, 
                WHERE id = ?
        `
        
        return Mdb.query(sql, [raza.raza])
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