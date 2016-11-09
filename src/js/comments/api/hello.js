import { OAuthOptions, APIoptions, PromoOptions } from 'appSettings';

const isMobile = (function() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		return true;
	} else {
		return false;
	}
})();

let dnevnik;
let appKey;

function init(o){

	appKey = o.apiKey;
	const provider = 'comments' + appKey.substr(0, 5);

	hello.init({
		[provider]: {
			name: provider,

			oauth: {
				version: 2,
				auth: OAuthOptions.authUrl,
				grant: OAuthOptions.grantUrl,
			},

			// Refresh the access_token once expired
			refresh: true,

			scope: {
				'basic': OAuthOptions.scope,
			},

			scope_delim: ' ',

			base: APIoptions.base,
		}
	});

	const options = {
		display: isMobile ? 'page' : 'popup',
		redirect_uri: isMobile ? window.location.href.replace(/\#.*/g, '') : OAuthOptions.redirectUrl,
	};

	hello.init({
		[provider] : appKey,
	},options);

	dnevnik = hello(provider);
}

function getToken(){
	const response = dnevnik && dnevnik.getAuthResponse();

	if (!response){
		return false;
	}

	if (appKey !== response.client_id){
		return false;
	}

	return response.access_token;
}

export default {
	init: (o) => init(o),
	login: () => dnevnik.login(),
	logout: () => dnevnik.logout(),
	getToken: getToken,
};
