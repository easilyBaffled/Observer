/** @jsx React.DOM */
var Observer = React.createClass({
    getInitialState: function() {
        return {
        	Campaign_View: 'minimal' //Medium, Maximum
        }
    },
    render: function() {
        var left_campaigns = [
            {
                name: 'campaign a',
                status: 'running',
                flight_time: 1,
                budget: 2,
            },
            {
                name: 'campaign b',
                status: 'done',
                flight_time: 1,
                budget: 2,
            },
            {
                name: 'campaign c',
                status: 'paused',
                flight_time: 1,
                budget: 2,
            }
        ]
        var right_campaigns = [
            {
                name: 'campaign d',
                status: 'done',
                flight_time: 1,
                budget: 2,
            },
            {
                name: 'campaign e',
                status: 'paused',
                flight_time: 1,
                budget: 2,
            },
            {
                name: 'campaign f',
                status: 'running',
                flight_time: 1,
                budget: 2,
            },
        ]
        return (
        	    <div className="app">
    			    <Menu view_state={this.state.Campaign_View} menu_expanded={false} ></Menu>
    			    <span>
    			    <Campaign_Column position='left' campaign_list={left_campaigns}></Campaign_Column>
                    <Campaign_Column position='right' campaign_list={right_campaigns}></Campaign_Column>
                    </span>
    		    </div>
    		    );
    }
});
React.renderComponent(<Observer name="John" />, document.getElementById("container"));