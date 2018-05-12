function QuoteController(){

    var qs = new QuoteService()
    
    function drawQuote(quote){
        var template = ""
        template += `
        <h1>${quote.quote}</h1>
        <h2>${quote.author}</h2>
        `
    document.getElementById('quote').innerHTML = template
    }

    qs.getQuote(drawQuote)

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
	})
}