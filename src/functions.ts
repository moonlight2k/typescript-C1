function add(n1: number, n2: number) {
  return n1 + n2
}
function printresult(num: number): void {
  console.log('Result = ' + num)
}

function addAndHandle(Ni: number, Nii: number, cb: (num: number) => void) {
  const result = Ni + Nii
  cb(result)
  console.log(cb(result))
}

printresult(add(3, 45))

//let combineValues: Function
let combineValues: (a: number, b: number) => number

combineValues = add
//combineValues = printresult
//combineValues = 5

console.log(combineValues(2, 4))

//let rain: undefined

addAndHandle(3, 4, (resul) => {
  console.log(resul)
})
