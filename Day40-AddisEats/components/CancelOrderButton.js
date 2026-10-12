"use client";
import {useActionState} from "react";
import {cancelOrder} from "@/app/actions";
export default function CancelOrderButton({id}){const [state,action,pending]=useActionState(cancelOrder.bind(null,id),{message:""});return <form action={action}><button disabled={pending}>Cancel order</button><span>{state.message}</span></form>;}
