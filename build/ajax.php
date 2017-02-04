<?php
//die();
//header("Cache-Control: no-store, no-cache, must-revalidate");
//header("Expires: ".date("r"));
echo 1;
die();
/*
error_reporting(7);
session_start();

function api($f,$p=array()){
	$post="";
	if(is_array($p) and count($p)>0){
		foreach($p as $k=>$v){
			if(is_array($v)){
				$pp.=$k."=".urlencode(json_encode($v))."&";
			}else{
				$pp.=$k."=".urlencode($v)."&";
			}
		}
	}
	$url="http://pinfot.ru:55550/mcdd_webapp/ncapi/".$f;
	$context=stream_context_create(array(
        'http' => array(
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded'.PHP_EOL,
            'content' => $pp
        )
    ));
    $data=file_get_contents($url,false,$context);
	$data_a=json_decode($data,true);
	if(is_array($data_a)){
		return $data_a;
	}else{
		return $data;	
	}
}


//$a=api("auth",array("login"=>"remadmin","pswd"=>"FlvbycrbqGfhjkm"));
//print_r($a);
function returnAPI($p){
	echo json_encode($p);
}
if(isset($_POST["f"]) and $_POST["p"])){
	$func=trim($_POST["f"]);
	$param=json_decode(trim($_POST["p"]),true);
	if($func=="authUser"){
		if(isset($param["login"]) and isset($param["pass"])){
			$apiR=api("auth",array(
				"login"=>$param["login"],
				"pswd"=>$param["pass"]
			));
			if(is_array($apiR) and count($apiR)>0){
				if(isset($apiR["AUTH_TOKEN"]) and isset($apiR["USER_ID"]) and isset($apiR["OPERATION_STATUS"]) and $apiR["OPERATION_STATUS"]==1){
					$ret=array();
					$_SESSION["rem_auth_token"]=trim($apiR["AUTH_TOKEN"]);
					$_SESSION["rem_l"]=$param["login"];
					$_SESSION["rem_p"]=$param["pass"];
					$_SESSION["rem_uid"]=trim($apiR["USER_ID"]);
					$ret["auth_token"]=trim($apiR["AUTH_TOKEN"]);
					returnAPI($ret);
				}
			}
		}
	}elseif($func=="srchDiag"){
		if(isset($param["srch"]){
			$apiR=api("diagnoses",array(
				"like"=>$param["srch"],
				"lim"=>20,
				"checktrans"=>true
			));
			if(is_array($apiR) and count($apiR)>0){
				if(isset($apiR["DIAGS"]) and isset($apiR["OPERATION_STATUS"]) and $apiR["OPERATION_STATUS"]==1){
					$ret=array();
					$ret["diags"]=$apiR["DIAGS"];
					returnAPI($ret);
				}
			}
		}
	}elseif($func=="addUser"){
		if(isset($param["f"]) and isset($param["i"]) and isset($param["pass"]) and isset($param["em"]) and isset($param["reg_token"])){
			$apiR=api("regbysms",array(
				"fname"=>$param["f"],
				"lname"=>$param["i"],
				"mname"=>$param["o"],
				"psw"=>$param["pass"],
				"em"=>$param["mail"],
				"rt"=>$param["reg_token"]
			));
			
		}
	}elseif($func=="getUserInfo"){
		//Что надо?
	}elseif($func=="getDiagInfo"){
		
	}elseif($func=="getChat"){
		if(isset($param["lim"])){
			$apiR=api("chatmsgs",array(
				"auth_token"=>$_SESSION["rem_auth_token"],
				"uid"=>$_SESSION["rem_uid"],
				"lim"=>$param["lim"]
			));
			if(is_array($apiR) and count($apiR)>0){
				if(isset($apiR["CHAT_MESSAGES"]) and isset($apiR["OPERATION_STATUS"]) and $apiR["OPERATION_STATUS"]==1){
					$ret=array();
					$ret["msgs"]=$apiR["CHAT_MESSAGES"];
					returnAPI($ret);
				}
			}
		}
	}elseif($func=="sendChat"){
		if(isset($param["msg"])){
			$apiR=api("chatmsg",array(
				"auth_token"=>$_SESSION["rem_auth_token"],
				"uid"=>$_SESSION["rem_uid"],
				"msg"=>$param["msg"]
			));
			if(is_array($apiR) and count($apiR)>0){
				if(isset($apiR["OPERATION_STATUS"]) and $apiR["OPERATION_STATUS"]==1){
					returnAPI(1);
				}else{
					returnAPI(0);
				}
			}
		}
	}
}

$apiR=api("diagnoses",array(
	"like"=>"",
	"lim"=>20,
	"checktrans"=>true
));

//print_r($apiR);
*/
?>