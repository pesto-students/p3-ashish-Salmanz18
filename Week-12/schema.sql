create database pesto;
use pesto;

create table city(
    cId int(2) primary key,
    cityName varchar(20),
    stateName varchar(20)
);

create table warehouse(
    wId int(2) primary key,
    wName varchar(20),
    location varchar(20),
    extra JSON
);


alter table warehouse add cId int(2);
alter table warehouse add foreign key (cId) references city (cId);

create table store(
    sId int(2) primary key,
    sName varchar(20),
    wId int(2),
    foreign key (wId) references warehouse(wId)
);

create table customer(
    cNo int(2) primary key,
    cName varchar(20),
    cAddress varchar(20),
    city varchar(20)
);

create table orders(
    oId int(2) primary key,
    oDate date,
    cNo int(2),
    foreign key (cNo) references customer(cNo)
);

create table items(
    itemNo int(2) primary key,
    itemDescription varchar(255),
    itemWeight decimal(5,2),
    cost decimal(5,2)
);


create table orderItem(
    itemNo int(2),
    oId int(2),
    quantity int(2),
    foreign key (oId) references orders(oId),
    foreign key (itemNo) references items(itemNo)
);

create table storeItem(
    itemNo int(2),
    sId int(2),
    quantity int(2),
    foreign key (sId) references store(sId),
    foreign key (itemNo) references items(itemNo)
); 

show tables;