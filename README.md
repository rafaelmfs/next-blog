# Next Blog

Um blog construído com Next.js 15, apresentando uma interface elegante para exibir posts de blog com funcionalidades avançadas de filtragem, paginação e busca.

## 📋 Sobre o Projeto

O projeto inclui funcionalidades como:

- **Listagem de Posts**: Exibição paginada de artigos do blog
- **Sistema de Categorias**: Filtragem de posts por categorias
- **Sistema de Tags**: Busca e filtragem por tags
- **Design Responsivo**: Interface adaptável para diferentes dispositivos
- **Tema Claro/Escuro**: Alternância entre temas (funcionalidade implementada)

## 🏗️ Estrutura do Projeto

```
next-blog/
├── public/                    # Arquivos estáticos
│   ├── *.svg                  # Ícones SVG
├── src/
│   ├── app/                   # App Router do Next.js 15
│   │   ├── (posts)/          # Grupo de rotas
│   │   │   ├── blog/         # Páginas do blog
│   │   │   │   └── [id]/     # Página individual do post
│   │   │   ├── components/   # Componentes específicos das páginas de posts
│   │   │   └── hooks/        # Hooks customizados
│   │   ├── api/              # API Routes
│   │   │   ├── author/       # Endpoints do autor
│   │   │   └── posts/        # Endpoints dos posts
│   │   ├── globals.css       # Estilos globais
│   │   └── layout.tsx        # Layout principal
│   ├── components/           # Componentes reutilizáveis
│   │   ├── navbar/          # Componentes da barra de navegação
│   │   ├── aspect-ratio.tsx # Componente de proporção
│   │   ├── avatar.tsx       # Componente de avatar
│   │   ├── post-card.tsx    # Card de post
│   │   └── ...
│   ├── constants/           # Constantes da aplicação
│   │   ├── categories.ts    # Categorias disponíveis
│   │   ├── tags.ts          # Tags disponíveis
│   │   └── ...
│   ├── protocols/           # Interfaces TypeScript
│   │   ├── posts-protocol.ts
│   │   ├── author-protocol.ts
│   │   └── ...
│   ├── services/            # Serviços de API
│   │   ├── api.ts           # Cliente HTTP base
│   │   ├── posts-api-service.ts
│   │   ├── author-api-service.ts
│   │   └── endpoints/      # Definições de endpoints
│   ├── utils/              # Utilitários
│   │   ├── get-cookie.ts
│   │   ├── normalize-string.ts
│   │   └── set-theme-cookie.ts
│   └── assets/             # Recursos estáticos
├── biome.json              # Configuração do Biome (linter/formatter)
├── next.config.ts          # Configuração do Next.js
├── package.json            # Dependências do projeto
├── postcss.config.mjs      # Configuração do PostCSS
└── tsconfig.json           # Configuração do TypeScript
```

## 🚀 Tecnologias Utilizadas

### Core Framework
- **Next.js 15.5.5** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface de usuário
- **TypeScript 5** - Tipagem estática para JavaScript

### Estilização
- **Tailwind CSS 4** - Framework CSS utilitário

### Componentes UI
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones SVG

### Estado e Navegação
- **nuqs 2.7.1** - Sincronização de estado com URL

### Utilitários
- **clsx** - Utilitário para classes CSS condicionais
- **tailwind-merge** - Merge inteligente de classes Tailwind

### Desenvolvimento
- **Biome** - Linter e formatter (alternativa ao ESLint/Prettier)
- **Turbopack** - Bundler otimizado do Next.js

## 🛠️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### 1. Clone o Repositório

```bash
git clone <url-do-repositorio>
cd next-blog
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie uma cópia do arquivo `.env.dist` na raiz do projeto e renomeie como `.env`.
Caso o projeto não esteja rodando na porta padrão do next que é a 3000, deverá adicionar o endereço correto no `.env` em `NEXT_PUBLIC_ORIGIN` 

```env
NEXT_PUBLIC_APP_NAME="Nome do Seu Blog"
NEXT_PUBLIC_ORIGIN=http://localhost:3000
...
```

### 4. Execute o Projeto

#### Modo de Desenvolvimento
```bash
npm run dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)


## 📁 Estrutura de Rotas

- `/` - Página inicial com hero, posts recentes e informações de contato
- `/blog` - Lista completa de posts do blog
- `/blog/[id]` - Página individual de um post específico.