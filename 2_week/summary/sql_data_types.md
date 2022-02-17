# SQL Data Types

| Data Type | Purpose | Additional Info |
|-----------|---------|-----------------|
| int(size) | nums w/o decimals | size = # of chars |
| double(size, d) | nums w/ decimals | size = # of chars : d = decimal places |
| decimal(size, d) | nums w/ decimals | size = # of chars : d = decimal places |
| char(size) | fixed-length strings | If # of chars < size, then space chars are added or chars are cut off |
| nchar(size) | fixed-length strings | If # of chars != size, then space chars are added  or chars are cut off |
| varchar(size) | variable-length strings | If # of chars != size, it is okay |
| date | months, day, year | holds the month, day, and year (YYYY-MM-DD) |
| datetime | month, day, year, time | holds month, day, year, and time (YYYY-MM-DD hh:mm:ss) |
| timestamp | month, day, year, time in timezone | holds month, day, year, and time (YYYY-MM-DD hh:mm:ss [TIMEZONE]) |
| BLOB | binary large objects | hold data like images, videos, etc. |
| bit | boolean values | stores 1 for TRUE : stores 0 for FALSE |
