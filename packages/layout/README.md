<!--header-->

<p align="center">
  <a href="https://rocket.chat" title="Rocket.Chat">
    <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" />
  </a>
</p>

# `@rocket.chat/layout`

> layout

---

![npm@latest](https://img.shields.io/npm/v/@rocket.chat/layout/latest?style=flat-square) ![npm@next](https://img.shields.io/npm/v/@rocket.chat/layout/next?style=flat-square) ![npm downloads](https://img.shields.io/npm/dw/@rocket.chat/layout?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@rocket.chat/layout?style=flat-square)

![deps](https://img.shields.io/david/RocketChat/fuselage?path=packages%2Flayout&style=flat-square) ![peer deps](https://img.shields.io/david/peer/RocketChat/fuselage?path=packages%2Flayout&style=flat-square) ![dev deps](https://img.shields.io/david/dev/RocketChat/fuselage?path=packages%2Flayout&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@rocket.chat/layout?style=flat-square)

<!--/header-->

## Install

<!--install-->

Add `@rocket.chat/layout` as a dependency:

```sh
npm i @rocket.chat/layout

# or, if you are using yarn:

yarn add @rocket.chat/layout
```

<!--/install-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/RocketChat/fuselage/issues).

<!--/contributing(msg)-->

### Building

As this package dependends on others in this monorepo, before anything run the following at the root directory:

<!--yarn(build)-->

```sh
yarn build
```

<!--/yarn(build)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](<https://en.wikipedia.org/wiki/Lint_(software)>).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-and-fix)-->

```sh
yarn lint-and-fix
```

<!--/yarn(lint-and-fix)-->

### Running tests

Whenever possible, add tests to describe exactly what your code do. You can run them by yourself:

<!--yarn(test)-->

```sh
yarn test
```

<!--/yarn(test)-->
