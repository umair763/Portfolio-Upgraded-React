// src/config/github.config.js
export const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// Use environment variable for security
export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
