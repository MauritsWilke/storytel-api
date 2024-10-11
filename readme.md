# <img src="./static/logo.svg" height="27px"> Storytel API
An unofficial wrapper for the [Storytel][storytel] API written in TypeScript.\
This project is still in development and I don't recommend using it untill v1 is released. There is a version of this project on NPM to claim the package name, but I don't recommend using it for projects.

### 🚦 Project status
I just picked this project back up, and it seems that Storytel has reworked their API during my hiatus. I will be reworking most of the code over the coming weeks and hopefully create a desktop app after!

## 💡 How to use
To use storytel-api, first install it from NPM:
```shell
 $ npm i storytel-api
```

Import it and create a client, this does require you to have an [account][signup].

```ts
import Storytel from "storytel-api";
const client = new Storytel();

const user = await client.signIn("email", "password");
const bookshelf = await user.getBookshelf();
console.log(`Your last book was ${bookshelf[0].title}`);
```
I am still working on documentation but haven't found anything that suits my needs (TypeDoc and I didn't get along). If anyone has suggestions feel free to [contact me][portfolio]!

## 💻 Developing
To help developing this project, please [contact me][portfolio].
I am working on a small guide but it's not my main priority. There is a short breakdown on my workflow in [contributing.md](./contributing.md)

## 🗺 Roadmap
I keep track of the roadmap in a local file, so this may not always be up-to-date.
- [ ] Rework the entire code to work with the new API structure
- [ ] Finish core functionality required for a desktop app\
 This includes downloading ebooks and audiobooks, listening to audiobooks and changing profile settings.
- [ ] Add non-essential functionality to the wrapper\
I still haven't decided on if and how I am going to do this, as homepage content and reviews don't really fit the use case for this wrapper.
- [ ] Write proper documentation\
This is at the bottom of the list because I don't wanna do it, but the code will probably already have description comments during development (:


<!-- LINKS -->
[storytel]:https://www.storytel.com/
[signup]:https://www.storytel.com/signup/7717
[portfolio]:https://www.mauritswilke.com/
[mitmproxy]:https://mitmproxy.org/