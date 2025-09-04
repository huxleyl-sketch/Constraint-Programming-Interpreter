X := {x1, x2, x3}         
C := {c1}
R := {=,r1}

c1 := {[x1, x2, x3], r(x1, x2, x3)}  {[x1, x2, x3], r}
equal(A,B) <> equal(A,A)
equal(...[H|T]) <> :(A,B) :- [H|T] | equal(A,B)
[H|T]
r2(A,B) <- /r1(A,B)

//seating arrangement example
//C := {c1}
//X := {x1,x2,x3,x4,x5,x6}
//R := {table,equal,notEqual,like}

people := [bart,homer,marge,lisa]
(s1,s2,s3,s4) :- people


arrangement := {[s1,s2,s3,s4],(/equal(s1,s2,s3,s4), table(s1,s2) , table(s3,s4))}

equal(...X) <- :(A,B) :- X | equal(A,B)
table(...A) <- :(X,Y) :- A | like(X,Y) , /equal(X,Y)

like(bart,X) <> X :- [homer,marge]
like(homer,X) <- X :- [marge,bart]
like(marge,X) <- X :- [lisa,bart]
like(lisa,X) <- X :- [bart,homer]