module.exports = function routes() {
    this.root('survey#new');
    this.match('survey', 'survey#create', { via: 'post' });
}
