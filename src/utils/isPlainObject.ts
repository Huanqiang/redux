/**
 * @param obj The object to inspect.
 * @returns True if the argument appears to be a plain object.
 */
// DOC: 利用对象的直接父原型 是否等于 对象的原型链上的最终原型
export default function isPlainObject(obj: any): boolean {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}
