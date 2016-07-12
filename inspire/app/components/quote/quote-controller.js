(function(){

    var quoteService = new QuoteService();
    
    quoteService.getQuote(function(res){
        console.log(res);
        
        $('#quote').append(`
            <h2>Quote of the Day</h2>
            <p>${res.quote}</p>
        `)

    })
    
 
    
}())