import {connect, query, update } from "$lib/server/db.js";



let db;

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {

  if(db == undefined  || db.state === 'disconnected')
  {
     db = await connect();
  }

  const schedules = await query("Select * from schedule" ,db);
  let  data = [];

  data = schedules.map(v => Object.assign({}, v));

  return {  schedules: data };
    
}


/** @type {import('./$types').Actions} */
export const actions = {


  default: async ({ request, fetch ,}) => {

    const data = await request.formData();
    const id = data.get('id');
    const active  = data.get('active') == undefined ? false : true; 
    const url = data.get('url');
    const schedule = data.get('schedule');


    if(db == undefined  || db.state === 'disconnected')
    {
       db = await connect();
    }


    if(id == undefined || id == 'New')
    {
      const result =  update('Insert Into schedule (active,url ,schedule, nextrun  ) Values ( ? , ? , ?, 0 )', [ active, url,schedule , id ] , db);
    }
    else {
      const result =  update('Update schedule Set active =  ? , url = ? , schedule = ?  Where id =  ?', [ active, url,schedule , id ] , db);

    }


    
  }


};


