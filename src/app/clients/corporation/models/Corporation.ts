export class Corporation {
    constructor(
        public corpId: string = "",
        public corpName: string = "",
        public corpEmail: string = "",
        public corpPassword: string = "",
        public taxNumber: string = "",
        public role: string = "",
        public corpLocation: string = "",
        public corpProfileImage: string = ""
        ) { }
}