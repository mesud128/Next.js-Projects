import { NextResponse } from "next/server";
import { getSessionUser } from "../../../../lib/session";
import { findOrder } from "../../../../lib/orders";

export async function GET(_request, { params }) {
  const { id } = await params;
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Start a demo session first." }, { status: 401 });
  const order = findOrder(id);
  if (!order || order.ownerId !== user.id) return NextResponse.json({ error: "Order not found." }, { status: 404 });
  return NextResponse.json({ order, checkedAt: new Date().toISOString() });
}
