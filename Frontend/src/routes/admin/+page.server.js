/** @type {import('./$types').Actions} */

import { ChevronSortOutline } from 'flowbite-svelte-icons';
import process  from 'process';

let state = 0;



function loop()
{


    let i = 0;

    for(let i=0;i<10000;i++)
    {
        i = i + 1 ;
        console.log(i);
    }

    
}


export const actions = {



    max_cpu_1: async ({ request, fetch ,}) => {

        var end = (new  Date()).getTime()  + (1000 * 60);

        state = 1;
        let i = 0;

        while(state == 1 && (new Date()).getTime() < end)
        {
            i = i + 1 ;
            loop();
        }
    
    },
    max_cpu_5: async ({ request, fetch ,}) => {

        var end = (new  Date()).getTime()  + (5000 * 60);

        state = 1;
        let i = 0;

        while(state == 1 && (new Date()).getTime() < end)
        {
            i = i + 1 ;
            loop();
        }
    
    },
    

    kill_app: async ({ request, fetch ,}) => {

        process.exit(1) 

    
    },


    
    
    
 };
    