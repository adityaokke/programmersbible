# Programmer's Bible

A free, open knowledge graph that takes you from knowing how to use a web browser to understanding how it all works: computers, bits and bytes, the history of computing and the internet, networks, the web, and finally your own website live on your own domain.

> 🚧 In development. See [PLAN.md](PLAN.md) for the full plan.

## How it works

Every concept is a short page (a **node**). Nodes are connected: what you should learn first, what comes next, and what is related. You can:

- **Ask a question** and start exploring from the topic that answers it, or
- **Start from the very beginning** with the guided *First Chapter*.

## Repository

| Path | What |
|---|---|
| `content/nodes/` | One markdown file per node |
| `content/paths/` | Guided paths through the graph |
| `schema/node.ts` | The node format (the contract between content and code) |
| `scripts/` | Graph build, validation and progress dashboard |
| `docs/WRITING_GUIDE.md` | How nodes are written |

```
npm install
npm run validate      # check all content
npm run status        # progress dashboard
```

## How content is made

Nodes are written with AI and reviewed and fact-checked by a human before they are published. Every node lists its sources.

## License

- Code: [MIT](LICENSE)
- Content (`content/`): [CC BY-SA 4.0](LICENSE-CONTENT)
