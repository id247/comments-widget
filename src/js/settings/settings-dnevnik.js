export const OAuthOptions = {
	authUrl: 'https://login.dnevnik.ru/oauth2',
	grantUrl: 'https://api.dnevnik.ru/v1/authorizations',
	scope: 'Avatar,FullName,Roles',	
	redirectUrl: 'https://ad.dnevnik.ru/promo/oauth2',
}

export const APIoptions = {	
	base: 'https://api.dnevnik.ru/v1/',
}

export const PromoOptions = {	
	url: 'https://ad.dnevnik.ru/promo/sportik-parents',
	server: 'https://dnevnik.ru',
	cdn: 'https://ad.csdnevnik.ru/special/staging/sportik-landing/',
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
}

export const CommentsOptions = {	
	pageSize: 15,
	adminId: [
		'1000005031742',
		'1000004986365',
	],
	
}
