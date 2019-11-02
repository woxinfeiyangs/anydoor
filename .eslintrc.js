module.exports = {
    "extends": ["eslint:recommended"],
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }],
        "no-alert": ["error"]
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourcetype": "script"
    },
    "globals": {
        // "window": true
        alert: true
    },
    "env": {
        "browser": false,
        "node": true,
        "es6": true
    }
}
