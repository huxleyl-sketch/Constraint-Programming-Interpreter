//variable {name: "", domain: ""}
//domain []
//constraint{scope: [variable],rel: ()=>{}}
function Dfs(vars = [], cons = []){
   let searched = [];
   for(let v in vars){
      if(!searched.includes(v)){ //if v is not assigned
         for(d in v.domain){
            searched.push([v,]);
         }
         for(let c in cons){
            for(let s in c.scope){
               if(s != v){

               }
            }
         }
      }
   }
   
   
   //remove first var from stack
   //assign a value to var from domain
   //find scopes
   //go to other vars in scopes
   //repeat
   
   
   
   
   
   
   
   
   
   
}
  