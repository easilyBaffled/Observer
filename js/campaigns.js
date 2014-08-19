/** @jsx React.DOM */
var Campaigns = React.createClass({displayName: 'Campaigns',
  render: function() {
    return (React.DOM.div(null, 
    	        Campaign_Column({className: "left"}), 
    	        Campaign_Column({className: "right"})
    	    ));
  }
});