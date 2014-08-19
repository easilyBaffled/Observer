/** @jsx React.DOM */
var Campaign_Column = React.createClass({displayName: 'Campaign_Column',
  render: function() {
  	var campaigns = this.props.campaign_list.map(function(campaign_data) {
        return Campaign({key: campaign_data[name], data: campaign_data})
  	});
    return (React.DOM.span({className: this.props.position}, 
                campaigns
    	    ));
  }
});