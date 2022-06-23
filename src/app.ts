// const button = document.querySelector('button')!

// button.addEventListener('mouseover', () => {
//   console.log('Clicked!!')
// })

const button = document.querySelector('button')

function clickHandler(message: string) {
  console.log('Clicked!  ' + message)
}

if (button) {
  button.addEventListener('mouseover', clickHandler.bind(null, 'Youre welcome'))
}

function sendAnalytics(data: string) {
  console.log(data)
}

sendAnalytics('the data')
