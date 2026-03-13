# 🧪 Guia de Testes - Portfolio

Este projeto possui uma suite completa de testes automatizados cobrindo diferentes níveis da aplicação.

## 📋 Tipos de Testes

### 1. Testes Unitários
Localização: `tests/unit/`

Testes para funções e lógica isolada do sistema.

**Executar:**
```bash
pnpm test:unit
```

### 2. Testes de Componentes Nuxt
Localização: `tests/nuxt/`

Testes para componentes Vue usando o ambiente Nuxt com `@nuxt/test-utils`.

**Estrutura:**
- `tests/nuxt/landing/` - Componentes da landing page
  - `Hero.test.ts` - Hero section com avatar e links sociais
  - `AboutMe.test.ts` - Seção "Sobre mim"
  - `Experiences.test.ts` - Timeline de experiências profissionais
  - `Background.test.ts` - Componente de background animado

- `tests/nuxt/layout/` - Componentes de layout
  - `AppHeader.test.ts` - Header com navegação
  - `AppFooter.test.ts` - Footer com copyright
  - `AppMain.test.ts` - Container principal

- `tests/nuxt/overlays/blog/` - Componentes do blog
  - `PostBackButton.test.ts` - Botão de voltar ao blog
  - `PostContent.test.ts` - Conteúdo completo do post
  - `PostInfo.test.ts` - Informações do post (data, autor, tempo de leitura)
  - `PostMeta.test.ts` - Metadados do post
  - `PostShareButton.test.ts` - Botão de compartilhamento
  - `PostTags.test.ts` - Tags do post

- `tests/nuxt/content/` - Componentes de conteúdo
  - `ProseP.test.ts` - Parágrafo customizado para markdown

- `tests/nuxt/pages/` - Testes de páginas
  - `index.test.ts` - Página inicial
  - `blog-index.test.ts` - Página de listagem do blog
  - `error.test.ts` - Página de erro
  - `app.test.ts` - App wrapper principal

**Executar:**
```bash
pnpm test:nuxt
```

### 3. Testes E2E (End-to-End)
Localização: `tests/e2e/`

Testes de interface usando Playwright que simulam interações reais do usuário.

**Cobertura:**
- `home.spec.ts` - Página inicial completa
  - Hero section
  - About Me
  - Experiences timeline
  - Footer e navegação
  - Responsividade

- `blog-navigation.spec.ts` - Navegação do blog
  - Listagem de posts
  - Navegação entre páginas
  - Visualização de posts individuais
  - Table of contents
  - Botão de voltar

- `color-mode.spec.ts` - Modo escuro/claro
  - Toggle de tema
  - Persistência de preferência
  - Aplicação correta de estilos

- `error-handling.spec.ts` - Tratamento de erros
  - Páginas 404
  - Mensagens de erro
  - Estrutura da página de erro

- `external-links.spec.ts` - Links externos
  - Redes sociais
  - Resume
  - Atributos target="_blank"
  - Links em experiências

- `accessibility.spec.ts` - Acessibilidade
  - Hierarquia de headings
  - Alt text em imagens
  - HTML semântico
  - Navegação por teclado
  - Labels acessíveis
  - Atributo lang

- `seo-performance.spec.ts` - SEO e Performance
  - Meta tags
  - Open Graph
  - Twitter Cards
  - Títulos de página
  - Tempo de carregamento
  - Erros no console

**Executar:**
```bash
# Modo normal
pnpm test:e2e

# Modo UI (com interface visual)
pnpm test:e2e:ui
```

## 🚀 Comandos Principais

```bash
# Rodar todos os testes (unit + nuxt)
pnpm test

# Rodar testes em modo watch
pnpm test:watch

# Gerar relatório de cobertura
pnpm test:coverage

# Rodar apenas testes unitários
pnpm test:unit

# Rodar apenas testes de componentes Nuxt
pnpm test:nuxt

# Rodar testes E2E
pnpm test:e2e

# Rodar testes E2E com UI
pnpm test:e2e:ui
```

## 📊 Cobertura de Testes

### Componentes Testados

#### Landing (4/4) ✅
- ✅ Hero
- ✅ AboutMe
- ✅ Experiences
- ✅ Background

#### Layout (3/3) ✅
- ✅ AppHeader
- ✅ AppFooter
- ✅ AppMain

#### Blog Overlays (6/6) ✅
- ✅ PostBackButton
- ✅ PostContent
- ✅ PostInfo
- ✅ PostMeta
- ✅ PostShareButton
- ✅ PostTags

#### Content (1/1) ✅
- ✅ ProseP

#### Pages (4/4) ✅
- ✅ Index (Home)
- ✅ Blog Index
- ✅ Error Page
- ✅ App Root

### Fluxos E2E Testados (7 categorias) ✅
1. ✅ Home Page - 11 testes
2. ✅ Blog Navigation - 10 testes
3. ✅ Color Mode Toggle - 4 testes
4. ✅ Error Handling - 5 testes
5. ✅ External Links - 4 testes
6. ✅ Accessibility - 9 testes
7. ✅ SEO & Performance - 10 testes

**Total: 53+ testes E2E**

## 🔧 Configuração

### Vitest
Arquivo: `vitest.config.ts`
- Projeto "unit": Ambiente Node.js
- Projeto "nuxt": Ambiente Nuxt com Happy DOM
- Cobertura: v8 provider

### Playwright
Arquivo: `playwright.config.ts`
- Browser: Chromium (Desktop Chrome)
- Modo paralelo
- Retry em CI: 2x
- Reporter: HTML

## 💡 Boas Práticas

1. **Isole os testes**: Cada teste deve ser independente
2. **Use mocks apropriados**: Mock de dados externos e APIs
3. **Teste comportamento, não implementação**: Foque no que o usuário vê
4. **Mantenha testes rápidos**: Testes unitários devem ser instantâneos
5. **E2E para fluxos críticos**: Use E2E para jornadas importantes do usuário

## 🐛 Debugging

### Testes Vitest
```bash
# Rodar testes específicos
pnpm test Hero

# Modo watch para desenvolvimento
pnpm test:watch

# Ver cobertura detalhada
pnpm test:coverage
```

### Testes Playwright
```bash
# UI Mode - melhor para debugging
pnpm test:e2e:ui

# Rodar teste específico
npx playwright test home.spec.ts

# Debug mode
npx playwright test --debug

# Ver relatório após execução
npx playwright show-report
```

## 📝 Adicionando Novos Testes

### Para Componentes:
```typescript
import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MeuComponente from '~/components/MeuComponente.vue'

describe('MeuComponente', () => {
  it('deve renderizar corretamente', async () => {
    const component = await mountSuspended(MeuComponente)
    expect(component.html()).toBeTruthy()
  })
})
```

### Para E2E:
```typescript
import { test, expect } from '@nuxt/test-utils/playwright'

test.describe('Minha Feature', () => {
  test('deve funcionar corretamente', async ({ page, goto }) => {
    await goto('/minha-rota', { waitUntil: 'hydration' })
    await expect(page.locator('h1')).toBeVisible()
  })
})
```

## 🎯 Próximos Passos

- [ ] Configurar CI/CD para rodar testes automaticamente
- [ ] Aumentar cobertura de testes unitários
- [ ] Adicionar testes de performance visual
- [ ] Implementar testes de segurança
- [ ] Adicionar testes de acessibilidade automatizados com axe

## 📚 Recursos

- [Vitest Documentation](https://vitest.dev/)
- [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing)
- [Playwright Documentation](https://playwright.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)

---

**Cobertura Total:** 18 componentes + 53+ testes E2E = ~100% dos componentes existentes
