class Solver{
    constructor(algorithm = ()=>{}){
        this.algorithm = algorithm;
        this.variables = []; //Variable Array
        this.constraints = []; //Constraint Array
    }
    // addVariable(domain){
    //     this.variables.set(`${this.variables.length}`,domain);
    // }
    addVariable(variable){
        this.variables.push(variable);
    }
    searchVariables = (variable) => 
        this.variables.some(v => v[0] = variable.name);
    addConstraint(constraint){
        
        constraint.scope.forEach(v => {
            if(!this.searchVariables(v.name))
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
