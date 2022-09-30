const { app } = require("./app");
const mongoose = require('mongoose');



const startServer = async () =>{
   try {

    const PORT = 4000
  
    app.listen(PORT,() => {
        console.log('server runnig');
    })
    
   } catch (error) {
     console.log(error);
   }

   
}

startServer();