function checkUser(userList, target) {
  const checkResult = userList.filter(function (item, index, array) {
    return item.email === target.userEmail &
      item.password === target.userPassword
  })

  if (checkResult.length === 0) {
    return true
  } else {
    return checkResult[0].firstName
  }
}

module.exports = checkUser