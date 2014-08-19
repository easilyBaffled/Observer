/** @jsx React.DOM */
var Campaign = React.createClass({displayName: 'Campaign',
  handle_campaign_click: function(click_event) {
    $('.menu_expanded').trigger('click');
    var target = $(click_event.target);
    if($('.med_campaign') && !target.hasClass('med_campaign')){
        $('.med_campaign').trigger('click');
    }
    var parent_column = target.parent();
    var sibling_column = parent_column.siblings();
    var column_side = parent_column.attr('class');
    var sibling_side = column_side == 'left'? 'right': 'left';
    sibling_column.toggleClass('column_shift_'+sibling_side);

    target.toggleClass('med_campaign');
    target.toggleClass('med_'+column_side);

    target.prevAll().toggleClass( "previous_campaign" );
  },
  render: function() {
  	var cx = React.addons.classSet;
  	var status = this.props.data['status'];
	var campaign_classes  = cx({
		'campaign'  : true,
		'running'   : this.props.data['status'] === 'running',
		'paused'    : this.props.data['status'] === 'paused',
		'done'      : this.props.data['status'] === 'done',
	});
    return React.DOM.div({className: campaign_classes, onClick: this.handle_campaign_click});
  }
});