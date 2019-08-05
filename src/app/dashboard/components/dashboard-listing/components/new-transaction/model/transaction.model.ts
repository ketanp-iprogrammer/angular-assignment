export class NewTransaction {
    newTransactionInfo: NewTransactionInfo = {
        reference: '',
        custermerInfo: {
            customer_number: '',
            customer_name: '',
            address: '',
            phone: 0
        },
        transfer_amount: 0,
        transfer_currency: '',
        beneficiary_bank: '',
        beneficiary_accno: '',
        payment_details: ''

    }
}
interface NewTransactionInfo {
    reference: string,
    custermerInfo: {
        customer_number: string,
        customer_name: string,
        address: string,
        phone: number
    },
    transfer_amount: number,
    transfer_currency: string,
    beneficiary_bank: string,
    beneficiary_accno: string,
    payment_details: string
}