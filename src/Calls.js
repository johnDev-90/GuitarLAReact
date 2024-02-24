
export async function getitems(){
    
 try {

    const answer = await fetch(`${import.meta.env.VITE_API_URL}`)
    const result =  await answer.json();

    console.log(result);
    return result.data
    
 } catch (error) {
    console.log(error)
    
 }
    
}

export async function  getBlogs(){
   try {
      const answer = await fetch(`${import.meta.env.VITE_API_URL}/blogs?populate=image`)
      const result = await answer.json();
   
      return result.data;
   } catch (error) {
      console.log(error)
      
   }
}


 export const formatearDinero =  (valor) => {
   const formatter = new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency: 'USD'
   });

   return formatter.format(valor);
}

export const formatearFecha= fecha=>{
   const fechaNueva = new Date(fecha)
   const opciones= {
       year:'numeric',
       month:'long',
       day:'2-digit',
   }
   return fechaNueva.toLocaleDateString('en-US',opciones)
}



