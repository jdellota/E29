import { Invoice } from "../interfaces/invoice";
import { Item } from "../interfaces/item";
export const INVOICE:Invoice=
{
    title:'invoice',
    submittedDate:new Date(3/1/23),
    invoiceFor:'food',
    companyName:'novare',
    streetAdd:'11 Orchard Road',
    cityStateZip:'BGC, Taguig, 99999',
    payableTo:'Mr. M',
    projectName:'Party',
    invoiceNumber:11,
    dueDate:new Date(3/1/23),
    items:[
        {
            description:'burger',
            qty:900,
            price:200},
        {
            description:'water',
            qty:900,
            price:20},
        {
            description:'fries',
            qty:900,
            price:50},
        {
            description:'icecream',
            qty:900,
            price:40},
        {
            description:'icetea',
            qty:900,
            price:30},        
    ]
}