# Seções em React

Uma coleção de seções de preços em React, no estilo do que se vê em sites de SaaS e
startups — cada uma com um layout e uma proposta visual diferente. A Home renderiza
todas as seções em sequência; cada seção também tem sua própria rota individual.

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev server e build)
- **Tailwind CSS v4**
- **React Router** (navegação entre a Home e as rotas individuais de cada seção)
- **Remix Icon** (`@remixicon/react`)

## Como rodar

```bash
npm install
npm run dev       # inicia o servidor de desenvolvimento
npm run build     # typecheck + build de produção
npm run lint      # oxlint
npm run preview   # serve o build de produção localmente
```

## Seções

| Seção | Rota | Estilo |
| --- | --- | --- |
| SaaS Startup | `/secoes/saas-startup` | 3 cards clássicos, toggle mensal/anual, cor verde |
| Streaming Play | `/secoes/streaming` | Tabela comparativa com coluna em destaque, cor laranja |
| Compliance Fiscal | `/secoes/compliance` | Lista de planos selecionável com ciclo automático, cor azul |

## Estrutura

Cada seção vive isolada em `src/sections/<nome>/`:

```
src/sections/<nome>/
  data.ts              # planos e conteúdo da seção
  index.ts             # metadados (id, título, descrição, componente) — registrado em sections/registry.ts
  theme.css             # valores da cor de destaque da seção (token `accent-*`)
  <Nome>Section.tsx     # composição de alto nível, é o que entra no registry
  components/           # badges, botões, cards, linhas — tudo que a seção usa internamente
```

Para adicionar uma seção nova: criar a pasta seguindo esse padrão e registrar o `meta`
exportado por `index.ts` em `src/sections/registry.ts`.

### Cor de destaque por seção

As cores não ficam hardcoded (`bg-green-600`, `bg-orange-600` etc.) nos componentes.
Em vez disso, cada seção define sua própria cor num `theme.css` local, que sobrescreve
o token genérico `--color-accent-*` (registrado globalmente em `src/index.css`) dentro
de uma classe aplicada na `<section>` raiz. Os componentes usam só `bg-accent-600`,
`text-accent-700` etc. — pra trocar a cor de uma seção inteira, basta editar o
`theme.css` daquela pasta.

### Utilitários e hooks compartilhados

- `src/hooks/useBillingPeriod.ts` — alterna entre cobrança mensal/anual
- `src/utils/currency.ts` — formatação de preço em BRL
- `src/types/` — tipos compartilhados (`PricingPlan`, `SectionMeta` etc.)
- `src/components/Header.tsx` — cabeçalho fixo do app, com o logo animado
