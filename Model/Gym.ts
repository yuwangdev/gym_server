import { User } from "./User";

export type Gym = {
    gymId: string,
    gymName: string,
    passWord: string,
    email: string,
    phone: string,
    users?: Array<string>
}
