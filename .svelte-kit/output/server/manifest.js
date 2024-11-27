export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CNAME","_redirects","assets/content/what-makes-exciting-research.md","assets/images/image_round_1.png","assets/images/image_round_2.png","assets/images/mathcalO.svg","favicon.ico"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.5e6088b6.js","imports":["_app/immutable/entry/start.5e6088b6.js","_app/immutable/chunks/index.3ac5e79f.js","_app/immutable/chunks/singletons.0eb488d0.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6a747fba.js","imports":["_app/immutable/entry/app.6a747fba.js","_app/immutable/chunks/index.3ac5e79f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
