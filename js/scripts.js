function Activity(title, location, startTime, duration, notes){
  this.actTitle = title,
  this.actLocation = location,
  this.startTime = startTime,
  this.duration = duration,
  this.notes = notes
}

Activity.prototype.all = function(){
  return "Do the " + this.actTitle + " at the " + this.actLocation + " at " + this.startTime;
}


$(document).ready(function() {
  $("form").submit(function(event){


    var inputTitle = $("input#title").val();
    var inputLocation = $("input#location").val();
    var inputTime = $("input#startTime").val();
    var inputDuration = $("input#duration").val();
    var inputNotes = $("input#notes").val();

    var newActivity = new Activity(inputTitle,inputLocation,inputTime, inputDuration, inputNotes)

    $("ul#activities").append("<li><span class='activity'>" + newActivity.all() +  "</span></li>");

    $(".activity").last().click(function() {
    $(".show-activity").show();
    $("#show-place h2").text(newActivity.actTitle);
    $(".title").text(newActivity.actTitle);
    $(".location").text(newActivity.actLocation);
    $(".startTime").text(newActivity.startTime);
    $(".duration").text(newActivity.duration);
      $(".notes").text(newActivity.notes);
    });

    $("input#Title").val(" ");
    $("input#location").val(" ");
    $("input#Time").val(" ");
    $("input#duration").val(" ");
    $("input#notes").val(" ");

      event.preventDefault();
  });
});
