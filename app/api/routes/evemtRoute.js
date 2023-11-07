'use server'
import fs from "fs/promises";
import { convertFileToBuffer } from "./convert";
import connect from "../db/dbConnection";
import Event from "../schema/Event";
import multer from 'multer';

// Create a storage engine
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export async function GET(){

    // const data = await Event.find({});
    const data = await Event.find({}).exec();

    const name = {door: "32"};
    data[0] = {...data[0],name};
    // console.log(data[0].img);
    console.log(data[0]);



    data.forEach((item,index ) => {
      // console.log(item.img);
      const buffer = item.img;
      // console.log(buffer);
      const blob = new Blob([buffer]);

      const fileOptions = {
        type: 'image/jpeg', // Replace with the appropriate MIME type
      };
      const file = new File([blob], 'IMG', fileOptions);
      data[index].img = file;
    });
  
    // console.log("------------------------------------------");
    // console.log(data);
    // console.log("------------------------------------------");

    // console.log(data);
  
}

export async function DELETE(){

}

export async function PUT(){

}

export async function POST(formData){
    const data = Object.fromEntries(formData);
    console.log("Turn to buff");
    console.log(data.avatar);
    const file = data.avatar;
    const bytes = await file.arrayBuffer()    
    const buffer = Buffer.from(bytes);
    
  // const response = await  Event.create({
  //   amount: data.totalPeople,
  //   img: buffer,
  //   startTime: data.startTime,
  //   endTime: data.endTime,
  //   location: data.Location,
  //   details: data.details
  // });

  //   if(response){
  //     console.log("ok");
  //   }

}
