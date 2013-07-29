<?php
require("php_serial.class.php");

function Arduino($str){
	$serial = new phpSerial();
	$serial->deviceSet("/dev/tty.usbmodem411");
	$serial->confBaudRate(9600);
	$serial->confCharacterLength(8);
	$serial->deviceOpen();
	for ($i=0; $i<strlen($str); $i++){
		//echo "Sending ".$str[$i];
		$serial->sendMessage($str[$i]);
	}
    $serial->deviceClose();
}
Arduino($_REQUEST['msg']);
?> 
