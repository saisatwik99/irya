var codropsEvents = {
	'12-21-2019' : '<a href="https://www.google.com/" target="_blank">Great American Smokeout</a>',
	'12-13-2019' : '<span>Ashura [An example of an complete date event (11-13-2013)]</span>',
	'12-11-2019' : '<a href="https://www.google.com/" target="_blank">Remembrance Day (Canada)</a>',
	'12-04-2019' : '<span>Islamic New Year</span>',
	'12-03-2019' : '<a href="https://www.google.com/" target="_blank">Daylight Saving Time Ends</a>',
	'12-01-2019' : '<span>All Saints Day</span>',
	'TODAY' : '<span>Today</span>',
	'10-16-2019': ['<a href="">event one</a>', '<span>event two</span>']
};
		$(function() {
		
			var cal = $( '#calendar' ).calendario( {
					onDayClick : function( $el, $contentEl, dateProperties ) {

						for( var key in dateProperties ) {
							console.log( key + ' = ' + dateProperties[ key ] );
						}

					},
					caldata : codropsEvents
				} ),
				$month = $( '#custom-month' ).html( cal.getMonthName() ),
				$year = $( '#custom-year' ).html( cal.getYear() );

			$( '#custom-next' ).on( 'click', function() {
				cal.gotoNextMonth( updateMonthYear );
			} );
			$( '#custom-prev' ).on( 'click', function() {
				cal.gotoPreviousMonth( updateMonthYear );
			} );
			$( '#custom-current' ).on( 'click', function() {
				cal.gotoNow( updateMonthYear );
			} );

			function updateMonthYear() {				
				$month.html( cal.getMonthName() );
				$year.html( cal.getYear() );
			}

			// you can also add more data later on. As an example:
			/*
			someElement.on( 'click', function() {
				
				cal.setData( {
					'03-01-2013' : '<a href="#">testing</a>',
					'03-10-2013' : '<a href="#">testing</a>',
					'03-12-2013' : '<a href="#">testing</a>'
				} );
				// goes to a specific month/year
				cal.goto( 3, 2013, updateMonthYear );

			} );
			*/
		
		});
