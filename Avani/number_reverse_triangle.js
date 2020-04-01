//let x = ''; 
let rows=5, start=1;
for(i=start; i<=rows; i++)
{
   let x = '';     //need to ask
   let y = start;
    for(j=rows; j>=i; j--)
    {
    
      
      x = x + " " +( y++);
    }
        
   console.log(x);
}
   //console.log(x);