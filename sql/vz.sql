# VZ table
drop table vz;
create table vz (
    id BIGINT NOT NULL AUTO_INCREMENT,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    vz_id VARCHAR(32),
    mem_free BIGINT,
    mem_total BIGINT,
    space_free BIGINT,
    space_total BIGINT,
    cpu_status FLOAT,
    PRIMARY KEY (id)
) Engine = InnoDB;

GRANT ALL ON db1.* TO mm;
