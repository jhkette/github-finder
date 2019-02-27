class Github {
    constructor(){
        this.client_id = '8ce6a3e2e59809c39507';
        this.client_secret = 'dd88b57c44f87ce630b11e6c696632f909f6dd44';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=
        ${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
       
        const profile = await profileResponse.json('');
        const repos = await repoResponse.json('');

        return{
            profile: profile,
            repos: repos

        }
    }
}