class Promise1 {
  constructor(excuator) {
    this.status = "pending"
    this.value = undefined
    this.reason = undefined

    let resolve = (value) => {
      if(this.status == "pending") {
        this.status = "fulfilled"
        this.value = value
      }
    }

    let reject = (reason) => {
      if(this.status == "pending") {
        this.status = "rejected"
        this.reason = reason
      }
    }

    excuator(resolve, reject)
  }

  then(resolve, reject) {
    if(this.status == "fulfilled") {
      resolve(this.value)
    }

    if(this.status == "rejected") {
      reject(this.reason)
    }
  }
}

let num = 0
let promise1 = new Promise1((resolve, reject) => {
  if(num == 1) {
    resolve("成功了")
  } else {
    reject("失败了")
  }
})

promise1.then((data) => {
  console.log(data)
}, (reason) => {
  console.log(reason)
})