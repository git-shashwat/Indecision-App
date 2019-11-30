class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Content' : 'Show Content'}</button>
                {this.state.visibility ? <p>Hey. These are some details you can now see!</p> : undefined}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleMessage = (e) => {
//     visibility = !visibility;
//     if (visibility) {
//         e.target.textContent = 'Hide Details';
//     } else {
//         e.target.textContent = 'Show Details';
//     }
//     render();
// }

// const $appWindow = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleMessage}>Show Details</button>
//             {visibility ? <p>Hey. These are some details you can now see!</p> : undefined}
//         </div>
//     );

//     ReactDOM.render(template, $appWindow);
// };

// render();