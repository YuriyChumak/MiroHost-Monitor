#!/usr/bin/perl

use DBI;

# MySQL connections credentials
$db_hostname = "control.mirohost.devua.net";
$db_port = "3306";
$db_user = "mm";
$db_password = "Qwerty-123";
$database = "mm";

# Connect Database
$dbh = DBI->connect("DBI:mysql:$database:$db_hostname:$db_port", $db_user, $db_password);

# Memory and disk usage
$vz_id = "30080";

# Check disk
@space = `vzctl exec $vz_id df -B M`;
@mem = `vzctl exec $vz_id free -m`;
@cpu = `vzctl exec $vz_id mpstat`;

@space_split = split(/\s+/, $space[1]);
$space_total = $space_split[3];
$space_used = $space_split[2];
$space_total =~ s/M//g;
$space_used =~ s/M//g;
$space_free = $space_total - $space_used;

# Check memory
@mem_split = split(/\s+/, $mem[1]);
$mem_total = $mem_split[3];
$mem_used = $mem_split[2];
$mem_free = $mem_total - $mem_used;

# Check CPU
@cpu_split = split(/\s+/, $cpu[3]);
$cpu_status = $cpu_split[2];

$sql = "insert into vz (vz_id, mem_free, mem_total, space_free, space_total, cpu_status) values ('$vz_id', '$mem_free', '$mem_total', '$space_free', '$space_total', '$cpu_status')";
$sth = $dbh -> prepare($sql) or die "Cannot execute $statement: $dbh -> errstr\n";
$sth->execute;

# Close coneections
$dbh->disconnect;
