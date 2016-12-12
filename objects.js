// let songName = 'My heart will go on';
// let songArtist = 'Celine Dion';
// let songYear = 1996;
// let favorite = true;

//Objects let us combine related info into a single name
//- Arrays have multiple parts, and each is identified by an index.
//- Objects have multiple parts, and each is a string
// let song = { //same symbol as blocks ({}) but different meaning
//   //property: value,
//    name: 'My heart will go on',
//    artist: 'Celine Dion',
//    year: 1996,
//    favorite: true
// }
//
// console.log(song.name); // 'dot notation'

//Example: Car lot

    //This function should return a smallCar(size 1)
//     function  makeSmallCar(paintColor) {
//       return {
//         size: 1,
//         color: paintColor,
//       }
//     }
//
//     //This function should return a largeCar(size 4)
//     function  MakeLargeCar(paintColor) {
//       return { //return an object
//         size: 4,
//         color: paintColor,
//       }
//     }
//
// // console.log(makeSmallCar("red"));
// let zippy = makeSmallCar('white');
// let drifter = makeSmallCar('green');
// let shelby = MakeLargeCar('gold')
// // console.log(zippy.color);
//
// let smallCar = {
//   size: 1,
//   color: 'white',
// }
//
//
// let largeCar = {
//   size: 4,
//   color: 'beige',
// }
//
// let lot = {
//   cars: [], //lot.cars is an empty array
// }
//
// // lot.cars.push(smallCar, zippy, shelby, drifter, largeCar);
// lot.cars.push(zippy, shelby);
// console.log(lot.cars);
//
// //spacesFilled(lot) should give us 5
// function spacesFilled(specificLot) {
//   //specificLot is our lot object
//   let total = 0;
//     for (let i = 0; i < specificLot.cars.length; i++) {
//       let car = specificLot.cars[i];
//       total = total + car.size;
//       }
//     return total;
//     // return specificLot.cars.length;
//   }
// 
// console.log(spacesFilled(lot));
