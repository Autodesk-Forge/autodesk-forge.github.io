import reposJSON from './repos.json';

export let repos = [];

for (let repo of reposJSON) {
  // put repos in a list
  repos.push(repo);
}

export const allRepos = [...repos];