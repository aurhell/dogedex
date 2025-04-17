import { globalIgnores } from "eslint/config"
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
import pluginVue from "eslint-plugin-vue"
import pluginVitest from "@vitest/eslint-plugin"
import pluginPlaywright from "eslint-plugin-playwright"

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },

  {
    ...pluginPlaywright.configs["flat/recommended"],
    files: ["e2e/**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },

  {
    name: "custom-rules",
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "[iI]gnored",
          ignoreRestSiblings: true,
        },
      ],
      "block-scoped-var": "error",
      camelCase: 0,
      "consistent-return": "error",
      "indent": ["error", 2],
      "max-len": [0, 160, 2, { ignoreUrls: true }],
      "no-duplicate-imports": "error",
      "no-else-return": "warn",
      "no-eval": "error",
      "no-extra-bind": "warn",
      "no-implied-eval": "error",
      "no-lonely-if": "error",
      "no-restricted-imports": [
        "warn",
        {
          paths: [
            {
              name: "lodash",
              message: "Please use lodash-es instead.",
            },
          ],
        },
      ],
      "no-sequences": "error",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-useless-call": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-rest-params": "warn",
      "prefer-spread": "warn",
      "prefer-template": "error",
      quotes: ["error", "double"],
      semi: ["error", "never"],
    },
  },
)
