# :iphone: Calculadora React Native - Expo - Android/IOS

Uma calculadora moderna e elegante desenvolvida com React Native e Expo, oferecendo uma experiência de usuário fluida e interface intuitiva.

:white_check_mark: [Download APK](https://github.com/viniciusciconebarbosa/my-calc-react-native-app/releases/tag/Android)

## :pushpin: Funcionalidades

-  **Operações Básicas**: Adição, subtração, multiplicação e divisão
-  **Números Decimais**: Suporte completo para cálculos com casas decimais
-  **Histórico Visual**: Exibe a operação anterior no display
-  **Limpeza**: Botões AC (All Clear) e C (Clear) para diferentes níveis de limpeza
-  **Multiplataforma**: Funciona em iOS, Android e Web

## :package: Tecnologias Utilizadas

- **React Native** - Framework principal
- **TypeScript** - Tipagem estática
- **React Hooks** - Gerenciamento de estado
- **Expo Router** - Navegação baseada em arquivos
- **StyleSheet** - Estilização nativa

## :moyai: Estrutura do Projeto

```
├── app/                          # Expo Router (páginas)
│   ├── _layout.tsx              # Layout raiz
│   └── (tabs)/
│       ├── _layout.tsx          # Layout das abas
│       └── index.tsx            # Página principal
├── components/
│   └── Calculator/              # Componentes da calculadora
│       ├── Calculator.tsx       # Componente principal
│       ├── Display.tsx          # Display da calculadora
│       ├── ButtonGrid.tsx       # Grade de botões
│       ├── CalculatorButton.tsx # Botão individual
│       └── index.ts            # Exports
├── hooks/
│   └── useCalculator.ts         # Hook personalizado para lógica
├── utils/
│   └── calculator.ts            # Funções de cálculo e formatação
├── assets/                      # Recursos (ícones, imagens)
└── package.json                # Dependências e scripts
```

## Como Usar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Dispositivo móvel com Expo Go ou emulador

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/viniciusciconebarbosa/my-calc-react-native-app.git
   cd RENATIVE
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o projeto:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Execute no dispositivo:**
   - Escaneie o QR code com o Expo Go (Android/iOS)
   - Ou pressione `w` para abrir no navegador

## Funcionalidades Detalhadas

### Operações Matemáticas
- **Adição (+)**: Soma dois números
- **Subtração (−)**: Subtrai o segundo número do primeiro
- **Multiplicação (×)**: Multiplica dois números
- **Divisão (÷)**: Divide o primeiro número pelo segundo (proteção contra divisão por zero)

### Controles
- **Números (0-9)**: Inserir dígitos
- **Ponto decimal (.)**: Adicionar casas decimais
- **Operadores (+, −, ×, ÷)**: Selecionar operação
- **Igual (=)**: Executar cálculo
- **C**: Limpar display atual
- **AC**: Limpar tudo (display, operação e histórico)

### Recursos Especiais
- **Formatação Inteligente**: Números grandes são formatados com separadores de milhares
- **Precisão Decimal**: Até 8 casas decimais com arredondamento automático
- **Histórico Visual**: Mostra a operação anterior no topo do display
- **Fonte Adaptativa**: Tamanho da fonte se ajusta automaticamente para números grandes

## Arquitetura

O app segue uma arquitetura **componentizada** com separação clara de responsabilidades:

### Componentes
- **Calculator**: Componente principal que orquestra a interface
- **Display**: Exibe números e histórico de operações
- **ButtonGrid**: Layout da grade de botões
- **CalculatorButton**: Botão individual reutilizável

### Hooks
- **useCalculator**: Gerencia todo o estado e lógica da calculadora

### Utilitários
- **calculator.ts**: Funções puras para cálculos e formatação

## Design

Interface inspirada na calculadora do iOS com:
- **Cores**: Esquema escuro com botões coloridos por categoria
- **Tipografia**: Fonte system com ajuste automático de tamanho
- **Layout**: Grade 4x5 responsiva com botão zero duplo
- **Feedback**: Animações sutis nos toques
- **Acessibilidade**: Suporte a leitores de tela

## Categorias de Botões

- **Números (cinza)**: 0-9 e ponto decimal
- **Operadores (laranja)**: +, −, ×, ÷, =
- **Funções (cinza claro)**: AC, C, ±

## Tratamento de Erros

- **Divisão por zero**: Retorna "Erro" no display
- **Números inválidos**: Converte para 0 automaticamente
- **Overflow**: Limita a 8 casas decimais
- **Entrada duplicada**: Previne pontos decimais múltiplos

## Requisitos

- **React Native**: 0.81.4+
- **Expo**: 54.0.7+
- **TypeScript**: 5.9.2+
- **Node.js**: 18+
- **iOS**: 13.4+ / **Android**: 7.0+ / **Web**: Navegadores modernos

## Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build:web    # Gera build para web
npm run lint         # Executa o linter
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido ❤️ em React Native e Expo
