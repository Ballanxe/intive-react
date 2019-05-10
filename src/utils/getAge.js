
export const getAge = (ageString)=> {
  let ageList = ageString.split("-")
  let birthdate = new Date(ageList[0], ageList[1], ageList[2])
  let now = new Date()
  let age = now.getFullYear() - birthdate.getFullYear();

  if (now.getMonth() >= birthdate.getMonth() && now.getDate() > birthdate.getDate()){
    age--;
  }

  return age
}