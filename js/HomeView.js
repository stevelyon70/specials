var HomeView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
       this.el = $('<div/>');	   
        this.el.on('click', '.newsearch', this.findNew);
        this.el.on('click', '.usedsearch', this.findUsed);		
		this.setDefault();
    };

	this.setDefault = function(){
		this.findNew();			
	}

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };

	this.findUsed = function() {		
		$('button.usedsearch').addClass( "active" );
		$('button.newsearch').removeClass( "active" );
        store.findByName('used', function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };
	
	this.findNew = function() {		
		$('button.newsearch').addClass( "active" );
		$('button.usedsearch').removeClass( "active" );
        store.findByName('new', function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };
    this.initialize();
}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());