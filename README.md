# actiontranslation.github.io

## models.json

The list of models the app offers for each provider, served at
`https://claustrofob.github.io/actiontranslation/models.json`. The app reads it to update its list of
supported models.

- `providers` is keyed by the provider's ID in the app: `google`, `anthropic`, `openai`.
- Models are listed weakest first, the order the app shows them in.
- `id` is the model's ID in the provider's API; `name` is what the app shows.
- Prices are in USD (`currency`) per 1M tokens, at the provider's standard rate for short prompts.
  Thinking and reasoning tokens are billed as output.
- Bump `updated` with every change; bump `version` only when the format changes.

Prices change: check the providers' pages when updating.
[Google](https://aistudio.google.com/docs/pricing),
[Anthropic](https://platform.claude.com/docs/en/about-claude/pricing),
[OpenAI](https://developers.openai.com/api/docs/pricing).
