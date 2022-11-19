# <img src="./static/logo.svg" height="27px"> Storytel API
An unofficial wrapper for the [Storytel][1] API written in TS.

## 💡 How to use
To use storytel-api, first install it from NPM:
```bash
 $ npm i storytel-api
```

Import it and create a client, this does require you to have an [account][2].

```js
const Storytel = import "storytel-api";
const client = new Storytel();

const user = client.login("email", "password");
```

## ✔ To-do and planned features
- [ ] Write proper documentation
- [ ] Editing user info
	- [ ] Changing password
	- [ ] Changing username
- [ ] Leaving reviews
	- [ ] Editing reviews
	- [ ] Deleting reviews

<!-- LINKS -->
[1]:https://www.storytel.com/
[2]:https://www.storytel.com/signup/7717