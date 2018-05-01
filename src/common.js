function getBgColor(code) {
  switch (code) {
    case 0:
      return 'bg-lightest'
    case 1:
      return 'bg-light'
    case 2:
      return 'bg-med'
    case 3:
      return 'bg-dark'
    case 4:
      return 'bg-darker'
  }
}

module.exports = {
  getBgColor
}
