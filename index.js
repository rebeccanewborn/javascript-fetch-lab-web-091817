function getIssues() {
  const issues = document.querySelector("#issues");
  const ul = document.createElement("ul");
  issues.appendChild(ul);
  const token = getToken();
  const repo = "rebeccanewborn/javascript-fetch-lab";
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => {
      [...json].forEach(iss => {
        let listItem = document.createElement("li");
        listItem.innerText = `Title: ${iss.title} Issue: ${iss.body}`;
        ul.appendChild(listItem);
      });
    });
}

function showIssues(json) {
  console.log(json);
  getIssues();
}

function createIssue() {
  const token = getToken();
  const repo = "rebeccanewborn/javascript-fetch-lab";
  const bodyData = {
    title: document.querySelector("#title").value,
    body: document.querySelector("#body").value
  };

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(bodyData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showResults(json) {
  let results = document.querySelector("#results");
  let jsonChild = document.createElement("p");
  jsonChild.innerText = JSON.stringify(json);
  results.appendChild(jsonChild);
}

function showForkedRepo(json) {
  let results = document.querySelector("#results");
  let info = document.createElement("a");
  info.href = json.html_url.toString();
  info.innerText = "Click here for Forked Repo";
  results.appendChild(info);
}

function forkRepo() {
  const repo = "learn-co-curriculum/javascript-fetch-lab";
  //use fetch to fork it!
  const token = getToken();

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showForkedRepo(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
