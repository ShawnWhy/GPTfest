// import { config } from "dotenv"
const dotenv = require("dotenv");
dotenv.config();
const say = require('say')
// const say = new Say('darwin' || 'win64' || 'linux')
const fs = require("fs")
// import {configuration, OpenAIApi} from "openai";
const openaiModule = require("openai")
const OpenAIApi = openaiModule.OpenAIApi
const Configuration = openaiModule.Configuration;
console.log(process.env.API_KEY)
const gTTS = require('gtts');

const openai = new OpenAIApi(new Configuration({
  apiKey:process.env.API_KEY
}))


// openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages:[{role:"user", content:"will bibi ever free the palastineans?"}],
// }).then(res =>{
//     console.log(res.data.choices[0].message)
//     var gtts = new gTTS(res.data.choices[0].message.content, 'en');
// gtts.save('./translate.mp3', function (err, result) {
//   if(err) { throw new Error(err) }
//   console.log('Success!');
// });
//   }
// )
// .catch(err=>{console.log(err)})
// openai.createImageEdit(
//   fs.createReadStream("christ-orig.png"),
//   fs.createReadStream("christ-mask.png"),
//   "a dark scene",
//  1,
//  "1024x1024"
// ).then(res=>{
//   console.log(res.data)
// }).catch(err=>{
//   console.log( err)
// })
// openai.createImageEdit({
//   // model: "gpt-3.5-turbo",
//   prompt:"woman kissing",
//   image:fs.createReadStream("christ-orig.jpg"),
//   mask:fs.createReadStream("kissing-christ.png"),
//   n:1,
//   size:"780x609"
// }).then(res=>{
//   console.log(res.data)
// }).catch(err=>{
//   console.log( err)
// })
// image_url = response['data'][0]['url']


// openai.createImageVariation(
//   fs.createReadStream("orig.png"),
//   1,
//   "477x477"
// ).then(res=>{
//   image_url = response.data.data[0].url;
//   console.log(image_url)
// }).catch(err=>{
    // console.log( err)})
    say.speak('Hello my dear', 'Microsoft Zira Desktop')
    say.export("I'm sorry, Dave.", 'Microsoft Zira Desktop', 0.75, 'hal.wav', (err) => {
      if (err) {
        return console.error(err)
      }
    
      console.log('Text has been saved to hal.wav.')
    })

// async function apiRun (){

// try {
//   const response = await openai.createImageEdit(
//   fs.createReadStream("portrait.png"),
//   "man in a dark hellscape with people suffering in the style of hieronymus bosch",
//   fs.createReadStream("portrait no back.png"),
  
//   1,
//  "1024x1024"
//   );
//   console.log(response.data.data[0].url);
// } catch (error) {
//   if (error.response) {
//     console.log(error.response.status);
//     console.log(error.response.data);
//   } else {
//     console.log(error.message);
//   }
// }
// }

// apiRun()

