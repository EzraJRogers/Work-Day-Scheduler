$(function() {
   

  setInterval(() => {
      $('#currentDay').text(dayjs().format("MMM DD, YYYY hh:mm:ss a"));
      
      
      $('.time-block').each(function() {
         var timeBlock = Number($(this).attr('id').slice(5));
         console.log("timeBlock" ,timeBlock);
         var currentHour = Number(dayjs().format("H"));
         console.log(currentHour);

          if (currentHour > timeBlock) {
              $(this).addClass("past");
              $(this).removeClass("future", "present");
              
          } else if (currentHour < timeBlock) {
              $(this).addClass("future");
              $(this).removeClass("past", "present");
              
          } else {
              $(this).addClass("present");
              $(this).removeClass("past", "future");
              
          }
      });

  }, 1000);
});

$(".saveBtn").click(function () {
  var $description = $(this).siblings(".description");
  var eventStuff = $description.val();
  var timeBlock = $(this).closest(".time-block").attr("id");
  localStorage.setItem(timeBlock, eventStuff);
});

$(".time-block").each(function(){
  var $description = $(this).children(".description");
  var timeBlock = $(this).attr("id");
  $description.val(localStorage.getItem(timeBlock));
});
