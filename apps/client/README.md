# Client

## Environemnt Variables

It's important to fill in the `.env` file according to the variables specified in `.env.example`. 

### Required Variables

For the authentication to function correctly, you need to set the following variables:

```plaintext
VITE_AUTH_GOOGLE_ID=<your-google-client-id>
VITE_AUTH_REDIRECT_URI=<your-redirect-uri>
VITE_API_BASE_URL=<your-base-url>
```
You can find the application registration page on the Google Console.

All environment variables are defined in the `environment` file located in the `config` folder. This file contains a function that parses the variables using Zod for validation, ensuring that the necessary configurations are correctly set.

## Storage

We need to change the app name in the `storage` file located in the `config` folder. This ensures that the application's storage mechanism is correctly labeled and functioning as intended.

Open `config/storage.js` and update the app name:

```plaintext
const APP_NAME = "YourAppName"; // Change this to your desired app name
```

## Query keys

Similarly, we should update the app name in the `query` file located in the config folder. This helps in maintaining consistent naming conventions across the application and aids in managing queries effectively.

Open `config/query.js` and update the app name:

```plaintext
const APP_NAME = "YourAppName"; // Change this to your desired app name
```