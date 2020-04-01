for(i = 1; i <= 10 ; i ++)
{
    let x = '';

    for(j= 1; j<= i ; j ++)
    {
    
        if (typeof x !== 'undefined')
        {
                x = x + " " +j;
        }
      
       
    }
    
    console.log(x);  
}