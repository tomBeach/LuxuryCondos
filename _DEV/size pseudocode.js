condo sizing algorithm

get condo size
condoW
condoH

set LR max/min
LRmaxW = condoW/2           // can't be more than 1/2 of condo width
LRmaxH = condoH             // can't be more than condo height
LRminW = condoW * .33       // must be at least 1/3 condo width
LRminH = condoH * .66       // must be at least 2/3 condo height

if (nextXYWH.W > LRmaxW) {
    nextXYWH.W = LRmaxW
} else if (nextXYWH.W < LRminW) {
    nextXYWH.W = LRminW
}
if (nextXYWH.H > LRmaxH) {
    nextXYWH.H = LRmaxH
} else if (nextXYWH.H < LRminH) {
    nextXYWH.H = LRminH
}





sdf
