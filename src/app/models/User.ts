import { Gender } from "./utilities/Gender";

export class User {

  constructor(

    public userId: string = "",
    public email: string = "",
    public password: string = "",
    public firstName: string = "",
    public lastName: string = "",
    public role: string = "",
    public area: string = "",
    public profileImage: string = "",
    public gender: Gender = Gender.male,
    public phoneNumber: string = ""

  ) {}

}