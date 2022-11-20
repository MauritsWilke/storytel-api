# <img src="./static/logo.svg" height="27px"> Storytel API
An unofficial wrapper for the [Storytel][storytel] API written in TS.\
This project is still in development and I don't recommend using it untill v1 is released. The project isn't on NPM yet, so if you want to use the current version you'll have to clone it.

## 💡 How to use
To use storytel-api, first install it from NPM:
```shell
 $ npm i storytel-api
```

Import it and create a client, this does require you to have an [account][signup].

```ts
const Storytel = import "storytel-api";
const client = new Storytel();

const user = await client.signIn("email", "password");
const bookshelf = await user.getBookshelf();
console.log(`Your last book was ${bookshelf[0].title}`);
```
I am still working on documentation but haven't found anything that suits my needs (TypeDoc and I didn't get along). If anyone has suggestions feel free to [contact me][portfolio]!

## 💻 Developing
To help developing this project, please [contact me][portfolio].
I am working on a small guide but it's not my main priority.

## ✔ To-do and planned features
- [ ] Write proper documentation
- [ ] Audiobook features
	- [ ] Play
	- [ ] Pause
	- [ ] Skip
	- [ ] Set and get bookmark

Features with less priority:
- [ ] Editing device type (through client class)
- [ ] Editing user info
	- [ ] Changing password
	- [ ] Changing username
- [ ] Leaving reviews
	- [ ] Editing reviews
	- [ ] Deleting reviews

<!-- LINKS -->
[storytel]:https://www.storytel.com/
[signup]:https://www.storytel.com/signup/7717
[portfolio]:https://www.mauritswilke.com/
[mitmproxy]:https://mitmproxy.org/