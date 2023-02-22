interface Message{
    text:string,
    createdAt:admin.firestore.Timesstamps,
    user:{
        _id:string,
        name:string,
        avatar:string
    }
}