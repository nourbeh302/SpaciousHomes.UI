export class User {
  userId: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: string
  area: string
  profileImage: string

  constructor() {
    this.userId = ""
    this.email = ""
    this.password = ""
    this.firstName = ""
    this.lastName = ""
    this.role = ""
    this.area = ""
    this.profileImage = ""
  }
}