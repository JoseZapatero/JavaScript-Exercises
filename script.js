// Easy Challenge One
const todayExcersie = function (excerise) {
    const getExcerise = function () {

      return console.log("Today's exercise:", excerise);
    };
    return getExcerise;
};
    const exceriseOne = todayExcersie("Running");
        console.log("Today's exercise:", exceriseOne());
      // const exceriseTwo = todayExcersie("Swimming");
      //   console.log("Today's exercise:", exceriseTwo());
      // const exceriseThree = todayExcersie("Dancing");
      //   console.log("Today's exercise:", exceriseThree());
      // const exceriseFour = todayExcersie("Fencing");
      //   console.log("Today's exercise:", exceriseFour());





// Medium Challenge Two

// function sharePizza2(x, y)
// {

//   console.log("Each person gets " + x/y + " slices of pizza " + " from our " + x + " slice pizza")
//   return x
// }
// console.log(sharePizza2(8, 2));

// console.log(sharePizza2(8, 3));

// console.log(sharePizza2(21, 20));

// console.log(sharePizza2(10, 3));


// Hard Challenge Three

// function pii(name, ssn) {
//   // "Private" variables here
//   let _name = name;
//   let _ssn = ssn;

//   // Public variables here
//   return {
//     // Getter Methods
//     getName() {
//       return _name;
//     },
//     getSsn() {
//       return _ssn;
//     },
//     // Setter Methods
//     setName(newName) {
//       _name = newName;
//     },
//     setSsn(newSsn) {
//       _ssn = newSsn;
//     }
//   };
// }
// const patientOne = pii('Tom', '123-45-6789');
// const patientTwo = pii('John', '123-45-6789');

// // These properties will be inaccessible
// console.log(patientOne._name);
// console.log(patientOne._Snn);

// // These properties will be accessible
// console.log(patientTwo.getName());
// console.log(patientTwo.getSsn()); 
