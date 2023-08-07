// Задание  на проверку знаний:
//
// Напишите функцию copyPrep, которая принимает один аргумент - объект prep, и возвращает новый объект, который является копией исходного объекта prep, в котором все тоже самое, но также появилось IsMarried: true . Используйте иммутабельный подход для создания копии объекта, включая его вложенные свойства.
//
// Должно получиться так:
//
// {   
//   name: 'Igor', 
//   sizes: { 
//          height: 177, 
//          weight: 80 
//      }, 
//   isMarried: true 
//  } 

let prep = {
  name: "Igor",
  sizes: {
      height: 177,
      weight: 80
  } 
};

const copyPrep = (prep) => {
  const copiedPrep = { ...prep };

  const copiedSizes = { ...copiedPrep.sizes };

  copiedPrep.isMarried = true;

  copiedPrep.sizes = copiedSizes;

  return copiedPrep;
};