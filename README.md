# actiontranslation.github.io

## models.json

The model the app uses for each provider, with its prices, served at
`https://claustrofob.github.io/actiontranslation/models.json`. One model per provider: the app picks
it, the user only picks the provider.

- `providers` is keyed by the provider's ID in the app: `google`, `anthropic`, `openai`.
- `model.id` is the model's ID in the provider's API; `model.name` is what the app shows.
- `model.reasoning` is passed to the provider as is: Gemini's `thinkingConfig.thinkingLevel`, Claude's
  `output_config.effort`, OpenAI's `reasoning.effort`. Keep it at the lowest level the model takes: more
  reasoning made GPT-6 Luna leave out the examples (none: 32 of 32 answers had them; low: 1 of 6;
  medium: 2 of 6; high: 0 of 6). Claude Haiku 5.5 can't turn thinking off: `low` is its lowest.
- The app downloads this file every time it comes to the foreground, and so do its Share and Translate
  extensions every time they open; the last valid download is kept and used. The app also ships with a
  copy, used until the first valid download (a download without a provider or its model's `id` or
  `reasoning` is ignored).
  Update that copy (`TranscriptorKit/Resources/models.json` in the app) along with this file.
- Prices are in USD (`currency`) per 1M tokens, at the provider's standard rate for short prompts.
  Thinking and reasoning tokens are billed as output.
- Bump `updated` with every change; bump `version` only when the format changes.

Prices change: check the providers' pages when updating.
[Google](https://aistudio.google.com/docs/pricing),
[Anthropic](https://platform.claude.com/docs/en/about-claude/pricing),
[OpenAI](https://developers.openai.com/api/docs/pricing).
