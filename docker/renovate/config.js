module.exports = {
    platform: "gitlab",
    endpoint: "http://YOUR_GITLAB/api/v4/",
    token: "YOUR_TOKEN",
    assignees: ["renovate-bot"],
    reviewersFromCodeOwners: true,
    gitAuthor: "renovate-bot <renovate-bot@your.mail>",
    onboarding: false,
    requireConfig: "optional",
    autodiscover: true,
    autodiscoverFilter: "samples/*",
    enabledManagers: ["gradle"],
    hostRules: [
        {
            hostType: "maven",
            matchHost: "http://YOUR_BIN_REPO",
            username: "YOUR_USER",
            password: "YOUR_PASS",
        }
    ]
};