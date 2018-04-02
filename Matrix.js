class Matrix{
  constructor(nrow,ncol){
    this.nrow = nrow;
    this.ncol = ncol;
    this.data = this.map((x,y) => 0);
  }
  map(fun){
    for(let i = 0;i<this.nrow;i++){
      for(let j = 0;j<this.ncol;j++){
        this[i][j] = fun(i,j);
      }
    } 
  }

}