export interface User{
    name: string
}

export interface CurrentUser{
    name: string
    balance: number
    contacts: Array<User>
}