import {connect, query, update } from "$lib/server/db.js";

let db;


/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {

    if(db == undefined  || db.state === 'disconnected')
    {
       db = await connect();
    }
  
    const schedules = await query("Select * from results order by ts desc" ,db);
    let  data = [];
  
    data = schedules.map(v => Object.assign({}, v));
  
    return {  results: data };
      
  }