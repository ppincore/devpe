import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tsEslint, { type ConfigWithExtends } from 'typescript-eslint';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import { flatConfigs as importPluginFlat } from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginI18next from 'eslint-plugin-i18next';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { flatPlugin as pluginReactComponentName } from 'eslint-plugin-react-component-name';
import pluginStorybook from 'eslint-plugin-storybook';
// TODO: need to update plugin
// import pluginFeatureSliced from 'eslint-plugin-feature-sliced';

type Rules = ConfigWithExtends['rules'];

const plugins: ConfigWithExtends = {
  plugins: {
    react: pluginReact,
    'react-hooks': pluginReactHooks,
    'react-component-name': pluginReactComponentName,
    'jsx-a11y': jsxA11y,
    i18next: pluginI18next,
    storybook: pluginStorybook,
    'unused-imports': eslintPluginUnusedImports,
    '@stylistic': stylistic,
    // TODO: need to update plugin
    // 'feature-sliced': pluginFeatureSliced,
  },
};

const recommendedConfigs: ConfigWithExtends[] = [
  eslint.configs.recommended,
  importPluginFlat.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [importPluginFlat.typescript],
  },
  ...tsEslint.configs.stylisticTypeChecked,
  ...tsEslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          loadTypeScriptPlugins: true,
        },
      },
    },
  },
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
    },
  },
];

const shouldBeIgnored = {
  ignores: [
    'eslint.config.mjs',

    // dependencies
    '/node_modules',
    '/.pnp',
    '.pnp.js,',

    // testing
    '/coverage,',

    // production
    '/build',
    '/dist,',

    // misc
    '.DS_Store',
    '.env.local',
    '.env.development.local',
    '.env.test.local',
    '.env.production.local,',

    'npm-debug.log*',
    'yarn-debug.log*',
    'yarn-error.log*',
  ],
};

const langGlobals = {
  ...globals.browser,
  ...globals.node,
  ...globals.jest,
  __IS_DEV__: true,
  __PROJECT__: true,
};

const languageOptions: ConfigWithExtends = {
  languageOptions: {
    globals: langGlobals,
    ecmaVersion: 2024,
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
      ecmaFeatures: { jsx: true },
    },
  },
};

const overrides: ConfigWithExtends[] = [
  {
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    },
  },
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-console': 'off',
    },
  },
];

const rulesSections = [
  'react',
  'i18Next',
  'fsd',
  'ts',
  'import',
  'common',
  'style',
] as const;

const rules: Record<(typeof rulesSections)[number], Rules> = {
  /* ---------- 🧩 React ---------- */
  react: {
    'react/prop-types': 'off',
    'react-component-name/react-component-name': [
      'error',
      { targets: ['memo', 'forwardRef', 'observer'] },
    ], // Проверка корректного имени компонента
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off', // Не нужен в React 17+
    'react/require-default-props': 'off', // Не требуем defaultProps при наличии optional
    'react/jsx-props-no-spreading': [
      'warn',
      { html: 'ignore', exceptions: [] },
    ], // Контролируем spread в JSX
    'react/function-component-definition': 'off', // Разрешаем разные типы объявлений
    'react-hooks/rules-of-hooks': 'error', // Проверка корректности хуков
    'react-hooks/exhaustive-deps': 'error', // Проверка зависимостей useEffect
    'jsx-a11y/label-has-associated-control': ['error', {}],
    'react/no-array-index-key': 'off', // Иногда индексы приемлемы
  },

  /* ---------- 🌐 i18next ---------- */
  i18Next: {
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'to',
          'as',
          'name',
          'data-testid',
          'target',
          'direction',
          'justify',
          'align',
          'gap',
          'border',
        ],
      },
    ], // Запрещаем строки без перевода в JSX
  },

  /* ---------- 🧭 Feature-Sliced Design ---------- */
  fsd: {
    // TODO: add plugin
    // 'feature-sliced/path-checker': ['error', { alias: '@' }], // Проверка корректности импортов по архитектуре
  },

  /* ---------- 🟦 TypeScript ---------- */
  ts: {
    '@typescript-eslint/no-deprecated': 'off',
    '@typescript-eslint/no-unsafe-member-access': ['error'],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ], // Проверяем неиспользуемые переменные TS
  },

  /* ---------- 📦 Imports ---------- */
  import: {
    'import/no-unresolved': 'off', // Пути разрешаются сборщиком
    'import/prefer-default-export': 'off', // Разрешаем именованные экспорты
    'import/extensions': 'off', // Не требуем расширений
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.ts',
          '**/*.{test,stories}.{ts,tsx}',
          '**/{tests,stories,config}/**/*.{ts,tsx}',
          '**/scripts/**/*.{ts,tsx}',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'never',
      },
    ], // Структура импортов
    'unused-imports/no-unused-imports': 'error', // Удаляем неиспользуемые импорты
  },

  /* ---------- ⚙️ Общие правила ---------- */
  common: {
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'no-use-before-define': ['error', 'nofunc'],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': [
      'error',
      { ignorePropertyModificationsForRegex: ['state'] },
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off', // Отключаем в пользу @typescript-eslint
    'no-trailing-spaces': 'error', // Без лишних пробелов
  },

  /* ---------- 🎨 Стиль ---------- */
  style: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    '@stylistic/type-annotation-spacing': 'error', // Пробелы вокруг аннотаций типов
    '@stylistic/space-before-blocks': 'error', // Пробел перед {
  },
};

const eslintRules: ConfigWithExtends = {
  rules: rulesSections.reduce<Rules>((prev, sectionName) => {
    return { ...prev, ...rules[sectionName] };
  }, {}),
};

export default tsEslint.config(
  ...recommendedConfigs,
  shouldBeIgnored,
  languageOptions,
  plugins,
  eslintRules,
  ...overrides,
);
