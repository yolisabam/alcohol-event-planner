$( document ).ready(function() {
    
    var url="";

  $("body").on('click',"#modal-submit",function(event){
       event.preventDefault();

       var username = $("#username-modal").val().trim();

       var password = $("#password-modal").val().trim();

       console.log(username);
       console.log(password);

       var newUser = {
        "username": username,
        "password": password
       }

       $.post('/api/user',newUser).then(function(data){
        url = "user/" + data + "/events";
        window.location.href = url;
       })

       console.log('Clicked');

      getEvents();

  });

  function getEvents() {
    $.get("/user/:id/events", function(data){

    console.log(data);
    });
  };

    $("body").on('change',"#event-dropdown",function(event) {
      var value = $(this).val();
      var eventName = $(this).find('option:selected').attr('id');
      console.log(value);
      console.log(eventName);

      // var str = eventName;
      // str = str.replace(/\s+/g, '-').toLowerCase();
      // console.log(str);

      console.log(window.location.href);
      var windowUrl = window.location.href;
      var url = windowUrl + "/" + value + "/alcohol";

      window.location.href = url;

     // $.get("")
      
    });
});