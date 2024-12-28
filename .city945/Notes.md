```bash
npm config set registry https://registry.npmjs.org/
npm login
npm publish # 确保 npm 上没有同名库，查看上传结果 https://www.npmjs.com/packa
```

### 代码注释

##### 全局流程

- `index.ts` / `Vditor.constructor` / `init`

  - `initUI` / `setEditMode`
  - `mergedOptions.after()`

模块化注释，复用

非常复杂的代码库的注释还是用思源，本身有价值的代码不多或者流程简单的代码库，就用 Heading 拆分一下然后模块化注释
