/** @jsx React.DOM */
var Campaign = React.createClass({
  render: function() {
  	var cx = React.addons.classSet;
  	var status = this.props.data['status'];
	var campaign_classes  = cx({
		'campaign': true,
		this.props.data['status'] : true
	});

    return <div className={campaign_classes}></div>;
  }
});