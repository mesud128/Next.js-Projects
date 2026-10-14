const orders = globalThis.__addisEatsOrders ?? [];
globalThis.__addisEatsOrders = orders;
export function createOrder(data){const order={id:"AE-"+Date.now().toString(36).toUpperCase(),...data,status:"Placed",createdAt:new Date().toISOString()};orders.unshift(order);return order;}
export const listOrders = ownerId => orders.filter(o=>o.ownerId===ownerId);
export const findOrder = id => orders.find(o=>o.id===id);
export function removeOrder(id){const i=orders.findIndex(o=>o.id===id);if(i<0)return false;orders.splice(i,1);return true;}
