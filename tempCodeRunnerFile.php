<?php
function thankyou(){
  $current_time = time();
  // var_dump($current_time);
  $coupon_url = "coupon image url";

  if ($current_time >= strtotime('2023-06-16') && $current_time < strtotime('2023-07-16')) {



    $coupon_url = "https://uncleharrysicecream.com/wp-content/uploads/2023/01/UH_June23_New_User.jpg";
  } elseif ($current_time >= strtotime('2023-07-16') && $current_time < strtotime('2023-08-16')) {

    $coupon_url = "https://uncleharrysicecream.com/wp-content/uploads/2023/01/UH_July23_NewUser.jpg";
  } elseif ($current_time >= strtotime('2023-08-16') && $current_time < strtotime('2023-09-16')) {

    $coupon_url = "https://uncleharrysicecream.com/wp-content/uploads/2023/01/UH_AUG23_NewUser.jpg";
  } elseif ($current_time >= strtotime('2023-09-16') && $current_time < strtotime('2023-10-16')) {

    $coupon_url = "https://uncleharrysicecream.com/wp-content/uploads/2023/01/UH_September23_NewUsesr.jpg";
  } elseif ($current_time >= strtotime('2023-10-16') && $current_time < strtotime('2023-11-16')) {

    $coupon_url = "https://uncleharrysicecream.com/wp-content/uploads/2023/01/UH_October23_NewUser.jpg";
  } else {

    $coupon_url = "https://uncleharrysicecream.com/wp-content/uploads/2023/01/UH_November23_NewUser.jpg";
  } 
var_dump($current_time);
  var_dump(strtotime('2023-07-16'));
  var_dump(strtotime('2023-08-16'));
echo($coupon_url);

}



thankyou();