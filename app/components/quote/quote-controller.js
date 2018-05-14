function QuoteController(){

    var qs = new QuoteService()
    
    function drawQuote(quote){
        var template = ""
        template += `
        <div class="q-words">
        <p>${quote.quote}</p>
        </div>
        <div class="q-author">
        <h5>${quote.author}</h5>
        </div>
        `
    document.getElementById('quote').innerHTML = template
    }

    qs.getQuote(drawQuote)

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
    })
    
  
}