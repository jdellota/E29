import { Item } from "./item"
export interface Invoice{
    title:String,
    submittedDate:Date,
    invoiceFor:String,
    companyName:String,
    streetAdd:String,
    cityStateZip:String,
    payableTo:String,
    projectName:String,
    invoiceNumber:Number,
    dueDate:Date,
    items:Item[]
}