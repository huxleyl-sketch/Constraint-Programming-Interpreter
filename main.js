let solver = new Solver(Dfs);
let d = [1,2,3,4];
let v1 = {name:"v1", domain: d};
let v2 = {name:"v2", domain: d};
let r1 = (A,B) => A+B == 5;
let con = {scope: [v1,v2], rel: r1};
solver.addConstraint(con);
console.log(solver.findAssignment());

//variable {name: "", domain: ""}
//domain []
//constraint{scope: [variable],()=>{}}