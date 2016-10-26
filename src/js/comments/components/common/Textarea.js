import React from 'react';

const Textarea = (props) => (
	<textarea 
		className={( (props.mixClass ? props.mixClass : '') + ' comments-textarea')}
		cols={props.cols}  
		rows={props.rows}  
		id={props.id}  
		name={props.name} 
		value={props.value} 
		placeholder={props.placeholder} 
		onChange={props.onChangeHandler}
	/>
);

Textarea.propTypes = {
	mixClass: React.PropTypes.string,
	value: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onChangeHandler: React.PropTypes.func,

	name: React.PropTypes.string.isRequired,
	cols: React.PropTypes.string,
	rows: React.PropTypes.string,
};

export default Textarea;
