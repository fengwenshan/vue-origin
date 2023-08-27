import klass from './class'
import style from './style' 
import model from './model'

export default [
  klass, // { staticKeys: ['staticClass'], transformNode, genData }
  style, // { staticKeys: ['staticStyle'], transformNode, genData }
  model  // { preTransformNode }
]

/*
  const module = [
    { staticKeys: ['staticClass'], transformNode, genData },
    { staticKeys: ['staticStyle'], transformNode, genData },
    { preTransformNode }
  ]

  function pluckModuleFunction(modules, key) {
    return modules.map(item => item[key]).filter(_ => _)
  }

  transforms(module, )
*/