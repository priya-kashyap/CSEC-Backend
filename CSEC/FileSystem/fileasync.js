const fspromise=require('fs/promises');
const read=async()=>{
    const data=await fspromise.readFile("./data.txt","utf-8");
    console.log(data)

}
const write=async()=>{
    await fspromise.writeFile("./data2.txt","My name is Priya kashyap","utf-8");
}
read();
write();
console.log("1st");
console.log("2nd");
console.log("3rd");
console.log("4th");
console.log("5th");