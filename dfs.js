//variable {name: "", domain: ""}
//domain []
//constraint{scope: [variable],rel: ()=>{}}
function Dfs(vars, cons){
   let assignment = [];
   rDfs(--vars.length,vars);
   function check(){
      cons.every(con => {
         let values = con.scope.map(v => assignment[vars.indexOf(v)]);
         return con.rel(...values);
      });
   }
   function rDfs(ind,rest){
      if(rest.length > 0){
         for(let x in rest.pop().domain){
            assignment[ind] = x;
            if(rDfs(--ind,rest))
               return true;
         }
         return false;
      }
      else return check();
   }
   return assignment;
}
  