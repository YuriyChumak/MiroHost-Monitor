# PING table
drop table ping;
create table ping (
    id BIGINT NOT NULL AUTO_INCREMENT,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    host VARCHAR(32),
    icmp FLOAT,
    http FLOAT,
    https FLOAT,
    mysql FLOAT,
    PRIMARY KEY (id)
) Engine = InnoDB;

GRANT ALL ON db1.* TO mm;
