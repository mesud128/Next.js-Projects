import {NextResponse} from "next/server";
import {orderSchema} from "../../../lib/schema";
import {getSessionUser} from "../../../lib/session";
import {createOrder} from "../../../lib/orders";
import {getDish} from "../../../lib/dishes";
export async function POST(request){const user=await getSessionUser();if(!user)return NextResponse.json({error:"Start a demo session first."},{status:401});let body;try{body=await request.json()}catch{return NextResponse.json({error:"Invalid JSON."},{status:400})}const parsed=orderSchema.safeParse(body);if(!parsed.success)return NextResponse.json({error:"Validation failed.",fieldErrors:parsed.error.flatten().fieldErrors},{status:422});const items=[];for(const item of parsed.data.items){const d=getDish(item.id);if(!d)return NextResponse.json({error:"Invalid dish ID.",fieldErrors:{items:["Choose a valid dish."]}},{status:422});items.push({id:d.id,name:d.name,price:d.price,quantity:item.quantity})}const total=items.reduce((sum,item)=>sum+item.price*item.quantity,0);const order=createOrder({...parsed.data,items,total,ownerId:user.id});return NextResponse.json({message:"Order created.",order},{status:201});}
