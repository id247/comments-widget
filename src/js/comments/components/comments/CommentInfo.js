import React from 'react';
import { PromoOptions } from 'appSettings';

const CommentInfo = (props) => {
	const date = new Date(props.comment.CreatedDate).toLocaleString('ru-RU');
	return(
		<div className="comment__info">

			<span className="comment__name">
				{
					props.user.id !== 0
					?
					(

					<a href={PromoOptions.server + '/user/user.aspx?user=' + props.user.id} className="comment__name-href">
						{props.user.firstName} 
						{' '}
						{props.user.lastName} 
					</a>
					)
					:
					(
					<span>
						{props.user.firstName} 
						{' '}
						{props.user.lastName} 
					</span>
					)
				}
				{' '}
				{(props.isAdmin ? '(Администратор)' : '')}
			</span>
			{' / '}
			<span className="comment__time">{date}</span>

		</div>
	)
};

CommentInfo.propTypes = {
	mixClass: React.PropTypes.string,
	user: React.PropTypes.object,
	isAdmin: React.PropTypes.bool,
	comment: React.PropTypes.oneOfType([
    	React.PropTypes.bool,
    	React.PropTypes.object,
    ]).isRequired,
	
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default CommentInfo;
