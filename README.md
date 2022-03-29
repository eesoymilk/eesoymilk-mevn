# eeSoymilk MEVN Fullstack Website

This is Wilson's personal website.

## Installation

Use the package, either npm or yarn, to install the node modules needed.

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
VITE_VUE_APP_API_SERVER_URL=http://localhost:8080
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
CLIENT_ORIGIN_URL=https://eesoymilk-mevn.web.app
AUTH0_AUDIENCE=https://eesoymilk-mevn-api.com
AUTH0_DOMAIN=dev-t00jyl8z.us.auth0.com
GOOGLE_PROJECT_ID=98809358238
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

#### Client View

> [source code:`/client/src/views/DcardFrontendView.vue`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/views/DcardFrontendView.vue)

From a client's perspective, I intended to make this whole project fairly simple; that is, a clean UI.<br />So rather than type in the url directly, you can just search the user and their repo page will show up.

#### API Calls

> [source code:`/client/src/services/repos.ts`](https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/services/repos.ts)

I use fetch api to manipulate all API calls. To further simplify things, I made it a class with static functions that do all the jobs for me and also separeated in a `.ts` file.

### Backend

## License

[MIT](https://choosealicense.com/licenses/mit/)
