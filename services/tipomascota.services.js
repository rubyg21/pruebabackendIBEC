const Mdb = require('./mdb.service')
const tabla = "tipomascotas"
const Tipomascota = {
    todos: async function (){
        const sql = `
            SELECT * FROM ${tabla} 
        `
        return Mdb.query(sql, [])
    },
    nuevo: async function (tipomascota){
        const sql = `
            INSERT INTO ${tabla} (tipo)
            VALUES (?)
        `
        return Mdb.query(sql, [tipomascota.tipo])
    },
    editar: async function (tipomascota){
        const sql = `
            UPDATE ${tabla} SET 
                   tipo = ?, 
                WHERE id = ?
        `
        
        
        return Mdb.query(sql, [tipomascota.tipo])
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
module.exports = Tipomascota