# eeSoymilk MEVN Fullstack Website

This is Wilson's personal website.

## Installation

Use a package manager, npm or yarn, to install the node modules needed in **BOTH `.\client` AND `.\server` FOLDER**.

```shell
npm install
```

```shell
yarn
```

## Setting Up Environment Variables

> Remember to replace all `.env` files with your variables.

### In `.\client` folder:

Create `.env.development` file.

```=
VITE_VUE_APP_AUTH0_DOMAIN=dev-t00jyl8z.us.auth0.com
VITE_VUE_APP_AUTH0_CLIENT_ID=TiIGHWqVIqGQnkNlmppCOcoTGrfskJvy
VITE_VUE_APP_AUTH0_AUDIENCE=https://eesoymilk-mevn-api.com
VITE_VUE_APP_AUTH0_CALLBACK_URL=http://localhost:4040
VITE_VUE_APP_API_SERVER_URL=https://eesoymilk-mevn.df.r.appspot.com
```

Create `.env.production` file.

```=
VITE_VUE_APP_AUTH0_DOMAIN=dev-t00jyl8z.us.auth0.com
VITE_VUE_APP_AUTH0_CLIENT_ID=TiIGHWqVIqGQnkNlmppCOcoTGrfskJvy
VITE_VUE_APP_AUTH0_AUDIENCE=https://eesoymilk-mevn-api.com
VITE_VUE_APP_AUTH0_CALLBACK_URL=https://eesoymilk-mevn.web.app
VITE_VUE_APP_API_SERVER_URL=https://eesoymilk-mevn.df.r.appspot.com
```

### In `.\server` folder:

Create `.env` file.

```=
PORT=8080
CLIENT_ORIGIN_URL=
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
GOOGLE_PROJECT_ID=
```

## Development

### In `.\client` folder, run

```shell
yarn dev
```

### In `.\server` folder, run

```shell
yarn dev
```

## Dcard Homework

### Why I use TypeScript

I'm not blindy following fashions; rather, I really do find TS more compelling and useful. I also code in C/C++, so having little to nothing types in JS is kind of weird to me. It not only catch silly bugs but also increase my productivity as a whole.

### Frontend

#### Disclaimer

I have to apologize to all interviewers viewing my homework. Since this is a Vue project rather than a React project and it's not a stand-alone project but an integration to my original website. I know it looks like me making excuses, but I do wanna make some points regarding to these concerns.

1. To be honest, I barely learn any React but I am really eager to get thi intern. With the amount of time I have left, I had no choice but to use an alternative to React.
2. I will, and am planning to, learn React with NEXT.
3. I prefer using a framework I am familiar with, rather than rush to React, to better showcase my web development skills.
4. I do want to further improve these functionalities done in the homework so making them an integration to my website helps.

And since it's an integration to my original website. The base url for this homework is `https://eesoymilk-mevn.web.app/dcard/frontend`.

#### Client View

> [source code:`/client/src/views/DcardFrontendView.vue`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/views/DcardFrontendView.vue)

From a client's perspective, I intended to make this whole project fairly simple; that is, a clean UI.<br />So rather than type in the url directly, you can just search the user and their repo page will show up.

#### User's Repos View

> [source code:`/client/src/views/ReposView.vue`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/views/ReposView.vue)

I didn't put much except for the ones that are instructed. One extra thing I add is the profile picture for the user.

#### Repo View

> [source code:`/client/src/views/RepoView.vue`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/views/RepoView.vue)

This one is also built as instructed.

#### API Calls

> [source code:`/client/src/services/repos.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/services/repos.ts)

I use fetch api to manipulate all API calls. To further simplify things, I made it a class with static functions that do all the jobs for me and also separeated in a `.ts` file.

#### How to Start This App

Go to `./client` folder and start the Vite app on port `4040`.

```shell
yarn dev
```

Then, go to `http://localhost:4040/`.

#### How to Interact with This App

You can start your own front-end and go to `http://localhost:4040/`.
Better yet, you can just visit my website https://eesoymilk-mevn.web.app/dcard/frontend.

Then, you can type in username and search, or you can directly type in the username after the base url. For example, if you want to see my repos, go to this link: https://eesoymilk-mevn.web.app/dcard/frontend/users/qiyoudaoyi/repos

### Backend

#### Disclaimer

I have to apologize to all interviewers viewing my homework. Since it's not a stand-alone project but an integration to my original website. The base url for each of the api endpoint is

`https://eesoymilk-mevn.df.r.appspot.com/api/shortUrl`

#### DB and Server Hosting

I use **MongoDB Atlas** for my database and connecting it with all the codes I uploaded on **Google Cloud App Engine**.

#### Third-party Dependencies I Used

- Express
  To make life simplier so that I don't need to touch the original `http` module.
- Mongoose
  Manipulating with my DB through a more readable library.
- shortid
  Generate shortened url for incoming requests.
- dotenv
  Avoid hard-coded information on the source code.
- Google Cloud Secret Manager
  Protect people from accessing my DB.
- JEST
  JS testing library.
- supertest
  Make testing http requests easier.

#### How I built it

This homework is a simple CRUD implementation and some testings. To make the project more organized. I've written in total 5 `.ts` files relating to this homework. Let's go through them one by one.

- [`app.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/server/src/app.ts), and [`index.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/server/src/index.ts)
  Express and middlewares setup, trvial stuff.
- [`./models/shortUrl.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/server/src/models/shortUrl.ts)
  Defining schemas for short url.
- [`./routes/api/shortUrl.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/server/src/routes/api/shortUrl.ts`)
  Implementation of each of the CURD operation,
- [`./routes/api/shortUrl.test.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/server/src/routes/api/shortUrl.test.ts`)
  Unit-testing using JEST and supertest. Let me be honest here, I do not have prior experience of writing testing for an app. This is my first time doing it.

#### Constrains and Error Handlings

- You cannot shorten url that is already shortened.
- You cannot shorten url that cannot be accessed.
- Respond with status 404 if someone tries to access non-existing short url.

#### Handling Multiple Requests

Since I'm using async/await, most of the problems have been solved for me. More about it on JavaScript callstack topic.

#### How to Start This App

You can't basically, unless you are me. Because to start the password to my DB is held by Google Cloud Secret Manager, and only my google account can access them. However, I built a frontend app where you can interact with my api through my endpoint. You can go to the link below to play with it.

https://eesoymilk-mevn.web.app/dcard/backend

#### How to Interact with This App

Like I said, you can go to the link directly. But, if you prefer the traditional `crul`, you can also do it as demonstrate below.

```shell
# Upload URL API
> curl -X POST -H "Content-Type:application/json" https://eesoymilk-mevn.df.r.appspot.com/api/shortUrl -d '{
"url": "<original_url>",
"expireAt": "<Date Object>"
}'

# Redirect URL API
> curl -L -X GET http://localhost/<url_id> => REDIRECT to original URL
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
