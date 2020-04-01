
let rows=8;
let start=1;

for(i = start; i <= rows ; i ++)
{
    let x = '';
    let y = start;

    for(j= rows; j>= i ; j --)
    {
    
        if (typeof x !== 'undefined')
        {
                x = x + " " + (y++);
        }
      
       
    }
    
    console.log(x);  
}  

for(a = start; a <= rows ; a ++)
{
    let x = '';

    for(c= 1; c<= a ; c ++)
    {
    
        if (typeof x !== 'undefined')
        {
                x = x + " " +c;
        }
      
       
    }
    
    console.log(x);  
}