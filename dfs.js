//variable {name: "", domain: ""}
//domain []
//constraint{scope: [variable],rel: ()=>{}}
function Dfs(vars, cons){
   let assignment = [];
   check = () => cons.every(con => {
      let values = con.scope.map(v => assignment[vars.indexOf(v)]);
      console.log(con.rel(...values),values);
      return con.rel(...values);
   });
   function rDfs(ind,rest){
      if(rest.length > 0){
         for(x of rest.pop().domain) {
            assignment[ind] = x;
            if(rDfs(ind-1,[...rest])){
               return true;
            }
         }
         return false;
      }
      else return check();
   }
   
   return rDfs(vars.length-1,[...vars]) ? assignment.map((v,i) => [vars[i].name,v]) : false;
}
  