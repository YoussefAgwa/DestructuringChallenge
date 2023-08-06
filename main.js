let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [{title : t , age : a , available : v , skills : [, two]}] = myFriends;


switch (chosen) {
  case 1:
    [{title : t , age : a , available : v , skills : [, two]}] = myFriends;
    console.log(t);
    console.log(a);
    if(v) {
      console.log(`available`);
    }else {
      console.log(`Not available `);
    }
    console.log(two); 
    break;
  case 2:
    [ , {title : t , age : a , available : v , skills : [, two]}] = myFriends;
    console.log(t);
    console.log(a);
    if(v) {
      console.log(`available`);
    }else {
      console.log(`Not available `);
    }
    console.log(two); 
    break;
  case 3:
    [ , , {title : t , age : a , available : v , skills : [ , two ]}] = myFriends; 
    console.log(t);
    console.log(a);
    if(v) {
      console.log(`available`);
    }else {
      console.log(`Not available `);
    }
    console.log(two); 
    break;
}