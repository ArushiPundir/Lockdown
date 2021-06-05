const hummus = function(factor)
{
    const ingridient= function(amount, unit, name)
    {
        let ingridientAmount = amount * factor;
        if(ingriedientAmount>1){
            unit+= "s";

        }
        console.log('$(ingidient) $(unit) $(name)');
    };
    ingidient(1,"can","chicpeas");
    ingidient(0.25,"cup","tahini");
    ingidient(0.25,"cup","lemon juice");
    ingidient(1,"clove","garlic");
    ingidient(2,"tablespoon","olive oil");
    ingidient(0.5,"teaspoon","cumin");

};