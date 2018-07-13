var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    render: function() {
        console.log('Rendering...')
        return React.createElement('div', {},
          React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Wynik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    },
    
});

var CounterPower = React.createClass({
    getInitialState: function() {
        return {
            counter: 3
        };
    },

    power: function() {
        this.setState({
            counter: Math.pow(this.state.counter, 2)
        });
    },

    sqrt: function() {
        this.setState({
            counter: Math.sqrt(this.state.counter, 2)
        });
    },

    render: function() {
        return React.createElement('div', {},
          React.createElement('button', {onClick: this.sqrt}, 'square'),
            React.createElement('span', {}, 'Wynik: ' + this.state.counter),
            React.createElement('button', {onClick: this.power}, 'power')
        );
    }
});

var MultiplyDivider = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },

    divide: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.divide}, '/2'),
            React.createElement('span', {}, 'Wynik: ' + this.state.counter),
          React.createElement('button', {onClick: this.multiply}, '*2')
        );
    }
});

var GoldenCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 1.618
        });
    },

    divide: function() {
        this.setState({
            counter: this.state.counter / 1.618
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.divide}, '/1,618'),
            React.createElement('span', {}, 'Wynik: ' + this.state.counter),
          React.createElement('button', {onClick: this.multiply}, '*1,618')
        );
    }
});