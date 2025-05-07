const data = [{
  id: 1,
  name: 'Diana',
  surname: 'Selyuk',
  email: 'aa@gmail.com',
  educationId: 0,
  location: 'Minsk',
  ageId: 0,
  isPhoneNumber: 'on',
  phoneCodeId: 2,
  phoneNumber: '44111111'

},
{
  id: 2,
  name: 'Vasya',
  surname: 'Pupkin',
  email: '123gj@gmail.com',
  education: 1,
  location: 'Minsk',
  age: 3,
  isPhoneNumber: 'on',
  phoneCodeId: 1,
  phoneNumber: '291808700'
}]

const educations = [
  {
    value: "Primary Education"
  },
  {
    value: "Secondary Education"
  },
  {
    value: "Further Education"
  },
  {
    value: "Higher Education"
  }
]

const ages = [
  {
    value: "18-25"
  },
  {
    value: "26-35"
  },
  {
    value: "36-50"
  },
  {
    value: "51+"
  }
]

const phoneCodes = [
  {
    value: "+375"
  },
  {
    value: "+7"
  },
  {
    value: "+306"
  },
]

module.exports = { data, ages, educations, phoneCodes }