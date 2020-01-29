<h1 align="center">
  Applied Blockchain Email
</h1>

## Description
An email client with template support for emails using HTML. Currently supports [Sendgrid](https://app.sendgrid.com/) (used by default). 

### Prerequisites
- Have a [Sendgrid](https://app.sendgrid.com/) account if you're using the `sendgrid` provider.

## Example
```javascript
const AppliedBlockchainEmail = require('ab-email')

const templates = {
  invite: {
    html: `h1 Hi #{name}
div.container
  p You been invited to join the Applied Blockchain community. Please click here #{link}. `
  },
  otherTemplate: {
    // ...
  }
}

const email = new AppliedBlockchainEmail(templates)

email.invite.send({
    to: 'someone@appliedblockchain.com',
    from: 'invitation@appliedblockchain.com',
    subject: 'You\'ve been invited!',
    html: { 
      name: 'Jane Doe', 
      link: 'your-app.io/invite' 
    }
})
```

## Development
A [Mailtrap](https://mailtrap.io/) account is necessary for development.

Make sure linting runs successfully, all tests pass and coverage thresholds are met before committing any changes to the
`master` branch.

### Run lint
```bash
$ node run lint
```
### Run tests
```bash
$ node run test
```
### Check coverage
```bash
$ node run coverage
```

## Environment Variables
You can override default configurations by setting these environment variables:
- AB_EMAIL_PROVIDER: Set Email provider.
- SENDGRID_API_KEY: Sendgrid api key.
