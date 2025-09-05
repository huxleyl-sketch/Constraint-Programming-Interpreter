let solver = new Solver(Dfs);
let d = ["red","green","blue","yellow"];
let v1 = {name: "v1", domain: d};
let v2 = {name: "v2", domain: d};
let v3 = {name: "v3", domain: d};
let v4 = {name: "v4", domain: d};
let e1 = [v1,v2];
let e2 = [v1,v3];
let e3 = [v2,v3];


let nequal = (...A) => A.filter((v) => v != A[0]).length != 0;

let c1 = {scope: e1, rel: nequal};
let c2 = {scope: e2, rel: nequal};
let c3 = {scope: e3, rel: nequal};

solver.addConstraint(c1);
solver.addConstraint(c2);
solver.addConstraint(c3);
solver.addVariable(v4);

console.log(solver.findAssignment());

//variable {name: "", domain: ""}
//domain []
//constraint{scope: [variable],()=>{}}