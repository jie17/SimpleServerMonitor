<?php
header('Content-Type: text/javascript; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
#$ram = exec( "free -m | awk 'NR==2 {print $3/$2*100}'" );
$ram = exec( "free -m | awk '/Mem:/ { total=$2 } /buffers\/cache/ { used=$3 } END { print used/total*100}'");
$hdd = exec( "df | grep % | awk 'NR==2 {print $(NF-1)}' | awk 'gsub(/%/,\"\")'" );
$uptime = exec( "uptime | awk '{if(NF==11 || NF==12 || NF==13) {printf(\"%s \",$3);print $4;} if(NF==10) print $3}' | awk 'gsub(/,/,\"\");'" );
$load = exec( "top -bn1 | head -n 1 | awk '{print $(NF-2)}' | awk 'gsub(/,/,\"\");'" );
$out = array( 'ram' => $ram, 'hdd' => $hdd, 'uptime' => $uptime, 'load' => $load);
$result = json_encode($out);
#$callback=$_GET['callback'];
#echo $callback.'('.$result.')';
echo $result;
?>
