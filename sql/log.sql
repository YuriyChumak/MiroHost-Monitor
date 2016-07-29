# LOG table
drop table log;
create table log (
    id BIGINT NOT NULL AUTO_INCREMENT,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    description VARCHAR(64),
    host VARCHAR(32),
    vz_id VARCHAR(32),
    PRIMARY KEY (id)
) Engine = InnoDB;

GRANT ALL ON db1.* TO mm;
