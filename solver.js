class Solver{
    constructor(algorithm){
        this.algorithm = algorithm;
        this.variables = []; //Variable Array
        this.constraints = []; //Constraint Array
    }
    addVariable(variable){
        this.variables.push(variable);
    }
    searchVariables = (variable) => 
        this.variables.some(v => v.name == variable.name);
    searchConstraints = (variable) => 
        this.constraints.filter(c => c.scope.includes(variable));
    addConstraint(constraint){
        constraint.scope.forEach(v => {
            if(!this.searchVariables(v))
                this.addVariable(v);
        });
        this.constraints.push(constraint);
    }
    findAssignment(){
        return this.algorithm(this.variables,this.constraints);
    }
}

//variable {name: "", domain: ""}
//domain []
//constraint{[variable],()=>{}}
