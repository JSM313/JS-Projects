class GitHub {
  constructor() {
    this.client_id = "b6a7c61080c205c03779";
    this.client_secret = "1f46d26275f3e39e55ee794341791bdd9f5c3ef1";

    // To limit the repo count to 5
    this.repos_count = 5;

    // To sort by lates
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Fetching response from the repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repoData = await reposResponse.json();

    return {
      profile: profileData,
      repos: repoData,
    };
  }
}
