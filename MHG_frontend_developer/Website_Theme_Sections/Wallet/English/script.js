$(document).ready(function() {
    $("#Wallet-button").click(function() {
      $(".History-container").show();
      $(".Payment-History").hide();
    });
  
    $("#Payment-button").click(function() {
      $(".Payment-History").show();
      $(".History-container").hide();
    });
  
    // Trigger click event on #Wallet-button when page is refreshed or first opened
    $("#Wallet-button").trigger("click");
  });