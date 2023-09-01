const core = require('@actions/core');
const github = require('@actions/github');

async function run() {

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

const octokit = github.getOctokit(GITHUB_TOKEN);

const workflows = await octokit.request(
  "GET /repos/:owner/:repo/actions/workflows", 
  { owner, repo }
);
  const workflow = workflows.data.workflows.find(
  workflow => workflow.name === process.env.GITHUB_WORKFLOW
);

console.log(workflow);
  
}

run();
