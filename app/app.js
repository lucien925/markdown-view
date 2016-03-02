import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';

class Output extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "###heade"};
		this.updateValue = this.updateValue.bind(this);
	}
	getRawOutput(value) {
		return marked(value, {sanitize: true});
	}
	updateValue(modiValue) {
		this.setState({
			value: modiValue
		});
		let rawOuput = this.getRawOutput(modiValue);
		this.refs.output.innerHTML = rawOuput;

	}

	render() {
		return (
				<div className="row">
					<div className="col-sm-6">
						<Input value = { this.state.value } updateValue = { this.updateValue }/>
					</div>
					<div className="col-sm-6">
						<p ref="output"></p>
					</div>
				</div>
			)
	}
}

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.update = this.update.bind(this);
	}
	update() {
		let value = this.refs.input.value;
		this.props.updateValue(value);
	}
	render() {
		return (<textarea className="form-control" rows="22" ref="input" value={ this.props.value } onChange={ this.update }></textarea>)
	}
}

ReactDOM.render(<Output />, document.getElementById('container'));