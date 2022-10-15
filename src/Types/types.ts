export interface User{
    id: number
    name: string
}

export interface Invoice{
    invoiceId: number
    requester: string
    amount: number
    date: string
    venue?: string
    message?: string
}

export interface SplitInvoice{
    venue: string
    total: number
    participants?: Array<User>
    paymentHistory?: Array<Invoice>
}

export interface CurrentUser{
    id: number
    name: string
    balance: number
    contacts: Array<User>
    pendingInvoice: Array<Invoice>
    splitInvoice?: Array<SplitInvoice>
}