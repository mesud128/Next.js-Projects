export const dishes = [
 {id:"53322",name:"Doro Wat",category:"Chicken",price:550,description:"Slow-cooked chicken stew with berbere and onion.",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80"},
 {id:"53323",name:"Beef Tibs",category:"Beef",price:650,description:"Tender beef sautéed with onion and Ethiopian spices.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"},
 {id:"53324",name:"Kitfo",category:"Beef",price:750,description:"Minced beef seasoned with mitmita and spiced butter.",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"},
 {id:"53325",name:"Shiro",category:"Vegetarian",price:350,description:"Chickpea stew with garlic, onion and berbere.",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"}
];
export const getDish = id => dishes.find(d => d.id === String(id));
