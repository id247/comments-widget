import React from 'react';

import Button from '../../components/common/Button';

import CommentQuoted from '../../components/comments/CommentQuoted';

import * as commentsFormActions from '../../actions/comments-form';

const FormQuote = (props) => {

	if (!props.quote){
		return false;
	}

	return (
		<div className="comments-form__quote comments-form-quote">

			<div className="comments-form-quote__top">

				<div className="comments-form-quote__title">
					Цитата:
				</div>

				<div className="comments-form-quote__delete-placeholder">

					<Button
						mixClass="comments-form-quote__button"
						color="comments"
						size="s"
						onClickHandler={props.deleteQuoteHandler}
					>
						&times; Отменить цитирование
					</Button>

				</div>

			</div>

			<CommentQuoted 
				mixClass="comments-form-quote__post" 
				comment={props.quote}
			/>
			
		</div>
	)
};


FormQuote.propTypes = {
	quote:  React.PropTypes.oneOfType([
    	React.PropTypes.bool,
    	React.PropTypes.object,
    ]),
	deleteQuoteHandler: React.PropTypes.func.isRequired,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default FormQuote;
