export const OAuthOptions = {
	authUrl: 'https://login.staging.dnevnik.ru/oauth2',
	grantUrl: 'https://api.staging.dnevnik.ru/v1/authorizations',
	scope: 'Avatar,FullName,Roles',	
	redirectUrl: '//localhost:9000/oauth.html',
}

export const APIoptions = {	
	base: 'https://api.staging.dnevnik.ru/v1/',
}

export const PromoOptions = {	
	url: 'http://localhost:9000',
	server: 'https://staging.dnevnik.ru',
	cdn: 'https://ad.csdnevnik.ru/special/staging/kagocel-2016/',
	doctorName: 'Цельс',
	bgClick: 'https://gderu.hit.gemius.pl/lshitredir/id=NDVQe81U5z1SAAeq0TS2zn14HwEGQq8T1eq3nO99mVz.07/fastid=euaruvwbdztzrdkqeuitzelbuznw/stparam=xairorftsx/url=http://www.kagocel.ru/promo/?utm_source=dnevnik.ru&utm_medium=&utm_campaign=01.09.2016_31.10.2016_BackgroundBonus-&utm_term=BackgroundBonus&utm_content=1472478538',

}

export const CommentsOptions = {	
	pageSize: 15,
	adminId: [
		'1000005031742'
	],
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
}
