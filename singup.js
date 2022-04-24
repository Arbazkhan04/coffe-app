// let userObject={
//       Name:String,
//       Address:String,
//       Email:String,
//       Phone:Number

// }
// const SubmitUserDetails=()=>{
//       let name=document.querySelector('.Name').value;
//       // console.log(name);
//       let address=document.querySelector('.Home').value;
//       // console.log(address);

//       let email=document.querySelector('.Email').value;
//       // console.log(email)
//       let phone=document.querySelector('.Phone').value;
//       // console.log(phone)
//       userObject.Name=name;
//       userObject.Address=address;
//       userObject.Email=email; // ya aik key bana da ga jo ka userobject ma save ho jai gi
//       userObject.Phone=phone;
      
//       // console.log(userObject)
//       localStorage.setItem('user-object', JSON.stringify(userObject));


      
      
      
// } 
// let GetData=JSON.parse(localStorage.getItem('user-object'))
// console.log(GetData)

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);

let UserObject = {
    Name: String,
    House: String,
    Email: String,
    Phone: Number,
    Coffee: String
}

let SubmitUserDetails = () => {
    try {
            let EmptyArray=[];
            let name=document.querySelector('.Name').value;
            // console.log(name);
            let address=document.querySelector('.Home').value;
            // console.log(address);
      
            let email=document.querySelector('.Email').value;
            // console.log(email)
            let phone=document.querySelector('.Phone').value;
            // console.log(phone)
            UserObject.Name=name;
            UserObject.Address=address;
            UserObject.Email=email; // ya aik key bana da ga jo ka userobject ma save ho jai gi
            UserObject.Phone=phone;

        
        

        let GetData = JSON.parse(localStorage.getItem('user-object'));
       
        if (GetData === null) {
            EmptyArray.push(UserObject);
            localStorage.setItem('user-object', JSON.stringify(EmptyArray));
        } else {
            EmptyArray.push(UserObject);
           let Data =  GetData.forEach((Object) => {
                console.log('yes');
                console.log(Object);
                EmptyArray.push(Object);
            })
            localStorage.setItem('user-object', JSON.stringify(EmptyArray));
        }
        // Database.Document.save(UserObject)
        // localStorage.setItem('user-object',JSON.stringify(GetData));

    } catch (error) {
        console.log(error);
    }
}