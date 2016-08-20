// NOTE To be removed asap (after we get a backend running)
const dummyPosts = [
	{
		title: "first post",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis leo sit amet ex tristique maximus. Suspendisse lobortis risus justo, a mattis lorem auctor ac. Duis ac diam nulla. Mauris sodales dignissim velit vitae pulvinar. Donec ullamcorper ante velit, a gravida magna tristique et. Etiam nec scelerisque nibh. Nunc congue consectetur ornare. Donec elementum lobortis faucibus. Cras eleifend, metus ac viverra euismod, felis nibh lacinia nulla, sed semper sapien purus ut neque. Vivamus malesuada vulputate magna in condimentum. Vivamus euismod tellus sollicitudin sodales auctor. Nunc hendrerit enim enim, sit amet accumsan lacus suscipit quis. Sed sollicitudin ex convallis vulputate vulputate."
	},
	{
		title: "trying out a second one",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis leo sit amet ex tristique maximus. Suspendisse lobortis risus justo, a mattis lorem auctor ac. Duis ac diam nulla. Mauris sodales dignissim velit vitae pulvinar. Donec ullamcorper ante velit, a gravida magna tristique et. Etiam nec scelerisque nibh. Nunc congue consectetur ornare. Donec elementum lobortis faucibus. Cras eleifend, metus ac viverra euismod, felis nibh lacinia nulla, sed semper sapien purus ut neque. Vivamus malesuada vulputate magna in condimentum. Vivamus euismod tellus sollicitudin sodales auctor. Nunc hendrerit enim enim, sit amet accumsan lacus suscipit quis. Sed sollicitudin ex convallis vulputate vulputate."
	},
	{
		title: "what is this?",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis leo sit amet ex tristique maximus. Suspendisse lobortis risus justo, a mattis lorem auctor ac. Duis ac diam nulla. Mauris sodales dignissim velit vitae pulvinar. Donec ullamcorper ante velit, a gravida magna tristique et. Etiam nec scelerisque nibh. Nunc congue consectetur ornare. Donec elementum lobortis faucibus. Cras eleifend, metus ac viverra euismod, felis nibh lacinia nulla, sed semper sapien purus ut neque. Vivamus malesuada vulputate magna in condimentum. Vivamus euismod tellus sollicitudin sodales auctor. Nunc hendrerit enim enim, sit amet accumsan lacus suscipit quis. Sed sollicitudin ex convallis vulputate vulputate."
	},
	{
		title: "We are not done even close",
		content: "Pellentesque fermentum mollis odio. Nulla sit amet bibendum mauris. Ut finibus, lorem a accumsan tincidunt, nulla mi interdum ipsum, sed efficitur lacus lacus at nunc. Aenean ac justo in enim placerat luctus. Donec nec neque non purus dignissim tincidunt. Duis vehicula, ipsum malesuada aliquam fringilla, eros lacus vehicula felis, nec pulvinar nisl sem id mi. Ut quis ipsum placerat, dictum eros ut, eleifend lectus. Aenean volutpat metus ac tristique cursus. Vestibulum non feugiat turpis. Aenean eget mi vel enim rhoncus pellentesque. Praesent eget mi ante. Donec et velit eget massa convallis bibendum. Proin eu mi ultricies nisi cursus lobortis."
	},
	{
		title: "Something comes around and goes around",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis leo sit amet ex tristique maximus. Suspendisse lobortis risus justo, a mattis lorem auctor ac. Duis ac diam nulla. Mauris sodales dignissim velit vitae pulvinar. Donec ullamcorper ante velit, a gravida magna tristique et. Etiam nec scelerisque nibh. Nunc congue consectetur ornare. Donec elementum lobortis faucibus. Cras eleifend, metus ac viverra euismod, felis nibh lacinia nulla, sed semper sapien purus ut neque. Vivamus malesuada vulputate magna in condimentum. Vivamus euismod tellus sollicitudin sodales auctor. Nunc hendrerit enim enim, sit amet accumsan lacus suscipit quis. Sed sollicitudin ex convallis vulputate vulputate."
	},
	{
		title: "Am I the last one already?",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis leo sit amet ex tristique maximus. Suspendisse lobortis risus justo, a mattis lorem auctor ac. Duis ac diam nulla. Mauris sodales dignissim velit vitae pulvinar. Donec ullamcorper ante velit, a gravida magna tristique et. Etiam nec scelerisque nibh. Nunc congue consectetur ornare. Donec elementum lobortis faucibus. Cras eleifend, metus ac viverra euismod, felis nibh lacinia nulla, sed semper sapien purus ut neque. Vivamus malesuada vulputate magna in condimentum. Vivamus euismod tellus sollicitudin sodales auctor. Nunc hendrerit enim enim, sit amet accumsan lacus suscipit quis. Sed sollicitudin ex convallis vulputate vulputate."
	}
];

(_ => {

	console.log("Start.");

	const generateBlogPost = (title, content) => {
		// Create a title for the blog post
		const elementTitle = document.createElement("h1");
		const elementTitleText = document.createTextNode(title);
		elementTitle.appendChild(elementTitleText);
		// Generate everything required by the content
		const elementContentContainer = document.createElement("div");
		const elementContentText = document.createTextNode(content);
		elementContentContainer.appendChild(elementContentText);
		// Finally combine all and return them
		const elemetBlogPost = document.createElement("div");
		elemetBlogPost.setAttribute("class", "post");
		elemetBlogPost.appendChild(elementTitle);
		elemetBlogPost.appendChild(elementContentContainer);

		return elemetBlogPost;
	}

	// Initialize the whole base for the blog

	// Insert dummy posts into the world
	const blogPostContainer = document.getElementById("content");

	dummyPosts
		.map(p => generateBlogPost(p.title, p.content))
		.forEach(element => blogPostContainer.appendChild(element));

})();
