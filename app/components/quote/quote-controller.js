function QuoteController(){

    var qs = new QuoteService()
    
    function drawQuote(quote){
        var template = ""
        template += `
        <div class="q-words col-12">
        <p>${quote.quote}</p>
        </div>
        <div class="q-author col-12">
        <h6>${quote.author}</h6>
        </div>
        `
    document.getElementById('quote').innerHTML = template
    }

    qs.getQuote(drawQuote)

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
    })
    
  
}