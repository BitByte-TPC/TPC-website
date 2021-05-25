# Contributing to TPC-website

I want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Submitting a fix
- Proposing new features

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:

- Commit messages should have this format:
  `<type>[optional scope]: <description>`
- Type should be `fix`(if fixed some bug), `feat`(if added new feature), `docs`(changes in documentation) or `test`(added new tests)
- Scope should be `frontend` or `backend` or `global` if your changes affects both.
- Description should be concise.
- Example: `docs(global): CONTRIBUTING.md added`

> Note: All the commits should be made from the root directory of the repository

## Local Setup

- Fork and clone the repository.
- Add remote upstream `git add upstream https://github.com/BitByte-TPC/TPC-website.git`
- Run `npm i` in the root directory of the repository.

### Backend setup

- Start MongoDB server
- Run `npm install` to install all dependencies
- Make a `.env` file with all secrets. You also need to generate google client id and secret key. You may refer [to this](https://developers.google.com/identity/protocols/oauth2https://developers.google.com/adwords/api/docs/guides/authentication#create_a_client_id_and_client_secret) for the steps.
  > Note: Put `<server_url>/api/auth/google/redirect` in redirect url when generating google client id and secret.
- Run `npm run dev` to start server

### Frontend setup

- Run `cd frontend`
- Run `yarn install` to install all dependencies.
- Run `yarn start` to start the server and visit [site](http://localhost:3000).
  > Note: This app uses `yarn` as the package manager, so do not use `npm` in frontend as it may cause some conflicts.

### Before making PR

- Run `git fetch upstream` & `git rebase upstream/main` to fetch updated codebase into your local repository before creating any new branch.
- Run `git checkout -b <your-branch-name>`

## License

By contributing to TPC-website, you agree that your contributions will be licensed
under the [LICENSE file](LICENSE).
