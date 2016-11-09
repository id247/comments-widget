import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import Router 			from '../components/Router';
import Loading 			from '../components/loading/Loading';
import ErrorMessage 	from '../components/error/ErrorMessage';

class Root extends React.Component {

	render() {		
		const { props } = this;

		return (
			<Provider store={this.props.store}>		
				<section className="comments">	
				
					<h3 className="comments__title">
						{props.commentsTitle}
					</h3>
		
					<Router />
					
					<Loading 
						mixClass="comments__loader"
						visibleClass="comments-loader--visible"
					/>
					
					<ErrorMessage 
						mixClass="comments__error"
					/>
				</section>
			</Provider>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	commentsTitle: state.comments.settings.commentsTitle,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Root);

