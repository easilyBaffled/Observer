/** @jsx React.DOM */
var Menu_Buttons = React.createClass({
    getInitialState: function() {
    	return {
            view_state: this.props.view_state,
    	}
    },
    render: function() {
        var button_descriptions;
        if(this.state.view_state == 'maximum'){
            button_descriptions = ['Mark', 'Send', 'Edit']
        } else {
            button_descriptions = ['$$', 'Time', 'A-Z', '!']
        }
        var buttons = button_descriptions.map(function(button_text) {
            return <button className={button_text}>{button_text}</button>
        });
        return (<div className='menu_buttons_container'>
                    {buttons}
        	    </div>);
  }
});