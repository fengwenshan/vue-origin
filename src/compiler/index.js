/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative. `createCompilerCreator `允许创建使用替代方法的编译器
// parser/optimizer/codegen, e.g the SSR optimizing compiler. 解析器/优化器/代码生成程序，例如SSR优化编译器
// Here we just export a default compiler using the default parts. 在这里，我们只导出一个使用默认部分的默认编译器

export const createCompiler = createCompilerCreator(function baseCompile (
  template: string, 
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
