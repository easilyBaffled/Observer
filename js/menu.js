/** @jsx React.DOM */
var Menu = React.createClass({displayName: 'Menu',
    getInitialState: function() {
    	return {
            view_state: this.props.view_state,
    		menu_expanded: this.props.menu_expanded
    	}
    },
    handle_menu_click: function() {
    this.setState({
                menu_expanded: !this.state.menu_expanded
            });
    },
    render: function() {
    	var cx = React.addons.classSet;
    	var menu_classes  = cx({
    		'menu': true,
    		'menu_expanded': this.state.menu_expanded,
    	});
    	var menu_elements;
    	if(this.state.menu_expanded){
    		menu_elements = Menu_Buttons({view_state: this.state.view_state})
    	} else {
    		menu_elements = React.DOM.span({className: "handle"})
    	}
        return (React.DOM.div({className: menu_classes, onClick: this.handle_menu_click}, 
                    menu_elements
        	    ));
  }
});