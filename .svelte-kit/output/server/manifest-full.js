export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","_redirects","assets/images/image_round_2.png","assets/images/mathcalO.svg","favicon.ico"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon"},
	_: {
		entry: {"file":"_app/immutable/start-5cd903a9.js","imports":["_app/immutable/start-5cd903a9.js","_app/immutable/chunks/index-9df96e65.js","_app/immutable/chunks/singletons-d371d5b0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
