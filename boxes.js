
$(document).ready(function() {
  // console.log("Ready?");
  //
  // $('#secretBox').css('background-color', 'white')
  //                 .append($('<h1> secret box!</h1>'));
  // $('#row1 > div').addClass('boxType3');
  // //$('#row1')children().addClass('boxType3');
  // $('#row4 > div').last().css('display', 'none');
  // $('.boxType1').css('background-color', 'white')
  // $('#row2').children().first().attr('class', '').next().attr('class', '');
  // // let child2 = $('#div:nth-child(2)');
  // // console.log("child2 is " child2);
  //
  // $('#container div').not('.row').not('#secretBox').width('2px');

// $('#container').click(event)=> {
//
// })
//   $('#container').on('click', (event) => {
//     event.preventDefault();
// //dowload package emmet
//     console.log('EVENT.SCREENX, EVENT.SCREENY', event.screenX, event.screenY);
//   })
//
//   let a = $("<a href='https://www.galvanize.com/boulder'>Galvanize</a>");
//   $('.boxType1').append(a);
//
//   $('.boxType1').on('click', (event) => {
//     event.preventDefault();
// //dowload package emmet
//     alert("You can never leave the page!");
//   })

  $('.box').on('click', (event) => {
    event.preventDefault();
    $(event.target).toggleClass("puppyClass");
    // puppyClass.css('background-image', 'url("puppy.jpg")').css('background-size', '150px 100px');

    // $(event.target).toggleClass(puppyClass);
  })

  // $('#container').on('click', (event) => {
  //   event.preventDefault();
  //   if(event.target.id === 'container'){
  //     $(event.target).css('background-color', 'limegreen')
  //   }else{
  //     $(event.target).css('background-color', 'white')
  //     $(event.target).parent().parent().css('background-color', 'black')
  //   }
  // })
})
