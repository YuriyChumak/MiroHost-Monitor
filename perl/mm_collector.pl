#!/usr/bin/perl

use DBI;
use Net::Ping;

# MySQL connections credentials
$db_hostname = "localhost";
$db_port = "3306";
$db_user = "mm";
$db_password = "Qwerty-123";
$database = "mm";

# Connect Database
$dbh = DBI->connect("DBI:mysql:$database:$db_hostname:$db_port", $db_user, $db_password); 

# Check server services
#$ping_host = "mirohost.devua.net";
#$ping_host = "www.google.com";
$ping_host = "www.cam.ac.uk";
$http_port = 80;
$https_port = 443;
$mysql_port = 3306;

# Log alerts
sub alert {
    my $status = @_[0];
    my $service = @_[1];
    if ($status == 0){
       $description = "(".@_[1].") service is not available";
       $sql = "insert into log (description, host) values ('$description', '$ping_host')";
       $sth = $dbh -> prepare($sql) or die "Cannot execute $statement: $dbh -> errstr\n";
       $sth->execute;
    }
}

# Check ICMP
$p = Net::Ping->new("icmp");
($ret, $duration, $ip) =  $p->ping($ping_host);
$icmp_alive = 1000 * $duration if $ret;
$icmp_alive = 0 if !$ret;
alert($icmp_alive, "ICMP");
 
# Check if HTTP is alive
$p = Net::Ping->new("tcp");
$p->port_number($http_port);
($ret, $duration, $ip) =  $p->ping($ping_host);
$http_alive = 1000 * $duration if $ret;
$http_alive = 0 if !$ret;
alert($http_alive, "HTTP");

# Check if HTTPS is alive
$p->port_number($https_port);
($ret, $duration, $ip) =  $p->ping($ping_host);
$https_alive = 1000 * $duration if $ret;
$https_alive = 0 if !$ret;
alert($https_alive, "HTTPS");

# Check if MySQL is alive
$p->port_number($mysql_port);
($ret, $duration, $ip) =  $p->ping($ping_host);
$mysql_alive = 1000 * $duration if $ret;
$mysql_alive = 0 if !$ret;
alert($mysql_alive, "MySQL");

$sql = "insert into ping (host, icmp, http, https, mysql) values ('$ping_host', '$icmp_alive', '$http_alive', '$https_alive', '$mysql_alive')";
$sth = $dbh -> prepare($sql) or die "Cannot execute $statement: $dbh -> errstr\n";
$sth->execute;

# Close coneections
$p->close();
$dbh->disconnect;
